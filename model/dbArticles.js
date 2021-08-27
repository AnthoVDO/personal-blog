let articles;

export default class ConnectionToTheDataBase {

    static async dbConnect(conn) {
        try {
            if (articles) { return } else {
                articles = conn.db(process.env.DB_BLOG).collection("articles");
            }

        } catch (e) {
            console.error("Unable to connect to the database: " + e);
        }
    }





    static async getArticles() {
        try {
            const cursor = await articles.db().admin().listDatabases();
            return await console.log(cursor);
        } catch (e) {
            console.error("Unable to get articles in dbArticle: " + e);
        }
    }
}