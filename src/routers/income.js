const express = require('express');
const {auth} = require('../middleware/auth')
const Income = require('../db/models/income');

const router = express.Router();

router.get('/income', auth, async (req, res) => {
    try {
        const user = req.user;
        const sortMethod = req.query.sortMethod;

        await user.populate({
            path: 'incomes', 
            options: {
                sort: { 
                    sortMethod : -1 
                }
            }
        }).execPopulate();
        
        res.send(user.incomes);
    } catch (e) {
        console.log(e)
        res.status(500).send(e);
    }
})

router.post('/income', auth, async (req, res) => {
    try {
        const user = req.user;
        const income = new Income(req.body);

        await income.save();

        user.incomes.push(income);
        user.save();
    
        res.status(201).send(income)
    } catch (e) {
        console.log(e)
        res.status(400).send(e)
    }
})

router.delete('/income/:_id', auth, async (req, res) => {
    try {
        const user = req.user;
        const incomeId = req.params._id;

        if (!user.incomes.includes(incomeId)) {
            // Entry does not belong to user
            res.status(404).send('Entry not found in user\s income list...')
            return;
        }

        const income = await Income.findByIdAndDelete(req.params._id);
        if (!income) {
            // Entry not found... 200 OK to remove from client list anyway...
            res.send('Income not found...');
            return;            
        }
        
        res.send(income);

        user.removeIncome(req.body._id);
        user.save();
    } catch (e) {
        res.status(500).send(e);
    }
})

module.exports = router;