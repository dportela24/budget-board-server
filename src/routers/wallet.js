const express = require('express')
const path = require('path')
const {auth} = require('../middleware/auth')
const Expense = require('../db/models/expense')
const Income = require('../db/models/income');

const router = express.Router();

router.get('/all-entries', auth, async (req, res) => {
    try {
        const user = req.user;
        await user.populate('incomes').populate('expenses').execPopulate();

        res.send({
            incomes: user.incomes,
            expenses: user.expenses
        });
    } catch (e) {
        console.log(e);
        res.status(500).send(e);
    }
})


module.exports = router