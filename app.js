// Task 17a
const express = require('express');
const app = express();

const { User } = require('./models');
const usersRouter = require('./routes/users.js');



// Task 21b
app.use('/users', usersRouter)
app.use('/bananas', usersRouter)

// Task 18
app.get('/', (req, res) => {
    // res.send('Welcome to Breaddit!')
    const title = 'Breaddit'
    // Task 19c
    res.render('layout', {title})
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

// Task 17b
const port = 8081;
app.listen(port, () => console.log(`Listening on port ${port}...`));