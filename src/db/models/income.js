const mongoose = require('mongoose')

const incomeSchema = new mongoose.Schema({
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
        timestamps: true,
    }
);

incomeSchema.methods.toJSON = function () {
    const userObject = this.toObject();

    userObject.date = userObject.createdAt;
    
    delete userObject.createdAt;
    delete userObject.updatedAt;
    delete userObject.__v;

    return userObject;
}

const Income = mongoose.model('Income', incomeSchema);

module.exports = Income;