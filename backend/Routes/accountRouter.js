const express =  require("express"); 
const { authMiddleware } = require("./authMiddleware");
const { Account, User } = require("../db");
const mongoose = require("mongoose");
const acc_router = express.Router();

acc_router.get("/balance", authMiddleware, async (req, res)=> {
    const UserId = req.UserId ;
    const balance = await Account.findOne({
    UserId
   })

   res.json({
    balance
   })
})

acc_router.post("/transfer", authMiddleware, async (req, res)=> {
    const session =  await mongoose.startSession()

    session.startTransaction();
    const {amount , to} = req.body

    const fromAccount = await Account.findOne({
        userId : req.UserId
    }).session(session);

     console.log(fromAccount)
     console.log(Account.balance)

    if(!fromAccount || Account.balance < amount){
       await session.abortTransaction();
        return res.json({
            msg : "insufficient balance"
        })
    }

    const toAccount =  await Account.findOne({
      userId :  to
    }).session(session);

    console.log(toAccount)

    if(!toAccount){
        await session.abortTransaction();
        return res.json({
            msg : "invalid account"
        })
    }


    await Account.updateOne({UserId : req.UserId}, {
        $inc : {balance : -amount}
    }).session(session)

    await Account.updateOne({userId : to}, {
        $inc : {
            balance : amount
        }
    }).session(session)

    await session.commitTransaction();

    res.json({
        msg : "transaction successfull"
    })
})

module.exports = {
    acc_router
}