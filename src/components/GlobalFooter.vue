<template>
  <v-footer
    dark
    padless
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title class="teal">
        <strong class="subheading">Get connected with me on SNS!</strong>

        <v-spacer></v-spacer>

        <v-btn
          v-for="icon in icons"
          :key="icon.icon"
          :href="icon.url"
          class="mx-4"
          dark
          icon
          target="_blank"
        >
          <v-icon
          size="24px"
          >
            {{ icon.icon }}
          </v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>Kotaro Saito</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      icons: [
        { icon:'mdi-twitter', url: 'https://twitter.com/kotaropy' },
        { icon:'mdi-github', url: 'https://github.com/IAMKOTARO' },
      ],
    }),
  }
</script>

<style></style>
