const express = require('express');
const router = express.Router();

// router.use('/users', require('./users.js'))
// router.use('/posts', require('./posts.js'))

router.use('/SignUp', require('./Signup'))
router.use('/Login',require('./Login'))
router.use('/post',require('./Post'))

module.exports = router;