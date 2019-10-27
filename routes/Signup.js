const express = require('express');
const router = express.Router();
const Users=require('../models/Signup')
const verifyToken = require('../middleware/verifyToken')

router.post('/', (req, res) => {
    // const user = req.body;
    // const newUser = new Users(user);

    // newUser.save()
    // .then(() => {
    //     res.send({message: "User added successfully!"})
    // })
    // .catch(e => {
    //     console.log('e ===>', e);
    //     res.send({message: e.message})
    // })
    const user = req.body
    const newUser = new Users(user)

    newUser.save()
        .then(result => {
            res.send(result)
        })
        .catch(err => {
            if (err.code === 11000) {
                res.send({ message: 'USER ALREADY EXISTS' })
            } else {
                res.send({ message: err })
            }
        })
})

module.exports = router;
