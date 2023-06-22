const Doctor = require("../models/doctor");
const Patient = require("../models/Patient");
const jwt = require('jsonwebtoken');

//to register the doctor
module.exports.registerDoctor = async(req, res, next) => {
    try {
        //check if password and confirm password matches
        const doctor = await Doctor.create(req.body);

        res.status(200).json({
            success: true,
            message: "doctor created successfully",
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "could not create a doctor, internal server error",
        });
    }
};

//logging in a doctor
module.exports.login = async(req, res, next)=>{
    try{
        //find the doctor if he/she exists
        const user = Doctor.find(req.body);

        //if doctor exists and passwords match
        if(user){
            const token = jwt.sign(user.id,"secret");
            res.status(200).json({
                success: true,
                token,
            });
        }else{
            res.status(404).json({
                success: false,
                message: "name or password does not match",
            });
        }
    }catch(error){
        res.status(500).json({
            success: false,
            message: "something went wrong",
        });
    }
};

//registering patients
module.exports.registerPatient = async(req,res,next) =>{
    try{
        req.body.doctor = "6491626e3794d5606645d95f";
        const patient = await Patient.create(req.body);

        res.status(200).json({
            success: true,
            message: "successfully created a patient",
        });
    }catch(error){
        res.status(500).json({
            success: false,
            message: "could not create a patient, internal server error",
        });
    }
};

//creating report
module.exports.createReport = async(req, res, next)=>{
    try{
        const patient = await Patient.findById(req.params.id);
        req.body.date = Date.now();

        patient.reports.push(req.body);

        patient.save();

        res.status(200).json({
            success: true,
            message: "report submitted successfully",
        });
    }catch(error){
        res.status(500).json({
            success: false,
            message: "could not created a report, internal server error",
        });
    }
};

//creating all reports
module.exports.all_reports = async(req, res, next)=>{
    try{
        const patient = await Patient.findById(req.params.id);

        res.status(200).json({
            success:true,
            reports:patient.reports,
        });
    }catch(error){
        res.status(500).json({
            success: false,
            message: "could not able to fetch the patient reports",
        });
    }
};

//generating all the reports of the user
module.exports.AllReports = async(req, res, next)=>{
    try{
        const patient= await Patient.find({
            reports:{$elemMatch: {status: req.params.status}}, 
        });

        res.status(200).json({
            success:true,
            date: patient,
        });
    }catch(error){
        res.status(500).json({
            success: false,
            message: "could not able to fetch the reports",        
        });
    }
};