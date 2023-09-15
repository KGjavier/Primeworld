const express = require("express");
const cors = require("cors");
const env = require('dotenv').config();
const cookieParser = require('cookie-parser');

const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(cookieParser());

require("./config/mongoose.config");
require("./routes/prime.routes")(app);

app.listen(port, () => console.log(`The server is all fired up on port: ${port}`));
