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
    <div class="card">
      <img :src="image" class="rounded" alt="name">
      <div class="card-body">
        <h3>Rick</h3>
      </div>    
    </div>
  </div>
</template>


<style lang="scss" scoped>

</style>