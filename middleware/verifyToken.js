const jwt = require('jsonwebtoken');
const Users = require('../models/Signup')


const verifyToken = function (req, res, next) {
    let token = req.headers.authorization;

    if (token) {
        token = token.replace('Bearer ', '')

        jwt.verify(token, 'b16158031', async (err, decode) => {
            if (err) {
                res.send({ message: 'INVALID AUTHORIZATION' })
            } else {
                console.log('decode ===>', decode);
                const tokenExist = await Users.findOne({ _id: decode._id, token });
                if (tokenExist) {
                    next();
                } else {
                    res.send({ message: 'INVALID AUTHORIZATION' })
                }
            }
        })
    } else {
        res.send({ message: 'INVALID AUTHORIZATION' })
    }

}

module.exports = verifyToken;