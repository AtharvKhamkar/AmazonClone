//IMPORTS FROM PACKAGES
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//IMPORTS FROM OTHER FILES
const authRouter = require('./routes/auth.js')


// INIT
const app = express();
const PORT = 3000;
const DB = "mongodb+srv://atharvKhamkar:atharv19012002@cluster0.hz3j2r6.mongodb.net/?retryWrites=true&w=majority"

//middleware
app.use(express.json());
app.use(authRouter);

//Connections

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect(DB).then(() => {
    console.log("Connection Successful");
}).catch((e) => {
    console.log(e);
});


app.listen(PORT, "0.0.0.0",() => {
    console.log(`Connected at port ${PORT}`);
})