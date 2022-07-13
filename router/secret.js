const knex = require('../config/db.connections')
const { createToken, verifyToken } = require('../modules/jwt.auth')
const router = require('express').Router()

// to get all the data in all the tables without register or login
router.get('/secret-api', async(req, res)=>{
    try {
        const allUsers = await knex('users')
        const allBlogs = await knex('blogs')
        const allReacts = await knex('reactions')
        const allComments = await knex('comments')
        const combo = [
            {'All Registered Users':allUsers},
            {'All Blogs ':allBlogs},
            {'All Reactions ':allReacts},
            {'All Comments ':allComments}

        ]
        res.send(combo)
    } catch (error) {
        res.send(error.message)
    }
})
// .join('users', 'users.id', 'blogs.user_id').join('reactions', 'blogs.id', 'reactions.blog_id')


module.exports = router