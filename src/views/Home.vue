<template>
  <v-container>
    <div class="text-center">
      <v-card-text
        class="center font-weight-black"
      >
        <h1>{{ document.title }}</h1>
      </v-card-text>
    </div>

    <v-divider class="mx-4"></v-divider>

    <Introduction v-bind:introduction="introduction" />

    <v-divider class="mx-4"></v-divider>

    <v-row>
      <v-col><v-icon>mdi-tag</v-icon>人気のタグ</v-col>
    </v-row>

    <v-row
      class="flex-row flex-nowrap overflow-auto"
      dense
    >
      <v-col
        v-for="tag in tags"
        :key="tag"
      >
        <Tag v-bind:tag="tag" />
      </v-col>
    </v-row>
    <v-divider class="mx-4"></v-divider>

    <v-row no-gutters>
      <v-col
        v-for="article in articles" :key="article.id"
        cols=12 sm=10 md=8 lg=4 xl=4
      >
        <Article v-bind:article="article" />
      </v-col>
    </v-row>
    <MyAvatar/>
  </v-container>
</template>

<script>
import MyAvatar from '@/components/MyAvatar'
import Article from '@/components/Article'
import Introduction from '@/components/Introduction'
import Tag from '@/components/Tag'

export default {
  name: "Home",

  components: {
    MyAvatar,
    Article,
    Introduction,
    Tag,
  },

  data: () => ({
    articles: [],
    icon_image_url: 'https://images.microcms-assets.io/assets/869c668f8ba9442a8a5f97b75fb04858/1a821da37354495c9b16fdf6fb264caf/aikon_512.jpg',
    icons: [
      { icon:'mdi-twitter', url: 'https://twitter.com/kotaropy' },
      { icon:'mdi-github', url: 'https://github.com/IAMKOTARO' },
    ],
    tags: [
      'Python',
      'Web開発',
      'Git',
      '機械学習',
      'データ分析',
      'スクレイピング',
      'アルゴリズム',
      '画像処理・画像認識',
      '自然言語処理',
      '音声処理・音声認識',
      'GAS'
    ],
    introduction: 'IT・プログラミングに関する記事を投稿しています！',
    document: {
      title: 'にしきへびブログ',
      description: 'IT・プログラミングに関する記事を投稿しています！'
    },
  }),
  
  async mounted() {
    const response = await this.$request.api.getArticles();
    this.articles = response.data.contents;
    document.title = this.document.title;
    this.setMetaData(this.document.description, this.introduction);
  },

  methods: {
    setMetaData: function (description, introduction) {
      let metaDiscre = document.head.children;
      let metaLength = metaDiscre.length;
      for(var i = 0; i < metaLength; i++){
        let proper = metaDiscre[i].getAttribute('name');
        if(proper === 'description'){
          let dis = metaDiscre[i];
          dis.setAttribute('content', description+introduction);
        }
      }
      // OGP
      document.querySelector("meta[property='og:title']").setAttribute('content', document.title);
      document.querySelector("meta[property='og:description']").setAttribute('content', introduction);
      document.querySelector("meta[property='og:image']").setAttribute('content', 'https://images.microcms-assets.io/assets/869c668f8ba9442a8a5f97b75fb04858/1a821da37354495c9b16fdf6fb264caf/aikon_512.jpg');
      document.querySelector("meta[property='og:url']").setAttribute('content', 'https://kotaro.blog');

      // // twiiter meta 
      document.querySelector("meta[name='twitter:site']").setAttribute('content', 'https:/kotaro.blog');
      document.querySelector("meta[name='twitter:card']").setAttribute('content', 'summary_large_image');
      document.querySelector("meta[name='twitter:title']").setAttribute('content', document.title);
      document.querySelector("meta[name='twitter:image']").setAttribute('content', 'https://images.microcms-assets.io/assets/869c668f8ba9442a8a5f97b75fb04858/1a821da37354495c9b16fdf6fb264caf/aikon_512.jpg');
      document.querySelector("meta[name='twitter:description']").setAttribute('content', introduction);
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

h1 {
  padding: 1rem 2rem;
  border-left: 4px solid #000;
  border-right: 4px solid #000;
  color: black;
  font-size: 25px!important;
  margin-top: 50px!important;
}
</style>
