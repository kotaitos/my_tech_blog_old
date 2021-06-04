<template>
  <v-container>
    <MyAvatar/>
    <v-card
    flat
    >
      <v-img :src="article.image.url"></v-img>

      <v-card-title>{{ article.title }}</v-card-title>

      <v-divider class="mx-4"></v-divider>

      <v-card-text>
        <div v-html="sanitizedBody"></div>
      </v-card-text>

      <v-card-text class="text--primary">
        <v-icon>mdi-tag</v-icon>タグ
      </v-card-text>

      <v-card-text class="text--primary">
        <v-row
          class="tags"
          dense
        >
          <v-col
            v-for="tag in article.tags" :key="tag"
            class="mx-1 tag pe-5"
          >
            <Tag v-bind:tag="tag" />
          </v-col>
        </v-row>
      </v-card-text>
      
      <v-card-text>
        <router-link :to="{ name: 'home' }">
          <v-btn>
            <v-icon
            class="ma-2"
            outlined
            fab
            color="teal"
            >
              mdi-arrow-left-circle-outline
            </v-icon>
            back
          </v-btn>
        </router-link>
      </v-card-text>
    </v-card>
    <HomeButton/>
  </v-container>
</template>

<script>
import axios from "axios";
import sanitizeHtml from "sanitize-html";
import MyAvatar from '@/components/MyAvatar'
import HomeButton from '@/components/HomeButton'
import Tag from '@/components/Tag'

export default {
  name: "ArticleDetail",

  components: {
    MyAvatar,
    HomeButton,
    Tag,
  },

  data: () => ({
    article: {}
  }),

  computed: {
    sanitizedBody() {
      return sanitizeHtml(this.article.body, {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"])
      });
    }
  },

  mounted: async function () {
    const response = await axios.get(
      `${process.env.VUE_APP_API_BASE_URL}articles/${this.$route.params.id}`,
      {
        headers: {
          "X-API-KEY": process.env.VUE_APP_X_API_KEY
          }
      }
    );
    this.article = response.data;
    document.title = `${this.article.title} | コタロウの開発日記`;
    this.setDescription(`${this.article.summary} | コタロウの開発日記`);
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
  }
};
</script>

<style>
.v-card__title {
  font-size: 30px;
}

p li {
  color: rgb(32, 32, 32)!important;
}

h1 {
  padding: 1rem 2rem;
  border-left: 4px solid #000;
  color: black;
  font-size: 25px!important;
  margin-top: 50px!important;
}

pre {
	padding:1em;
	background-color:#44474b;
	color :#FFF;
}

code {
	font-family: Menlo, Consolas, 'DejaVu Sans Mono', monospace!important;
  font-size: 14px!important;
  color: white!important;
  background-color: #44474b!important;
}

.tags {
  margin-left: 10px!important;
  padding-right: 760px!important;
}
</style>

