/* eslint-disable */
// エンドポイント
export default function (cli) {
    return {
        getArticles () {
            return cli.get('articles/')
        },
        getArticleDetail (articleId) {
            return cli.get(`articles/${articleId}`)
        },
        getTaggedArticles (tag) {
            return cli.get(`tagged/${tag}/`)
        }
    }
}
