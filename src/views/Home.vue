<template>
  <div>
    <main-navbar />
    <carousel v-if="this.$route.name=='Product'"  />
    <cards v-if="this.$route.name=='Home'"  />
    
  </div>
</template>

<script>
import MainNavbar from "../components/MainNavbar.vue";
import cards from "../components/cards";
import carousel from "../components/carousel";
export default {
  data(){ 
  
  return {
    
  }
  },
  components: {
    MainNavbar,
    cards,
    carousel
    
  }
  
};
</script>
