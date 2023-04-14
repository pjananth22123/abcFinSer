const express = require('express');
const router = express.Router();

router.get('/',(req,res) => {
    let currentAge = req.body.currentAge;
    let retirementAge = req.body.retirementAge;
    let currentSavings = req.body.currentSavings;
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let mobileNo = req.body.mobileNo;
    let email = req.body.email;
    let ytoypercentageInc = req.body.ytoypercentageInc;
    let monthlyPremium = req.body.monthlyPremium;
    let totalPensionAmt = (req.body.retirementAge - req.body.currentAge) * 12 * monthlyPremium;
    totalPensionAmt = totalPensionAmt + currentSavings;
    let returnAmount = Math.trunc(totalPensionAmt * 2.5);
    res.type('application/json');
    res.send(JSON.stringify({"totalPensionSum":returnAmount}));

});

module.exports = router;