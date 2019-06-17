const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");
const colors = require("colors");

const connectDB = async () => {
   try {
      await mongoose.connect(db, {
         useNewUrlParser: true,
         useCreateIndex: true,
         useFindAndModify: false
      });
      console.log("MongoDB connected...".bold.green);
   } catch (err) {
      console.error(err.message.red);
      process.exit(1);
   }
};

module.exports = connectDB;
