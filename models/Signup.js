
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

const UsersSchema=new Schema({
    FirstName:{
        type:String
    },
    LastName:{
        type:String
    },
    email:{
        type:String,
        unique:true
    },
    BloodGroup:{
        type:String
    },
    Password:{   
        type:String
    },
    createdAt:{
        type:Number,
        default:Date.now()
    },
    token:  String
})


UsersSchema.methods.comparePassword = function (Password) {
    const user = this;

    return bcryptjs.compareSync(Password, user.Password);
}


UsersSchema.methods.generateToken = async function () {
    const user = this;
    const token = jwt.sign({ _id: user._id }, "b16158031", {})
    user.token = token;

    await user.save();
    return;
}

UsersSchema.methods.removeToken = async function (token) {
    const user = this;

    await user.findOneAndUpdate({ token }, { token: null });
    return;
}




//Hook that will run before (new Users()).save()
UsersSchema.pre("save", function (next) {
    const user = this;

    if (user.isModified('Password')) {
        const salt = bcryptjs.genSaltSync(10);
        const hash = bcryptjs.hashSync(user.Password, salt);

        user.Password = hash;
    }
    next();
})





const Users = mongoose.model('Users', UsersSchema);

module.exports = Users;