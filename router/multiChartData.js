const express = require('express');
const router = express.Router();

router.get('/',(req,res) => {
    var jsonData = {
        labels: ["January","February","March","April","May","June","July"],
        datasets: [
          {
            label: 'Dataset 1',
            data: [10,20,30,10,5,9,1],
            backgroundColor: "Red",
          },
          {
            label: 'Dataset 2',
            data: [15,19,25,20,43,10,2],
            backgroundColor: "Blue",
          },
          {
            label: 'Dataset 3',
            data: [25,39,5,30,13,31,25],
            backgroundColor: "Green",
          },
        ]
      };
    /** var key = 'Chart Data';
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
    jsonData[key].push(data6);**/

    res.type('application/json');
    res.send(JSON.stringify(jsonData));

});

module.exports = router;