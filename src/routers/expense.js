const express = require('express')
const Expense = require('../db/models/expense')
const {auth} = require('../middleware/auth')

const router = express.Router();

router.get('/expense', auth, async (req, res) => {
    try {
        const user = req.user;
        const sortMethod = req.query.sortMethod;

        await user.populate({
            path: 'expenses', 
            options: {
                sort: { 
                    sortMethod : -1 
                }
            }
        }).execPopulate();

        res.send(user.expenses);
    }catch (e) {
        console.log(e);
        res.status(500).send(e);
    }
})

router.post('/expense', auth, async (req, res) => {
    try {
        const user = req.user;
        const expense = new Expense(req.body);

        await expense.save();

        user.expenses.push(expense);
        user.save();

        res.status(201).send(expense)
    } catch (e) {
        console.log(e)
        res.status(400).send(e)
    }
})

router.delete('/expense/:_id', auth, async (req, res) => {
    try {
        const user = req.user;
        const expenseId = req.params._id;

        if (!user.expenses.includes(expenseId)) {
            // Entry does not belong to user
            res.status(404).send('Entry not found in user\s expense list...');
            return;
        }

        const expense = await Expense.findByIdAndDelete(expenseId);
        if (!expense) {
            // Entry not found... 200 OK to remove from client list anyway...
            res.send('Expense not found...');
            return;            
        }

        res.send(expense);
        
        user.removeExpense(expenseId); 
        user.save();

    } catch (e) {
        console.log(e);
        res.status(500).send(e);
    }
})

module.exports = router