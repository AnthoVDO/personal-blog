import app from "./server.js";
import dotenv from "dotenv";
import mongodb from "mongodb";
import ArticlesDBModel from "./model/articlesDBModel.js";


dotenv.config();

const port = process.env.PORT || 8080;
const URI = process.env.DB_URI;
const MongoClient = mongodb.MongoClient;

// connection to db

MongoClient.connect(
    URI, {
        maxPoolSize: 50,
        wtimeoutMS: 2500,
        useNewUrlParser: true
    }
).catch(err => {
    console.error("Fail to connect to database: " + err.stack)
    process.exit(1)
}).then(async client => {
    await ArticlesDBModel.injectDB(client);
    app.listen(port, () => {
        console.log(`listening on port ${port}`);
    })
})