const express = require('express');
const router = express.Router();
const { Subbreaddit, Post } = require('../models');
const csrf = require('csurf');
const csrfProtection = csrf({cookie: true});


// Task 26a
router.get('/new', csrfProtection, async(req, res) => {
    const subs = await Subbreaddit.findAll()
    res.render('create-post', {subs, data: {}, errors: [], csrfToken: req.csrfToken()})
})

const contentCheck = (req, res, next) => {
    if (req.body.content.length > 1) {
        next()
    } else {
        req.errors = ['please provide more content']
        next()
    }
}

router.post('/', contentCheck, csrfProtection, async(req, res) => {
    console.log(req.body)
    const { title, content, link, subbreadditId } = req.body
    if (req.errors) {
        const subs = await Subbreaddit.findAll()
        res.render('create-post', { subs, data: req.body, errors: req.errors, csrfToken: req.csrfToken() })
    } else {
        const post = await Post.create({
            title,
            content,
            link,
            subbreadditId,
            userId: 1
        })
        res.redirect('/users')
    }
})

module.exports = router;