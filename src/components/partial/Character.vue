<script>
  export default {
    props:{
      image: String,
      name: String,
      status: String,
      species: String
    }
  }
</script>


<template>
  <div class="col">
    <div class="card mb-3">
      <img :src="image" class="rounded" alt="name">
      <div class="card-body">
        <h3>{{ name }}</h3>
        <p class="text-warning bg-dark">{{ status }}</p>
        <p class="text-danger-emphasis">{{species}}</p>
      </div>    
    </div>
  </div>
</template>


<style lang="scss" scoped>

</style>