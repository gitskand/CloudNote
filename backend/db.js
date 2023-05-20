const mongoose = require('mongoose');


// Mongoose is a Node. js-based Object Data Modeling (ODM) library for MongoDB,  mongoose is like a kinf of layer on the top of mongodb which privies the actions to deal with node server and api //

//mongoose map the objects made in js to the document of database(mongo), and convert the return value into a json form

const mongoURI="mongodb://localhost:27017/cloudnote"

const connectToMongo = ()=>{
    mongoose.connect(mongoURI)
    console.log("connected to mongo successfullyy")
}

module.exports = connectToMongo;