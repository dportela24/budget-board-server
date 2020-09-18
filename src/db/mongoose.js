const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_DB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
.then(() => {
    console.log('Connected to Wallet database!');
}).catch( (err) => {
    throw new Error(`Could not connect to Wallet database. Error: ${err}`);
})