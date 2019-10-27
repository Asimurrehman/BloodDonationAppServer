const express = require('express');
const router = express.Router();
const Users = require('../models/Signup')
const verifyToken = require('../middleware/verifyToken')


router.post('/', async (req, res) => {
    const { email, Password } = req.body
    const user = await Users.findOne({ email })

    if (!user) {
        return res.status(409).json({ message: 'No user found' })
    }

    // if (Password !== user.Password) {
    //     return res.status(409).json({ message: "Invalid password" })
    // }


    const matchPassword = user.comparePassword(Password);

    if (!matchPassword) {
        return res.status(409).json({ message: "INVALID PASSWORD" });
    }

    await user.generateToken();
    return res.send(user)

})


module.exports = router;