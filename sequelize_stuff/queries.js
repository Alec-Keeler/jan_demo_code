// Task 12a
const {Post, User, sequelize} = require('../models');

async function createUser(name, password, email) {
    const user = await User.create({
        // name: name
        name,
        password,
        email
    })
    console.log(user)

    sequelize.close()
}

// createUser('Alec', 'hashbrowns', 'alec@alec.alec')

async function buildPost(content, title, link, userId, subbreadditId) {
    const post = Post.build({
        content,
        title,
        link,
        userId,
        subbreadditId
    })

    await post.save()
    console.log(post)
    sequelize.close()
}

buildPost('This is a new post about bread', 'Bread?', null, 1, 3)