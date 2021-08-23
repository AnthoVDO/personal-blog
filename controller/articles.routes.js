import express from "express";
import ArticlesController from "./articles.controller.js";

const router = express.Router();

router.route("/articles")
    .get(ArticlesController.apiGetArticles)

router.route("/articles/new")
    .get(ArticlesController.apiGetArticleForm)

export default router;