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

    data: () => ({
      drawer: false
    }),

    mounted : function(){
      let routeInstance = this.$route;
      this.createTitleDesc(routeInstance);
    },

    watch: {
      '$route' (routeInstance) {
      this.createTitleDesc(routeInstance);
      }
    },

    methods: {
      createTitleDesc : function(routeInstance) {
        if(routeInstance.meta.title){
          let setTitle = routeInstance.meta.title + ' | コタロウの開発日記';
          document.title = setTitle;
        } else {
          document.title = 'title is not set'
        }
        
        if(routeInstance.meta.description){
          let setDesc = routeInstance.meta.description + ' | コタロウの開発日記';
          document.querySelector("meta[name='description']").setAttribute('content', setDesc)
        } else {
          document.querySelector("meta[name='description']").setAttribute('content', 'description is not set')
        }
      } 
    },
  }
</script>

<style>

</style>
