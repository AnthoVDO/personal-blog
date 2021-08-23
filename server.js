import express from "express";
import cors from "cors";
import articles from "./controller/articles.routes.js";

const app = express();
app.use(cors());
app.use(express.json());

// app.use("/", ) make a default url

app.use("/api/v1/blog", articles);

app.use("*", (req, res) => {
    res.status(404).json({
        error: "page not found"
    })
})

export default app;