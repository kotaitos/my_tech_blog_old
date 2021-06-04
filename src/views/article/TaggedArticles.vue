<template>
  <v-container>
    <v-card-text>
        <div>Tagged in</div>
        <br>
        <router-link :to="{ name: 'tagged-articles', params: { tag: tag } }">
          <v-btn
              height="50"
              width="auto"
          >
              <v-icon size=25>mdi-tag</v-icon> {{ this.$route.params.tag }}
          </v-btn>
      </router-link>
    </v-card-text>
    <v-divider class="mx-4"></v-divider>
    <v-row>
      <v-col
        v-for="article in articles" :key="article.id"
        cols=12 sm=10 md=8 lg=4 xl=4
      >
        <Article v-bind:article="article" />
      </v-col>
    </v-row>
    <HomeButton/>
  </v-container>
</template>

<script>
import axios from "axios";
import HomeButton from '@/components/HomeButton';
import Article from '@/components/Article'

export default {
  name: "TaggedArticles",

  components: {
    HomeButton,
    Article,
  },

  data: () => ({
    articles: [],
  }),
  
  async mounted() {
    const response = await axios.get(
      `${process.env.VUE_APP_API_BASE_URL}articles/`,
      {
        headers: {
          "X-API-KEY": process.env.VUE_APP_X_API_KEY,
        },
      }
    );
    let articles = response.data.contents
    for(let i = 0; i < articles.length; i++) {
        if(articles[i].tags.includes(this.$route.params.tag)) {
            this.articles.push(articles[i])
        }
    }
  },

  methods: {
    reload: function (tag) {
      this.$router.push({ name: 'tagged-articles', params: { tag: tag } })
      this.$router.go({ path: this.$router.currentRoute.path })
    },
    createTitleDesc : function (routeInstance) {
      if(routeInstance.meta.title){
        let setTitle = `タグ「${this.$route.params.tag}」がついた記事一覧  | コタロウの開発日記`;
        document.title = setTitle;
      } else {
        document.title = 'title is not set'
      }
      if(routeInstance.meta.desc){
        var setDesc = `コタロウの技術ブログでタグ「${this.$route.params.tag}」がついた記事の一覧です。`;
        document.querySelector("meta[name='description']").setAttribute('content', setDesc)
      } else {
        document.querySelector("meta[name='description']").setAttribute('content', 'description is not set')
      }
    }
  },

  computed: {
    
  }
};
</script>

<style scoped>
.summary {
    white-space: pre-wrap;
}
</style>
