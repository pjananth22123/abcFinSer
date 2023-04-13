const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 3500;

const app = express();

const whitelist = ['https://yoursite.com','http://localhost:3500'];
const corsOptions = {
    origin: (origin,callback) => {
        if(whitelist.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Not Allowed by CORS'));
        }
    },
    optionSuccessStatus: 200
};
app.use(cors(corsOptions));

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use('/banking/emiCalc',require('./router/emiCalc'));
app.use('/banking/loanOnboard',require('./router/loanOnboard'));
app.use('/ins/registerCallback',require('./router/registerCallback'));
app.use('/stk/pensionCalc',require('./router/pensionCalc'));
app.use('/ins/calcPremium',require('./router/premiumCalc'));

app.all('*',(req,res) => {
    res.status(404);
    res.send('Resource Not Found');
});

app.listen(port,() => {
    console.log("Server listening in port 3500");
});