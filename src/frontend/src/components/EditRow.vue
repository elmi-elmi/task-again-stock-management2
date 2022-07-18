<template>
  <v-row
      align="center"
      class="pa-1 ma-0"
  >
    <v-col sm="6">
      <v-text-field
          background-color="grey lighten-3"
          hide-details
          class="ma-0 pa-0"
          rounded
          label="amount"
          :value="value"
          @input="$emit('input',$event)"
      >
      </v-text-field>
    </v-col>
    <v-col sm="6">
      <slot name="firstButton">
      </slot>
      <slot name="secondButton">
      </slot>
    </v-col>

  </v-row>
</template>

<script>
export default {
  name: "EditRow",
  props: ['value'],


}
</script>

<style scoped>

</style>
