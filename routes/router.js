const express = require('express');   //fetch the existing instance
const { registerDoctor, registerPatient, createReport, all_reports, AllReports, login } = require("../controllers/userControllers");
const router = express.Router();
const passport = require('passport');

//register a doctor
router.post("/doctors/register", registerDoctor);

//login a doctor
router.post("/doctors/login",login);

//register a patient
router.post("/patients/register",passport.authenticate('jwt',{session: false}),registerPatient);

//creating a report
router.post("/patients/:id/create_report",passport.authenticate('jwt', {session: false}),createReport);

//creating all reports
router.get("/patients/:id/all_report",all_reports);

//fetching all the reports
router.get("/reports/:status",AllReports);

//exporting the router
module.exports = router;