const mongoose = require('mongoose')
const Schema = mongoose.Schema



const PostSchema = new Schema({
    email: {
        type: String
    },
    fullName: {
        type: String
    },
    bloodGroup: {
        type: String
    },
    units: {
        type: Number
    },
    urgency: {
        type: String
    },
    country: {
        type: String
    },
    state: {
        type: String
    },
    city: {
        type: String
    },
    hospital: {
        type: String
    },
    contactNo: {
        type: String
    },
    instructions: {
        type: String,
        trim: true
    },
    createdAt: {
        type: Number,
        // default: Date.now() //getting from client
    },
    relation: {
        type: String
    },
    status: {
        type: String,
        default: 'Not fulfilled'
    },
    volunteers: {
        type: Object
    },
    comments: {
        type: Array
    },
    recieved: {
        type: Number,
        default: 0
    },
    required: {
        type: Number,

    }

})

const Posts = mongoose.model('Posts', PostSchema)
module.exports = Posts