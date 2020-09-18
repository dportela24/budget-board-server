const express = require('express');
require('./db/mongoose');
const userRouter = require('./routers/user')
const walletRouter = require('./routers/wallet');
const incomeRouter = require('./routers/income');
const expenseRouter = require('./routers/expense');

const app = express();
app.use(express.json());

// Add response header to deal with CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Set routers to use
app.use(userRouter);
app.use(walletRouter);
app.use(incomeRouter);
app.use(expenseRouter);
app.all('*', function(req, res){
    res.status(404).send('Not found');
});

// Set port and connect
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Wallet server is up on port ' + port);
});