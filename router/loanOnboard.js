const express = require('express');
const router = express.Router();

router.get('/',(req,res) => {
    let name = req.body.name;
    let city = req.body.city;
    let mobileNo = req.body.mobileNo;
    let email = req.body.email;
    console.log("Name: "+name+" City: "+city+" mobileNo: "+mobileNo+" email: "+email);
    res.send(JSON.stringify({"Status":"Success"}));

});

module.exports = router;