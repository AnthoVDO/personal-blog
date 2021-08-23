import ArticlesDBModel from "../model/articlesDBModel.js";

export default class ArticlesController {

    /* work article*/

    static async apiGetArticles(req, res, next) {
        const articles = await ArticlesDBModel.getArticles();
        res.json(articles);
    }

    static async apiPostArticles(req, res, next) {

    }

    /* work on form */

    static async apiGetArticleForm(req, res, next) {
        res.render("./view/blog/postArticle");
    }
}