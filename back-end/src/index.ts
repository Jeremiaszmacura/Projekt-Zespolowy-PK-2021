import "reflect-metadata";
import {createConnection} from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";

const indexRouter = require("./routes/index");
const userRouter = require("./routes/user");
const productRouter = require("./routes/products");
const orderRouter = require("./routes/orders");
const supplyRouter = require("./routes/supplies");
var cors = require('cors')
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();

createConnection().then(async connection => {

    // create express app
    const app = express();
    app.use(bodyParser.json());
    var cors = require('cors');
    app.use(cors())

    // for parsing multipart/form-data
    app.use(upload.array('file'));

    // register express routes from defined application routes
    app.use('/', indexRouter);
    app.use('/users', userRouter);
    app.use('/products', productRouter);
    app.use('/orders', orderRouter);
    app.use('/supplies', supplyRouter);


    // start express server
    app.listen(4000);

    console.log("Express server has started on port 4000. Open http://localhost:4000/ to see results");

}).catch(error => console.log(error));
