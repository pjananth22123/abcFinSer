const express = require('express');
const router = express.Router();

router.post('/',(req,res) => {
    let name = req.body.name;
    let mobileNo = req.body.mobileNo;
    console.log("Name: "+name+" mobileNo: "+mobileNo);
    res.type('application/json');
    res.send(JSON.stringify({"Status":"Success"}));

});

module.exports = router;