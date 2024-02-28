const express =  require("express");
const jwt = require("jsonwebtoken");
const JWT_SECRET = require("../config.js")
const mongoose = require("mongoose")

const { User, Account } = require("../db");
const router =  express.Router();
const { createUser, loginUser, updateUser } = require("../types.js");
const { authMiddleware } = require("./authMiddleware.js");



router.post("/signup", async (req,  res) => {

    try {
        
        const {success} = createUser.safeParse(req.body);
       // console.log(res.body);
       // console.log(success);
        if(!success){
            return res.json({
                msg : "invalid inputs in sign up"
            })
        }
    
        const existingUser = await User.findOne({
            email : req.body.email
        })

       // console.log(existingUser);
    
        if(existingUser){
            return res.json({
                msg : "email already exists"
            })
        }
    
        const create = await User.create({
            firstName : req.body.firstName,
            lastName : req.body.lastName,
            email : req.body.email,
            password : req.body.password
        })

        const UserId = create._id 

        const createAmount = await Account.create({
            userId : UserId,
            balance : 1 + Math.random() * 10000
        })

        const token = jwt.sign({
            UserId
        } , "secret")
    
        res.json({
            msg : "user created successfully",
             token: token,
             createAmount
        })


    } catch (error) {
        console.log("something occured [you're a dumb kid, if you copy code]");
        console.log(error);
    }
     

})

router.post("/login", async (req, res)=> {

try {

    const {success} = loginUser.safeParse(req.body);
    console.log(success);
    if(!success){
        return res.status(411).json({
            msg : "error while logging in/ invalid charaters"
        })
    }

    const findUser = await User.findOne({
        email : req.body.email
    })
    

    const password = req.body.password
    // console.log(password)
    if(!findUser){
        return res.json({
            msg : "user doesnt exist"
        })
    }
    
        const UserId = findUser._id 

       // console.log(UserId)

        const token = jwt.sign({
            UserId
        }, "secret")

       // console.log(token)

        if(findUser.password == password){
           return res.json({
            msg : "user loggedin successfully", 
            token : token,
           })
    
    }
} catch (error) {
    console.log(error)
}
    
})




router.put("/updateUser",authMiddleware, async (req, res) =>{


    const {success} = updateUser.safeParse(req.body)

    if(!success){
        return res.json({
            msg : "invalid inputs"
        })
    }

    const update = await User.updateOne({
        _id : req.UserId
      }, req.body)

    console.log(update)

    res.json({
        msg : "updated successfully" , 
        update
    })
})



router.get("/get" ,   async (req, res)=> {
   // console.log("hello")
  //  res.json({
  //      msg : "hello"
  //  })

 /* const firstName = req.body.firstName
  const lastName =  req.body.lastName

  const FindUsers = await User.find({
    firstName : firstName, 
    lastName : lastName
  })

  const foundUserId = FindUsers.map(user => ({
    "fisrt name" : user.firstName ,
    "last name ": user.lastName,
    "UserId" : user._id
  }))*/

  const filter =  req.query.filter || "" ;

  const FindUsers = await User.find({
    $or : [
        {firstName : {
            $regex : filter
        }},
        {lastName :     {
            $regex : filter
        }}
    ]
  })
   
  
 
 
 const Found = FindUsers.map(user => ({
    email : user.email,
    firstName : user.firstName,
    lastName : user.lastName,
    _id : user._id  }))
  
 

  res.json({ 
     
    Found
   
  })
})



module.exports = {
    router
}