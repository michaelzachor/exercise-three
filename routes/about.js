const express = require("express");
const router = express.Router();
// the route is relative to the route you're using it for
// '/' here is '/about/'
router.get("/", (req, res) => res.send("About this page: Ex. Three"));
router.get("/me", (req, res) => res.send("About me: Ex. Three"));
router.get('/json', (req, res) => 
    res.send([{ itemOne: "cool", itemTwo: "cooler" }])
);
module.exports = router;