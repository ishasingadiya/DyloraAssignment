const mongoose = require("mongoose");
const empSchema = new mongoose.Schema({
    name: String,
    email: String,
    ID: Number,
    mobile: Number,
    department: String,
    designation: String,
    salary: Number
});
module.exports = mongoose.model("Employee", empSchema);
