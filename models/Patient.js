const mongoose = require('mongoose');

//patient schema
const patientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true,"Please Provide patient name"],
        unique: true,
    },
    reports:[
        {
            status:{
                type: String,
                required: true,
                enum:["Negative","Traveled-Quarantine","Symptoms_Quarantine","Positive-admit"],
            },
            date:{
                type: Date,
                required:true,
            }
        },
    ],
    doctor:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "Doctor",
        required: true,
    },
});

//export patient model
const Patient = new mongoose.model('Patient', patientSchema);

module.exports = Patient;