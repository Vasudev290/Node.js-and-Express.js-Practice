const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const employeeRoutes = require('./routes/EmployeeRouter')


const app = express()
dotenv.config()
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send("Helllo, World")
});

app.use('/employee', employeeRoutes)

const PORT = 6969;
const Hostname = "http://localhost:6969/"
mongoose.connect(process.env.MONGO_DB_URL)
.then(() => {
    console.log("MongoDB Database Connected Successfull..!")
})
.catch((err) => {
    console.log(err)
})


app.listen(6969, () => {
    console.log(`Server Stared on ${PORT} and running on ${Hostname}`)
})