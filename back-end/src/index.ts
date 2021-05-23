import "reflect-metadata";
import {createConnection} from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
const indexRouter = require("./routes/index");
const userRouter = require("./routes/user");
const productRouter = require("./routes/products");


createConnection().then(async connection => {

    // create express app
    const app = express();
    app.use(bodyParser.json());
    var cors = require('cors');
    app.use(cors())

    // register express routes from defined application routes
    app.use('/', indexRouter);
    app.use('/users', userRouter);
    app.use('/products', productRouter);


    // start express server
    app.listen(4000);

    console.log("Express server has started on port 4000. Open http://localhost:4000/ to see results");

}).catch(error => console.log(error));
