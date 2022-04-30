require('./config/db')
const express = require('express');
const loginRouter = require( './router/loginRouter')

const app = express()

app.use( express.json())

app.get('/', (req, res) => {
    res.send('We are live');
})
app.use( '/api', loginRouter)

app.listen(port, () => {
    console.log(`Server lively on port ${port}`);
});