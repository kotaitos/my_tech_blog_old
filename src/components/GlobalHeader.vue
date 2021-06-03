<template>
  <v-app-bar
    app
  >
    <v-app-bar-nav-icon></v-app-bar-nav-icon>

    <v-spacer></v-spacer>

    <router-link :to="{ name: 'home' }">
      <v-btn icon>
        <v-icon>mdi-home</v-icon>
      </v-btn>
    </router-link>
  </v-app-bar>
</template>

<script>

</script>

<style>

</style>
