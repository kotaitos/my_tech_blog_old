<template>
  <v-container>
    <MyAvatar/>
    <Introduction/>

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
  </v-container>
</template>

<script>
import axios from "axios";
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
    ],
    document: {
      title: 'コタロウの開発日記',
      description: 'こんにちは！コタロウです。福岡のIT企業ででエンジニアをやっています。業務や個人開発で触れた技術を幅広く紹介します。'
    }
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
    this.articles = response.data.contents;
    document.title = this.document.title;
		document.querySelector("meta[property='description']").setAttribute('content', this.document.description)
  },

  methods: {

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