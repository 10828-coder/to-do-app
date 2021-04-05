const express = require('express');
const app = express()
const PORT = 8000

app.set('view engine', 'pug')

app.get('/', (req, res) => {
    res.send('home') 
})

app.listen(PORT, err =>{
    if(err) console.log (err)
    console.log(`Server is running on port ${PORT}`)
})
