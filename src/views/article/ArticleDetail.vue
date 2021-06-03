<template>
  <v-container>
    <MyAvatar/>
    <v-card
    flat
    >
      <v-img height="400" :src="article.image.url"></v-img>

      <v-card-title>{{ article.title }}</v-card-title>

      <v-divider class="mx-4"></v-divider>

      <v-card-text>
        <div v-html="sanitizedBody"></div>
      </v-card-text>

      <v-card-text class="text--primary">
        <v-card-text>
          <v-icon>mdi-tag</v-icon>タグ
        </v-card-text>
        <v-row
          class=""
          dense
        >
          <v-col
            v-for="tag in article.tags" :key="tag"
            class="mx-1"
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
      console.log(this.article.body);
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
    console.log(response)
    this.article = response.data;
  }
};
</script>

<style>
.v-card__title {
  font-size: 30px;
}

p {
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
</style>

