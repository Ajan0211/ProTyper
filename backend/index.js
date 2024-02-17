const express = require('express');
const mongoose = require('mongoose')
const cors = require("cors")
const ClientModel = require('./models/client')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/client");


app.post('/Login', (req, res) => {
    const {email, password} = req.body;
    ClientModel.findOne({email: email})
    .then(user => {
        if(user) {
            if(user.password === password) {
                res.json("Success")
            } else {
                res.json("the password is oncorrect")
            }
        } else {
            res.json("No record existed")
        }
    })

})
app.post('/SignUp', (req, res) => {
    ClientModel.create(req.body)
    .then(clients => res.json(clients))
    .catch(err => res.json(err))

})


app.listen(3001, () => {
    console.log("server is running")
})