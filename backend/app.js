const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { dbConnect } = require("./src/config/DbConfig");
const app = express();
const RouterModules = require('./src/routes')

//Midleware
app.use(express.json());
app.use(cors());
app.use("/api", RouterModules)

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log('Tu app  esta lista  por  http://localhost:' + port);
})

dbConnect();