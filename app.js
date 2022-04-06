// Task 17a
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const session = require('express-session');

const { User } = require('./db/models');
const usersRouter = require('./routes/users.js');
const postsRouter = require('./routes/posts.js');

// Task 27a
app.use((req, res, next) => {
    req.banana = true
    next()
})

// Task 28a
app.use(express.urlencoded({extended: false}))
app.use(cookieParser('aSecretKey'))

// Task 36a
app.use(session({
    secret: 'aSecretKey',
    resave: false,
    saveUninitialized: false
}))

// app.use((req, res, next) => {
//     console.log(req.session)
//     // req.session.potato = 'We like taters'
//     next()
// })

// Task 21b
app.use('/users', usersRouter);
app.use('/bananas', usersRouter);
app.use('/posts', postsRouter);


// Task 18
app.get('/', (req, res) => {
    // res.send('Welcome to Breaddit!')
    const title = 'Breaddit'
    // Task 19c
    res.render('index', {title})
})

app.all(/[abc]*45t?/, (req, res) => {
    res.send('This page could not be found D:')
})

// good
// /users
// /about
// /foo

// bad
// /users/:id
// /users/something/posts

// // Task 20
// app.get('/users', async(req, res) => {
//     // res.send('users router')
//     // Task 20a
//     const users = await User.findAll();
//     res.render('users', {users, title: 'Breaddit Users'})
// })

// // Task 20c
// app.get('/users/:userId', async(req, res) => {
//     console.log(req.params)
//     const user = await User.findByPk(req.params.userId)
//     // console.log(user)
//     res.render('profile', {user, title: `${user.name}, welcome home`})
// })

// Task 19a
app.set('view engine', 'pug');
app.use(express.static('./public'))

//ERROR HANDLING
// Task 31a
app.use((req, res, next) => {
    console.log('hello from 404 handler')
    const err = new Error('This page doesn\'t exist')
    err.status = 404
    // res.send('This page could not be found :(')
    next(err)
})

app.use((err, req, res, next) => {
    console.log(err.message, err.status)
    console.log('hello from first error handler')
})

app.use((req, res, next) => {
    console.log('this is the extra middleware')
})

// Task 17b
// const port = 8081;
// app.listen(port, () => console.log(`Listening on port ${port}...`));

module.exports = app;