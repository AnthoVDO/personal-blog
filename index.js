import app from "./server.js";
import dotenv from "dotenv";
import mongodb from "mongodb";
import assert from "assert";


dotenv.config();

const port = process.env.PORT || 8080;
const URI = process.env.DB_URI;
const MongoClient = mongodb.MongoClient;

// connection to db

MongoClient.connect(URI).catch(err => {
    console.error("Fail to connect to database: "+err.stack)
    process.exit(1)
}).then(async client => {
    app.listen(port, ()=> {
        const db = client.db("personnal-blog");
        console.log(`listening on port ${port}`);
    })
})




