const express = require('express');


const app = express();

app.get('/get', (req, res) => {
    res.send("Hello, world....///!")
    //res.end()
});

app.get('/get-all-users', (req, res) => {
    res.send("List of all Users")
});

app.get('/get-user-details', (req, res) => {
    const userDetails = {
        userId: 101,
        userName: "Vasu Devu",
        userEmail:"vasu@gmail.com",
        userCity: "Bangalore"
    }
    res.send(userDetails)
})

app.listen(8000, () => {
    console.log("Server Started Connected Successfull!")
})