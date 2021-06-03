<template>
  <div class="homebutton">
      <router-link :to="{ name: 'home' }">
        <v-btn
        color="blue"
        dark
        center
        fab
        retain-focus-on-click
        fixed top right
        >
            <v-icon>mdi-home</v-icon>
        </v-btn>
    </router-link>
  </div>
</template>
