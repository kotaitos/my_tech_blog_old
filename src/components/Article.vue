<template>
  <v-card 
    class="mx-auto article"
    max-width="300"
    max-height="600"
  >
    <router-link
      :to="{ name: 'article-detail', params: { id: article.id } }"
    >
      <v-img
        class="white--text align-end"
        height="200px"
        :src="article.image.url"
      >
      </v-img>
    </router-link>
    

    <v-card-text class="text--primary blue-grey lighten-5">
      <v-card-title class="article_title font-weight-black">
        {{ article.title }}
      </v-card-title>

      <v-divider class="mx-4"></v-divider>

      <div class="summary">{{ article.summary }}</div>

      <v-divider class="mx-4"></v-divider>

      <v-row
        class="flex-row flex-nowrap overflow-auto"
        dense
      >
        <v-col
        v-for="tag in article.tags" :key="tag"
        >
          <Tag v-bind:tag="tag" />
        </v-col>
      </v-row>
    </v-card-text>

    <v-card-actions
    class="blue-grey lighten-5"
    >
      <v-spacer></v-spacer>
      <router-link :to="{ name: 'article-detail', params: { id: article.id } }">
          <v-btn color="orange" text>More</v-btn>
      </router-link>
    </v-card-actions>
  </v-card>
</template>

<script>
import Tag from '@/components/Tag'

export default {
  name: "Article",
  props: ['article'],
  components: {
    Tag,
  }
}
</script>

<style scoped>
.article_title {
  font-size: 18px!important;
}

.article {
  margin: 10px!important;
}
</style>
