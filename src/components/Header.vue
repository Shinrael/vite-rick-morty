<script>
import { store } from '../data/store' 
  export default {
    data(){
      return{
        store,
        name: '',
      }
    },
    methods:{
      startSearch(){
        this.store.queryParams= {
          nums: 20,
          offset: 0,
          name: this.name,
        }
        this.$emit('startSearch')
      }
    }
  }
</script>

<template>
  <div class="container my-5 text-center">
    <h1 class="mb-5">-Rick & Morty-</h1>
    <label for="exampleDataList" class="form-label">Ricerca Personaggi</label>
    <input
      class="form-control"
      list="datalistOptions"
      id="exampleDataList"
      placeholder="Scrivi qui per cominciare la ricerca."
      v-model.trim="name"
      @keyup.enter="startSearch"
      >
    <datalist id="datalistOptions">
      <option
        v-for="(name,index) in this.store.characterName"
        :key="index"
        :value="name"
        ></option>
</datalist>
  </div>
</template>


<style lang="scss" scoped>

</style>