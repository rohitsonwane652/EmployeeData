const mongoose = require('mongoose')

const expenseSchema = new mongoose.Schema(
    {
        month:{type:String},
        expense:{type:Number},
        profit:{type:Number},
        revenue:{type:Number}
    },
    {
        collection:"expense"
    }
)

const model = mongoose.model("Expense",expenseSchema);

module.exports = model;