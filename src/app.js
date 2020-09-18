const express = require('express');
const cors = require('cors');
require('./db/mongoose');
const cookieParser = require('cookie-parser')
const userRouter = require('./routers/user')
const walletRouter = require('./routers/wallet');
const incomeRouter = require('./routers/income');
const expenseRouter = require('./routers/expense');

const path = require('path');

const app = express();

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3000;

// Set routers to use
app.use(userRouter);
app.use(walletRouter);
app.use(incomeRouter);
app.use(expenseRouter);

// Connect application
app.listen(port, () => {
    console.log('Wallet server is up on port ' + port);
});