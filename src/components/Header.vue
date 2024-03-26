<script>
import { store } from '../data/store' 
  export default {
    data(){
      return{
        store
      }
    }
  }
</script>

<template>
  <div class="container my-5 text-center">
    <h1 class="mb-5">-Rick & Morty-</h1>
    <label for="exampleDataList" class="form-label">Ricerca Personaggi</label>
    <input class="form-control" list="datalistOptions" id="exampleDataList" placeholder="Scrivi qui per cominciare la ricerca.">
    <datalist id="datalistOptions">
      <option value="San Francisco"></option>
      <option value="New York"></option>
      <option value="Seattle"></option>
      <option value="Los Angeles"></option>
      <option value="Chicago"></option>
</datalist>
  </div>
</template>


<style lang="scss" scoped>

</style>