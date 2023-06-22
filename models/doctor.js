const mongoose = require("mongoose");

//doctor schema
const doctorSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "please Enter Your Name"],
    },
    password:{
        type: String,
        required: [true, "Please Enter Your Password"],
        minLength: [6, "Password should be greater than 6 characters"],
    },
});

const Doctor = new mongoose.model("Doctor", doctorSchema);

module.exports = Doctor;