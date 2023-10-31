const mongoose = require("mongoose");
const dotenv = require('dotenv');

dotenv.config();

const connectDB = async()=> {
    try {
        await mongoose.connect(process.env.URL_CONNET_DEPLOY,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
       console.log("dbconetada correctamente");
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

module.exports = {
    connectDB
}