const express = require('express');
const router = express.Router();

router.get('/',(req,res) => {
    let loanAmount = req.body.loanAmount;
    let intRate = req.body.intRate;
    let monthIntRate = intRate/1200;
    let tenure = req.body.tenure*12;
    console.log(req.body.loanAmount);
    let emi = Math.trunc((loanAmount * monthIntRate * Math.pow((1+ monthIntRate),tenure))/(Math.pow((1+monthIntRate),tenure) - 1));
    res.send(JSON.stringify({"EMI":emi}));

});

module.exports = router;