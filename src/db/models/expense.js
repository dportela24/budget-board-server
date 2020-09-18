const mongoose = require('mongoose')

const expenseSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
        trim: true
    },
    value: {
        type: Number,
        required:true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        reference: 'user'
    }
},
    {
        timestamps: true
    }
);

expenseSchema.methods.toJSON = function () {
    const userObject = this.toObject();

    userObject.date = userObject.createdAt;

    delete userObject.createdAt;
    delete userObject.updatedAt;
    delete userObject.__v;

    return userObject;
}

const Expense = mongoose.model('Expense', expenseSchema);

module.exports = Expense;