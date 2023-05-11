const express = require('express');
const cors = require('cors');
require('dotenv').config({ path: __dirname + '/.env' });
const port = process.env.PORT || 3500;
process.env.TZ = "Asia/Calcutta";

const app = express();

const admin=require('firebase-admin');

console.log(process.env.SERVICE_ACCOUNT);

const whitelist = ['https://yoursite.com','http://localhost:3500'];
const corsOptions = {
    origin: (origin, callback) => {
        callback(null, true)
    },
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

app.use(express.urlencoded({extended:false}));
app.use(express.json());

var serviceAccount = require('./service.json');
/** var serviceAccount = process.env.SERVICE_ACCOUNT;**/
admin.initializeApp({credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://project-id.firebaseio.com",
    authDomain: "project-id.firebaseapp.com",}); 

var db=admin.firestore();
/** var formRef= db.collection("multiPageFormCol");

formRef.get()
       .then((value) => value.forEach((doc) => {
        console.log(doc.data().creationTime.toDate().toLocaleString());
        console.log(doc.id);
        }
        ))
       .catch((error) => console.log("Error"+error)); **/
 app.get('/read/:id', async(req,res) => {
    try{
        const collRef = db.collection("multiPageFormCol");
        const response = await collRef.where('email','==',req.params.id).get();
        let responseArr = [];
        console.log("Inside Get Call",response.size);
        if(response.size >= 1){
        response.forEach((doc) => {
            let currData = {};
            currData.email = doc.data().email;
            currData.firstName = doc.data().firstName;
            currData.id = doc.id;
            currData.lastName = doc.data().lastName;
            currData.other = doc.data().other;
            currData.creationTime = doc.data().creationTime.toDate().toLocaleString();
            currData.nationality = doc.data().nationality;
            currData.middleName = doc.data().middleName;
            console.log("Response:",currData);
            responseArr.push(currData);
        });
        res.type('application/json');
        res.send(JSON.stringify(responseArr));
    }
    else {
        res.statusCode = 404;
        res.type('application/json');
        res.send(JSON.stringify(responseArr));
    }       
    } catch(error) {
        console.log("Error",error);
        res.send(error);
    }
}); 

app.use('/banking/emiCalc',require('./router/emiCalc'));
app.use('/banking/loanOnboard',require('./router/loanOnboard'));
app.use('/ins/registerCallback',require('./router/registerCallback'));
app.use('/stk/pensionCalc',require('./router/pensionCalc'));
app.use('/ins/calcPremium',require('./router/premiumCalc'));
app.use('/chart/getData',require('./router/chartData'));
app.use('/chart/getMultiData',require('./router/multiChartData'));

app.all('*',(req,res) => {
    res.status(404);
    res.send('Resource Not Found');
});

app.listen(port,() => {
    console.log("Server listening in port 3500");
});