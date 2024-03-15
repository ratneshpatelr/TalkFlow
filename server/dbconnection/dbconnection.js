const mongoose = require('mongoose')

const dbconnect = async() => {
    try {
      const connect =   mongoose.connect(process.env.MONGO_URL)
      .then(() => {
       console.log("DataBase connected successfully");
       })
      .catch((err) => {
        console.log(err.message);
       });
      } catch (error) {
        console.log(error)
      }
     }
  
 module.exports = dbconnect    