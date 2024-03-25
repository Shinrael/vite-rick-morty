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
    <div class="card mb-3 shadow">
      <img :src="image" class="rounded" alt="name">
      <div class="card-body">
        <h4 class="">{{ name }}</h4>
        <p class="text-warning bg-dark">{{ status }}</p>
        <p class="text-danger-emphasis">{{species}}</p>
      </div>    
    </div>
  </div>
</template>


<style lang="scss" scoped>
  .card:hover{
    transition: transform 0.3s ease-in-out;
    transform: scale(1.05);
  }
</style>