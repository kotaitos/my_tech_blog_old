<template>
    <div class="text-center">
        <div class="avatar">
            <v-avatar
            color="primary"
            size="86"
            >
            <v-img :src="icon_image_url"></v-img>
            </v-avatar>
        </div>

        <v-card-text
        class="center font-weight-black"
        >
        コタロウの開発日記
        </v-card-text>

        <v-divider class="mx-4"></v-divider>
    </div>
</template>

<script>
export default {
  name: "MyAvatar",

  data: () => ({
    icon_image_url: 'https://images.microcms-assets.io/assets/869c668f8ba9442a8a5f97b75fb04858/1a821da37354495c9b16fdf6fb264caf/aikon_512.jpg',
    icons: [
      { icon:'mdi-twitter', url: 'https://twitter.com/kotaropy' },
      { icon:'mdi-github', url: 'https://github.com/IAMKOTARO' },
    ],
  })
}
</script>
