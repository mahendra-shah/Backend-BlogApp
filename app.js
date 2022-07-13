require('dotenv').config();
const express = require('express')
const app = express()
const PORT = process.env.PORT

app.use(express.json())

app.use('/', require('./router/logSign'))
app.use('/', require('./router/postBlog'))
app.use('/', require('./router/reaction'))
app.use('/', require('./router/comment'))
app.use('/', require('./router/profile'))
app.use('/', require('./router/secret'))


app.listen(PORT, () => {
    console.log('server connected to PORT', PORT);
})