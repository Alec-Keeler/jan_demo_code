// Task 12a
const { Post, User, sequelize, Sequelize: { Op }} = require('../models');

// Task 12b
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

// Task 12c
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

// buildPost('This is a new post about bread', 'Bread?', null, 1, 3)

// Task 13a
async function findUserByPk(userId) {
    const user = await User.findByPk(userId);

    console.log(user.name)

    sequelize.close()
}

// findUserByPk(1)
// Task 13b
async function findAllPosts() {
    const posts = await Post.findAll()

    console.log(posts[0].title)

    sequelize.close()
}

// findAllPosts()

// Task 13c
async function findUserByEmail(email) {
    const user = await User.findOne({
        where: {
            email
        }
    })

    console.log(user)

    sequelize.close()
}

// findUserByEmail('ray@ray.ray')

// Task 13d
async function findTestPosts(searchTerm, subId) {
    const posts = await Post.findAll({
        where: {
            content: searchTerm,
            // Task 13e
            subbreadditId: subId
        }
    })

    console.log(posts)

    sequelize.close()
}

// findTestPosts('TEST POST', 1)

// Task 13f
async function findPostsByTitle(titleTerm) {
    const posts = await Post.findAll({
        where: {
            title: {
                [Op.iLike]: '%' + titleTerm + '%'
            }
        }
    })

    console.log(posts)

    sequelize.close()
}

// findPostsByTitle('bread')

// Task 13g
async function findPostsInOrder() {
    const posts = await Post.findAll({
        order: [['userId'], ['subbreadditId']],
        limit: 3
    })

    console.log(posts)

    sequelize.close()
}

// findPostsInOrder()

// Task 14a
async function updateUser(name, oldEmail, newEmail) {
    const user = await User.findOne({
        where: {
            email: oldEmail
        }
    })

    user.name = name
    user.email = newEmail

    await user.save()

    sequelize.close()
}

// updateUser('Alec Keeler', 'alec@alec.alec', 'alec@keeler.alec')

// Task 14b
async function destroyUser(userId) {
    const user = await User.findByPk(userId)

    await user.destroy()

    sequelize.close()
}

// destroyUser(6)