<template>
    <div class="text-center">
        <div class="introduction">
                <v-card-text>{{ introduction }}<br>SNSのフォローもよろしくお願いいたします！</v-card-text>
            </div>
            <div class="sns_icons">
                <v-btn
                    v-for="icon in icons"
                    :key="icon.icon"
                    :href="icon.url"
                    class="mx-4"
                    icon
                    target="_blank"
                >
                    <v-icon
                        size="24px"
                    >
                        {{ icon.icon }}
                    </v-icon>
                </v-btn>
            </div>
    </div>
</template>

<script>
export default {
  name: "Introduction",

  props: ['introduction'],

  data: () => ({
    icons: [
      { icon:'mdi-twitter', url: 'https://twitter.com/kotaropy' },
      { icon:'mdi-github', url: 'https://github.com/IAMKOTARO' },
    ],
  })
}
</script>
