# hospital-api
coding ninja backend project
## Description :
This is  hospital Api for doctors of hospital where doctor can register them self then register there patients and create report of there patients after checkup.
## Tech Stack :
 Node.Js and Mongo DB
## features
1. Register Doctor with username, password and name.
2. Login(authenticate) User using passport-local and returns a jwt-token to be to access(authorize) protected routes.
3. After logging-in the doctor can do various things such as : register patient, generate a report of patient, view all reports of a particular patient, filter all the reports by status.
4. Generation of report(protected by jwt) : A doctor has to enter enter the status for a particular patient and can generate the report according to it.
5. View all reports of a patient(protected by jwt) : A doctor can view all the reports of a patient.
6. View all the reports filtered by status(protected by jwt) : A doctor can view all reports present in database filtered by status.
7.Unit testing integrated.

## For LocalSystem
for this objective user can download the repository from git and then extract the folder and then type npm start command to run this api.
