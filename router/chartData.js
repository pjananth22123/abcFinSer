const express = require('express');
const router = express.Router();

router.get('/',(req,res) => {
    var jsonData = {};
    var key = 'Chart Data';
    jsonData[key] = []; 
    var data = {
        labels: 'Red',
        data: 12,
        color: 'Red'
    };
    var data2 = {
        labels: 'Blue',
        data: 19,
        color: 'Blue'
    };
    var data3 = {
        labels: 'Yellow',
        data: 3,
        color: 'Yellow'
    };
    var data4 = {
        labels: 'Green',
        data: 5,
        color: 'Green'
    };
    var data5 = {
        labels: 'Purple',
        data: 2,
        color: 'Purple'
    };
    var data6 = {
        labels: 'Orange',
        data: 3,
        color: 'Orange'
    };

    jsonData[key].push(data);
    jsonData[key].push(data2);
    jsonData[key].push(data3);
    jsonData[key].push(data4);
    jsonData[key].push(data5);
    jsonData[key].push(data6);

    res.type('application/json');
    res.send(JSON.stringify(jsonData));

});

module.exports = router;