<template>
  <v-text-field
    v-model="q"
    label="検索"
    type="text"
  >
  <template v-slot:append-outer>
    <router-link
      :to="{ name: 'search-articles', params: { q: q } }"
    >
      <v-btn
        color="primary"
      >
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </router-link>
  </template>
  </v-text-field>
</template>
