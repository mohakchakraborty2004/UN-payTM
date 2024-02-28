const mongoose = require('mongoose');
//get your url from mongodb compass or learn how to do it from yt (i've removed mine for obvious reasons, ik ishouldve added a .env file.)
mongoose.connect('YOUR_MONGODB_URL');

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
