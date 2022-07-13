const jwt = require('jsonwebtoken')
const knex = require('../config/db.connections')


const createToken = ({ id }) => {
    return jwt.sign(id, "mzYT&^t398Z&87ra3nzIUNvi7i4ay")
}

const verifyToken = async (req, res, next) => {
    if (req.headers.cookie) {
        const token = req.headers.cookie.split("=")[1]
        const id = jwt.verify(token, "mzYT&^t398Z&87ra3nzIUNvi7i4ay")
        const user = await knex("users").where({ id })
        req.userData = user
        next()
    } else {
        res.send("token expired")
    }
}

module.exports = { createToken, verifyToken }