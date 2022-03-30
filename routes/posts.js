const express = require('express');
const router = express.Router();
const { Subbreaddit } = require('../models');

// Task 26a
router.get('/new', async(req, res) => {
    const subs = await Subbreaddit.findAll()
    res.render('create-post', {subs})
})

router.post('/', async(req, res) => {
    console.log('you have arrived at the post route handler')
})

module.exports = router;