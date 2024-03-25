<script>
import axios from 'axios';
import { store } from './data/store';
import Main from './components/Main.vue';
  export default {
    components:{
      Main,
    },
    data(){
      return{
        store
      }
    },
    methods:{
      getApi(){
        console.log(this.store);
        axios.get(this.store.apiUrl, {
          params:{
            nums: 20,
            offset: 0,
          }
        })
        .then(result => {
          this.store.characterList = result.data.results;
          console.log(this.store.characterList);
        })
        .catch(error => {
          console.log(error);
        })
      }
    },
    mounted(){
      this.getApi()
    }
  }
</script>


<template>
  <Main />
</template>



<style lang="scss" scoped>
@use './assets/scss/main.scss';

</style>
