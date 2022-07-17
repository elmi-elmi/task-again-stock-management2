<template>
  <td :colspan="headers.length">
    <v-container class="">
      <v-row justify="center" class="grey--text ">
        <v-col>id</v-col>
        <v-col>amount</v-col>
        <v-col>point of time</v-col>
      </v-row>
      <v-row v-for="r in item" justify="center" class="">
        <v-col sm="4" cols v-for="(d,i) in r">
          <span v-if="i !== 'pointOfTime' ">{{ d }}</span>
          <span v-else>{{ reserveDate(d) }}</span>
        </v-col>
      </v-row>
    </v-container>
  </td>
</template>

<script>
export default {
  name: "ReserveTable",
  props: {
    headers: {
      required: true,
      type: Array
    },
    item: {
      type: Array,
    }
  },
  methods: {
    reserveDate(d) {
      const date = new Date(d)
      return `${date.getMonth() + 1}/ ${date.getDate()} / ${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    },
  }
}
</script>

<style scoped>

</style>
