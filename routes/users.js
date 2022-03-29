const express = require('express');
// Task 21a
const router = express.Router();
const { User, Post } = require('../models');

// Task 20 /users
router.get('/', async (req, res) => {
    // res.send('users router')
    // Task 20a
    const users = await User.findAll();
    res.render('users', { users, title: 'Breaddit Users' })
})

// Task 20c
router.get('/:userId', async (req, res) => {
    console.log(req.params)
    const user = await User.findByPk(req.params.userId)
    // console.log(user)
    res.render('profile', { user, title: `${user.name}, welcome home` })
})


module.exports = router;