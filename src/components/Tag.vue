<template>
    <router-link :to="{ name: 'tagged-articles', params: { tag: tag } }">
        <v-btn
            height="25"
            width="auto"
            class="tag"
        >
            <small><v-icon size=10>mdi-tag</v-icon> {{ tag }}</small>
        </v-btn>
    </router-link>
</template>

<script>
export default {
  name: "Tag",
  props: ['tag'],
}
</script>

<style scoped>

</style>
