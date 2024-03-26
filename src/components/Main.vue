<script>
import Character from './partial/Character.vue'
import { store } from '../data/store' 
  export default {
    data(){
      return{
        store
      }
    },
    components:{
      Character
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

</style>