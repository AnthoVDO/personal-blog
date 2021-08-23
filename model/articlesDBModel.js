import mongodb from "mongodb";
const ObjectId = mongodb.ObjectID;

let articles;

export default class ArticlesDBModel {
    static async injectDB(conn) {
        if (articles) { return }
        try {
            articles = await conn.db("personal-blog").collection("articles");
        } catch (e) {
            console.error(
                `Unable to establish a collection handle in articlesDBModel: ${e}`
            )
        }
    }

    static async getArticles() {
        try {

            let cursor = articles.find({});
            return cursor.toArray();

        } catch (error) {
            console.error(
                `Unable to get the articles from the database in ArticlesDBModel: ${error}`
            )
        }
    }

    static async postArticles() {
        try {

        } catch (error) {

        }
    }

    static async putArticles() {
        try {

        } catch (error) {

        }
    }

    static async deletArticles() {
        try {

        } catch (error) {

        }
    }


}