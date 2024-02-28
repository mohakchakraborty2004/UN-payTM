const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://cmohak2004:mohak-20@cluster-paytm.3xzyfb4.mongodb.net/');

const userSchema = mongoose.Schema({
    firstName : String,
    lastName : String,
    password : String,
    email : String
})

const accountSchema = mongoose.Schema({

    userId :{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required : true

    }, 
    balance : {
        type :  Number,
        required : true
    }

})

const User = mongoose.model("Users", userSchema);
const Account = mongoose.model("Account", accountSchema);

module.exports = {
    User,
    Account
}