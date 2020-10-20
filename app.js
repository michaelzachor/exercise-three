const express = require('express');
//node uses require instead of import

const app = express();
//app is executed value of function express
const port = 4000; //4000, 3000 are fine. react uses 3000, so stick to 4000

const indexRoute = require('./routes/index.js');
const aboutRoute = require("./routes/about.js");

/* SERVE STATIC FILE */
//route at /static, use express package method called static, which looks for 'public' folder
app.use('/static', express.static("public"));

/* ROUTING IN EXPRESS */
app.use("/", indexRoute);
app.use("/about", aboutRoute);

//if you run this process, we listen for requests on this port, and if we get it, we console log
app.listen(port, () => console.log('Exercise Three is running'));