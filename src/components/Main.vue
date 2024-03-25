<script>
import character from './partial/Character.vue'
import { store } from '../data/store' 
  export default {
    components:{
      character
    },
    data(){
      return{
        store
      }
    }
  }
</script>

<template>
  <main>
    <div class="container text-center py-5">
      <div class="row row-cols-4">
        <Character
          v-for="character in this.store.characterList"
          :key="character.id"
          :image="character.image"
          :name="character.name"
          :status="character.status"
          :species="character.species"
          />
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
  main{
    background-color: #ddd6f8;
    background-image: linear-gradient(to bottom, #ddd6f8, #a599d6);
    height: 100vh;
  }
</style>