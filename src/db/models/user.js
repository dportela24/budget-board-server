const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const { createInputError, isEmail } = require('../../utils')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required:true,
        trim: true,
        minlength: [6, 'Password must contain 6 characters.']
    },
    incomes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Income'
    }],
    expenses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Expense'
    }]
},
    {
        timestamps: true
    }
);

userSchema.plugin(uniqueValidator, {message: 'This {PATH} is already registered.'})

userSchema.methods.toJSON = function () {
    const userObject = this.toObject();

    delete userObject.tokens;
    delete userObject.password;
    delete userObject.incomes;
    delete userObject.expenses;
    delete userObject.createdAt;
    delete userObject.updatedAt;
    delete userObject.__v

    return userObject;
}


userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id.toString(), username: this.username.toString()}, process.env.JWT_SECRET);

    return token;
};

userSchema.methods.removeAuthToken = function (token) {
    this.tokens = this.tokens.filter( (t) => {
        return t.token !== token
    });
};

userSchema.methods.removeIncome = function (id) {
    this.incomes = this.incomes.filter( (income) => {
        return !income.equals(id);
    });
};

userSchema.methods.removeExpense = function (id) {
    this.expenses = this.expenses.filter( (expense) => {
        return !expense.equals(id);
    });
};

userSchema.statics.findByCredentials = async (username, password) => {
    var errors = [];
    const user = await User.findOne({ username })
    if (!user) {
        errors.push(createInputError('username', 'No account with given username.'));
        throw errors;
    }

    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
        errors.push(createInputError('password', 'Wrong password'));
        throw errors;
    }

    return user;
}

userSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 8)
    }

    next();
})

userSchema.post('save', (error, doc, next) => {
    if (error) {
        const response = []

        // Errors from mongoose validators
        if (error.errors) {
            const keys = Object.keys(error.errors)

            keys.forEach((key) => {
                response.push(createInputError(key, error.errors[key].message))
            })
        } else {
            // Unknown error
            response.push(createInputError('password', 'Cannot store user'))
        }

        throw response;
    }
    next()
})

const User = mongoose.model('User', userSchema);

module.exports = User;