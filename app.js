const express = require('express');

const port = 7070;
const app = express();

app.use('/user',require('./routes/users'));

app.listen(port, ()=>{
    console.log(`App is listening at http://localhost:${port}`)
})