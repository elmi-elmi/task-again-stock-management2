<template>
  <div>

    <h1>Not found View</h1>
    <p>
      Back to
      <router-link :to="{ name: 'product' }">Home</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: "NotFoundView"
}
</script>

<style scoped>

</style>
