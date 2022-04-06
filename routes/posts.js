const express = require('express');
const router = express.Router();
const { Subbreaddit, Post } = require('../db/models');
const csrf = require('csurf');
const csrfProtection = csrf({cookie: true});

const asyncHandler = (handler) => {
    return (req, res, next) => {
        return handler(req, res, next).catch(next);
    };
};
// const asyncHandler = (handler) => (req, res, next) => handler(req, res, next).catch(next);

// Task 38
router.get('/', asyncHandler(async(req, res) => {
    const posts = await Post.findAll();

    res.render('posts', {posts});
}))

// Task 26a
router.get('/new', csrfProtection, async(req, res) => {
    const subs = await Subbreaddit.findAll()
    console.log(subs[0].id)
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

// Task 37
const authCheck = (req, res, next) => {
    if (req.session.auth) {
        next()
    } else {
        res.redirect('/users/login')
    }
}

router.post('/', authCheck, contentCheck, csrfProtection, asyncHandler(async(req, res, next) => {
    // console.log(req.body)
    const { title, content, link, subbreadditId } = req.body
    if (req.errors) {
        const subs = await Subbreaddit.findAll()
        let subId = parseInt(subbreadditId, 10)
        res.render('create-post', { subs, data: req.body, subId, errors: req.errors, csrfToken: req.csrfToken() })
    } else {
        // try {
            const post = await Post.create({
                title,
                content,
                link,
                subbreadditId,
                userId: req.session.auth.userId
            })
            res.redirect('/users')
        // } catch (err) {
        //     next(err)
        // }
    }
}))

module.exports = router;