const express = require('express');
const router = express.Router();

router.post('/',(req,res) => {
    let name = req.body.name;
    let age = req.body.age;
    let mobileNo = req.body.mobileNo;
    let email = req.body.email;
    let gender = req.body.gender;
    let tobacoUsage = req.body.tobacoUsage;
    let emiCalc = 2000;
    
    if(age >= 40){
        if(gender === "M"){
            if(tobacoUsage === true){
                emiCalc = emiCalc + 4000;
            }
            else {
                emiCalc = emiCalc + 3500;
            }
        } else {
            if(tobacoUsage === true){
                emiCalc = emiCalc + 3000;
            }
            else {
                emiCalc = emiCalc + 2500;
            } 
        }
    } else {
        if(gender === "M"){
            if(tobacoUsage === true){
                emiCalc = emiCalc + 2000;
            }
            else {
                emiCalc = emiCalc + 1500;
            }
        } else {
            if(tobacoUsage === true){
                emiCalc = emiCalc + 1000;
            }
            else {
                emiCalc = emiCalc + 500;
            } 
        }
    }
    res.type('application/json');
    res.send(JSON.stringify({"premium":emiCalc}));

});

module.exports = router;