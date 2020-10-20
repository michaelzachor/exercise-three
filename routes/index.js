//could have done this stuff in app.js
//but we're gonna have multiple routes, so this is better

const express = require("express");
//equivalent of import Express from 'express'

const router = express.Router();

//we delete this from app.js and move it here
//create a location ('/')
//if someone creates a git request to our root, send them "Hello World"
router.get('/', (req, res) => {
    res.send('Home Page: Exercise Three');
});
//react compiles the code for us,
//node brings us all the way back and we send a string
//could also send JSON (array)

module.exports = router;
//equivalent of export default Component