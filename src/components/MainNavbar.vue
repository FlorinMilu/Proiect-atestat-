<template>
<nav class="navbar navbar-light bg-light">
  <a  class="navbar-brand" type="button" @click='HomeButtonClicked()'>
    <img src="../assets/logomagazin.png" width="30" height="30" class="d-inline-block align-top" alt="">
    Online Shop
  </a>
  
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" type="button" @click="HomeButtonClicked()">Home<span class="sr-only">(current)</span></a>
      </li>
    </ul>
  
</nav>

</template>
<script>
export default {
  data(){
    return{
      
    }
  },
  methods:{
    HomeButtonClicked(){
      if (this.$route.name=='Product'){
       this.$router.push('/');}
    }
  }
};
</script>