const express = require('express');


const app = express();

app.get('/get', (req, res) => {
    res.send("Hello, world....///!")
    //res.end()
});


app.listen(8000, () => {
    console.log("Server Started Connected Successfull!")
})