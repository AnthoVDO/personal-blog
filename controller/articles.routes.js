import express from "express";
import path from "path";
import PugPages from "./articles.controller.js";
import ConnectionToTheDataBase from "../model/dbArticles.js";


const __dirname = path.resolve();
const router = express.Router();



router.route("/").get((req, res) => {
    res.render(__dirname + PugPages.homePage())
})

router.route("/blog").get((req, res, next) => {
    ConnectionToTheDataBase.getArticles();
    next();
}, (req, res, next) => {
    res.render(__dirname + PugPages.blogPage())
})

router.route("/blog/new-article")
    .get((req, res) => {
        res.render(__dirname + PugPages.newArticlePage())
    })
    .post((req, res) => {

    })

router.route("/contact").get((req, res) => {
    res.render(__dirname + PugPages.contactPage())
})

export default router;