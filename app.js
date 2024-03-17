require('dotenv').config();

const express = require('express');
const path = require('path')
const app = express()
const PORT = process.env.PORT || 3000;
const http = require('node:http')
const fs = require('fs')
const router = require('./app/routeur')


app.set('views', './views')
app.set('view engine', 'ejs')


app.use(express.static('public'))

//app.use(express.static('views'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(router);





 

//var sylvanas = fs.readFileSync('public/images/sylvanas.jpg');








app.get('/Acceuil', (req, res) => {

    res.render(`acceuil`)
    res.end()

})


app.listen(PORT, ()=> {
    console.log(`serveur ok sur http://localhost:3000`)
})
