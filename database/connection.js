const mongoose = require('mongoose');

module.exports = async () => {
    try {
        await mongoose.connect(process.env.DB_URL || "mongodb://127.0.0.1/api-database", {useNewUrlParser: true})
        console.log("DB Connected");
    } catch (error) {
        console.log("DB Connect error", error)
        throw new Error(error);
    }

}