import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoutes from './route/web';
require('dotenv').config();

let app = express();

// Config app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

viewEngine(app);
initWebRoutes(app);

// Port === undefined => port = 6868
let port = process.env.PORT || 6868;

app.listen(port, () => {
    console.log("Backend nodejs is running on the port: " + port);
})