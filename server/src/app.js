const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const Employee = require('./model/employee')
const Expense = require('./model/expenses')
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

const dbConnect = async()=>{
    try{
        await mongoose.connect(`${process.env.MONGO_URL}`)
        console.log("Database connected succesfully")
    }
    catch(error){
        console.log(`Eroor ${error.message}`)
    }
}
dbConnect();


//Get Employee Date
app.get('/',async (req,res)=>{
    const data = await Employee.find();
    res.json(data);
});

//Get Employee by Email
app.get('/data/search/:email',async (req,res)=>{
    const queryemail = req.params.email;
    const datas = await Employee.findOne({email:queryemail});
    res.json(datas);
})

//Post Employee Data
app.post('/data',async (req,res)=>{
    const {name,email,age,salary,employeeid,city} = req?.body;
    try{
        const employee = await Employee.create({name,email,age,salary,employeeid,city});
        res.json(employee)
    }
    catch(error){
        res.json(error.message)
    }
});

//Update Employee Data
app.post('/data/update/:email',async (req,res)=>{
    const queryEmail = req.params.email
    const data = await Employee.updateOne({email:queryEmail},{
        name:req.body.name,
        email:req.body.email,
        age:req.body.age,
        salary:req.body.salary
    })
    res.json(data)
})


//Get Expenses Data
app.get('/expense/data',async (req,res)=>{
    const expense = await Expense.find();
    res.json(expense);
});

//Post Expenses Data
app.post('/expense/data',async (req,res)=>{
    const data = req?.body;
    try{
        const expense = await Expense.create(data);
        res.json(expense)
    }
    catch(error){
        res.json(error.message)
    }
});




module.exports = app