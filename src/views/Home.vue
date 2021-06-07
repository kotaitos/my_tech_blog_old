<template>
  <v-container>
    <MyAvatar/>
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
      'GAS'
    ],
    introduction: 'IT・プログラミングに関するアウトプットを記事にして投稿しています！',
    document: {
      title: 'ホーム | コタロウの開発日記',
      description: 'こんにちは！コタロウです。'
    },
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
    this.setDescription(this.document.description+this.introduction);
  },

  methods: {
    setDescription: function (description) {
      let metaDiscre = document.head.children;
      let metaLength = metaDiscre.length;
      for(var i = 0; i < metaLength; i++){
        let proper = metaDiscre[i].getAttribute('name');
        if(proper === 'description'){
          let dis = metaDiscre[i];
          dis.setAttribute('content', description);
        }
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