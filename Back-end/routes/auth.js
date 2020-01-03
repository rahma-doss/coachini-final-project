const express = require('express')
const router = express.Router()
const { check, validationResult } = require('express-validator');
var bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

const auth = require('../middelware/auth')
const User = require('../modules/User')
const jwtSecret = 'secret'



//Get the user logged in
//private route

router.get('/', auth, (req, res) => {
    // res.send('get user logged in!')
    User.findById(req.user.id)
    .then(user=> res.json(user))
    .catch(err=>console.log(err.message))
})

//Login the user
router.post('/', [
    check('email', 'Please include a valid email!').isEmail(),
    check('password', 'Password is required!').not().isEmpty()
], (req, res) => {

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.json({ errors: errors.array() });
    }

    const { email, password } = req.body

    User.findOne({ email })
        .then(user => {
            if (!user) {
                //chek if user exists
                return res.json({ msg: "Please Register before!" })
            } else {
                //compare password
                bcrypt.compare(password, user.password, (err, isMatch) => {
                    if (err) {
                        console.log(err.message)
                    } else if (isMatch) {
                        const payload = {
                            user: {
                                id: user.id
                            }
                        }
                        jwt.sign(payload, jwtSecret, { expiresIn: 3600000 }, (err, token) => {
                            if (err) throw err
                            res.json({ token })
                        })
                    } else {
                        return res.json({ msg: "Wrong Password!" })
                    }

                })
            }
        })
        .catch(err => console.log(err.message))
})

module.exports = router