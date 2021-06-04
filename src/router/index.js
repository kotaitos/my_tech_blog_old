import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import ArticleDetail from '@/views/article/ArticleDetail'
import TaggedArticles from '@/views/article/TaggedArticles'


Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: { title: 'ホーム', description: 'こんにちは！コタロウです。福岡のIT企業ででエンジニアをやっています。業務や個人開発で触れた技術を幅広く紹介します。' }
    },
    {
      path: "/article/:id/",
      name: "article-detail",
      component: ArticleDetail,
      meta: { title: this.article.title, description: this.article.summary }
    },
    {
      path: "/tagged/:tag/",
      name: "tagged-articles",
      component: TaggedArticles,
      meta: { title: `タグ「${this.$route.params.tag}」がついた記事一覧`, description: `コタロウの技術ブログでタグ「${this.$route.params.tag}」がついた記事の一覧です。` }
    },
  ]
})

export default router
