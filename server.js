import express from "express";
import fileRoutes from "./controller/articles.routes.js";
import path from "path";
import ConnectionToTheDataBase from "./model/dbArticles.js";
import dotenv from "dotenv";
import mongodb from "mongodb";

const MongoClient = mongodb.MongoClient;


dotenv.config();

const app = express();
app.use(express.json());
const port = process.env.PORT || 5000;
const __dirname = path.resolve();

app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));

app.use("/", fileRoutes);



MongoClient
    .connect(process.env.DB_URI)
    .then(async(client) => {
        await ConnectionToTheDataBase.dbConnect(client);
        app.listen(port, async() => {
            console.log("The server has started on port: " + port);
        })
    })