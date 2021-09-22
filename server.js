// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express/cors and body-parser to run server and routes
const express =  require ('express')
const cors = require('cors');
const bodyParser=require('body-parser');


// Start up an instance of app
const app = express()
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors())
// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
app.listen(7000,()=>{
console.log('the port runs faster than MoSalah')
});

//creating a get route 
app.get('/getting',(req,res)=>{
    res.send(projectData)
});

//creating a post route 

app.post('/posting',(req,res)=>{
    projectData.temp=req.body.temp;
    projectData.date=req.body.date;
    projectData.userResponse=req.body.feelings;
res.send(projectData);
});