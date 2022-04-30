const mongoose = require('mongoose')

const employeeSchema = new mongoose.Schema(
    {
        name:{
            required:[true,"Full Name is required"],
            type:String
        },
        email:{
            required:[true,"Email is required"],
            type:String,
            unique:true,
            lowercase:true,
        },
        age:{
            required:[true,"Please enter age"],
            type:Number
        },
        salary:{
            required:[true,"Salary is required"],
            type:Number
        },
        city:{
            required:[true,"City is required"],
            type:String
        },
        employeeid:{
            required:[true,"Index is required"],
            type:Number,
            unique:true
        }
    }
);

const model = mongoose.model("Employee",employeeSchema);

module.exports = model;