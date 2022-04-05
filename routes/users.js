const express = require('express');
// Task 21a
const router = express.Router();
const { User, Post } = require('../db/models');
const csrf = require('csurf');
const csrfProtection = csrf({ cookie: true });

// Task 27b
router.use((req, res, next) => {
    if (req.banana) {
        console.log('hi from users router')
    }
    next()
})

// Task 20 /users
router.get('/', async (req, res) => {
    // res.send('users router')
    // Task 20a
    console.log(req.banana)
    const users = await User.findAll();
    res.render('users', { users, title: 'Breaddit Users' })
})

// Task 20c
router.get('/:userId(\\d+)', async (req, res) => {
    console.log(req.params)
    const user = await User.findByPk(req.params.userId)
    // console.log(user)
    res.render('profile', { user, title: `${user.name}, welcome home` })
})

// Task 33a
router.get('/signup', csrfProtection, (req, res) => {
    res.render('signup', { csrfToken: req.csrfToken(), errors: [], user: {} })
})

const signUpValidator = (req, res, next) => {
    const { name, email, password, confirmPassword } = req.body;
    const emailReg = /^[^\s@]+@\w+\.[A-z]{2,3}$/
    req.errors = [];

    if (name.length < 2) {
        req.errors.push('Please provide a longer name')
    }
    if (!emailReg.test(email)) {
        req.errors.push('Please provide a valid email')
    }
    if (!(password === confirmPassword)) {
        req.errors.push('Please make sure to type the same password both times!')
    }

    next()
}
// Task 33c ^^vv
router.post('/signup', csrfProtection, signUpValidator, async (req, res) => {
    const { name, faveBread, email, password, avatar } = req.body
    if (req.errors.length > 0) {
        res.render('signup', {
            csrfToken: req.csrfToken(),
            errors: req.errors,
            user: req.body
        })
    } else {
        //Perform password hashing before createing the user
        const user = await User.create({
            name, faveBread, email, password, avatar
        })
        res.redirect('/users')
    }
})

// Task 34a
router.get('/login', csrfProtection, (req, res) => {
    res.render('login', { csrfToken: req.csrfToken(), errors: [], user: {} })
})

// Task 34c
router.post('/login', csrfProtection, async (req, res) => {
    const { email, password } = req.body
    req.errors = []
    const user = await User.findOne({
        where: {
            email
        }
    })
    //Fill out with password hashing
    //const isPassword =
    if (user && isPassword) {
        res.redirect('/users')
    } else {
        req.errors.push('Account validation failed.  Please Try again.')
        res.render('login', { csrfToken: req.csrfToken(), errors: req.errors, user: { email } })
    }
})

module.exports = router;