import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// app.use("/", ) make a default url

app.use("*", (req, res)=>{
    res.status(404).json({
        error: "page not found"
    })
})

export default app ;
