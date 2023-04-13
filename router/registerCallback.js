const express = require('express');
const router = express.Router();

router.get('/',(req,res) => {
    let name = req.body.name;
    let mobileNo = req.body.mobileNo;
    console.log("Name: "+name+" mobileNo: "+mobileNo);
    res.send(JSON.stringify({"Status":"Success"}));

});

module.exports = router;