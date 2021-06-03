<template>
  <v-app id="app">
    <v-main class="grey lighten-3">
      <v-container>
        <router-view/>
      </v-container>
    </v-main>
    <GlobalFooter/>
  </v-app>
</template>

<script>
  import GlobalFooter from "@/components/GlobalFooter";

  export default {
    name: "App",
    components: {
      GlobalFooter,
    },
    data: () => ({ drawer: false }),
  }
</script>

<style>

</style>
