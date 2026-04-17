const express = require('express');
const cors = require('cors');
const db = require("./config/db"); // db connection
const schoolRoutes = require("./routes/school.route.js");

const app = express();
app.use(express.json());
app.use(cors());

// routes
app.use("/api/school", schoolRoutes);


app.listen(3000, () => console.log("Server Started"));