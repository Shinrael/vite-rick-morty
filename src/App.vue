<script>
import axios from 'axios';
import { store } from './data/store';
import Header from './components/Header.vue';
import Main from './components/Main.vue';
  export default {
    components:{
      Header,
      Main,
    },
    data(){
      return{
        store
      }
    },
    methods:{
      getApi(){
        axios.get(this.store.apiUrl, {
          params:store.queryParams
        })
        .then(result => {
          this.store.characterList = result.data.results;
          console.log(this.store.characterList);
        })
        .catch(error => {
          console.log(error);
        })
      },
      getName(){
        axios.get(this.store.nameUrl)
        .then(res => {
          this.store.characterName = res.data.results.map(character => character.name);
          console.log(this.store.characterName);          
        })
        .catch(error => {
          console.log(error);
        })
      }
    },
    mounted(){
      this.getApi(),
      this.getName()
    }
  }
</script>


<template>
  <body>
    <Header @startSearch="getApi"/>
    <Main />
  </body>
</template>



<style lang="scss">
@use './assets/scss/main.scss';

body{
    background-color: #ddd6f8;
    background-image: linear-gradient(to bottom, #ddd6f8, #a599d6);
    height: 100%;
  }
</style>
