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
      component: Home
    },
    {
      path: "/article/:id/",
      name: "article-detail",
      component: ArticleDetail
    },
    {
      path: "/tagged/:tag/",
      name: "tagged-articles",
      component: TaggedArticles
    },
  ]
})

export default router
