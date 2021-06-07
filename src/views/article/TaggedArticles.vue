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
    tag: '',
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
    document.title = `タグ「${this.$route.params.tag}」がついた記事一覧  | コタロウの開発日記`;
    this.setMetaData(this.$route.params.tag)
    this.tag = this.$route.params.tag;
  },

  methods: {
    reload: function (tag) {
      this.$router.push({ name: 'tagged-articles', params: { tag: tag } })
      this.$router.go({ path: this.$router.currentRoute.path })
    },
    setMetaData: function (tag) {
      let metaDiscre = document.head.children;
      let metaLength = metaDiscre.length;
      for(var i = 0; i < metaLength; i++){
        let proper = metaDiscre[i].getAttribute('name');
        if(proper === 'description'){
          let dis = metaDiscre[i];
          dis.setAttribute('content', `${document.title}でタグ「${tag}」がついた記事の一覧です。`);
        }
      }
      // OGP
      document.querySelector("meta[property='og:title']").setAttribute('content', `${tag}に関する記事 | ${document.title}`);
      document.querySelector("meta[property='og:description']").setAttribute('content', `${tag}に関する記事の一覧です`);
      document.querySelector("meta[property='og:image']").setAttribute('content', 'https://images.microcms-assets.io/assets/869c668f8ba9442a8a5f97b75fb04858/1a821da37354495c9b16fdf6fb264caf/aikon_512.jpg');
      document.querySelector("meta[property='og:url']").setAttribute('content', `https://kotaro.blog/tagged/${tag}`);

      // // twiiter meta 
      document.querySelector("meta[name='twitter:site']").setAttribute('content', `https://kotaro.blog/tagged/${tag}`);
      document.querySelector("meta[name='twitter:card']").setAttribute('content', 'summary_large_image');
      document.querySelector("meta[name='twitter:title']").setAttribute('content', document.title);
      document.querySelector("meta[name='twitter:image']").setAttribute('content', 'https://images.microcms-assets.io/assets/869c668f8ba9442a8a5f97b75fb04858/1a821da37354495c9b16fdf6fb264caf/aikon_512.jpg');
      document.querySelector("meta[name='twitter:description']").setAttribute('content', `${tag}に関する記事の一覧です`);
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
