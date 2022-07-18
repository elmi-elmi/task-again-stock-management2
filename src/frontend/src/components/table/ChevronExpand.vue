<template>
<div>
  <div v-if="item.length">
    <div v-if="isExpanded">
      <span class="grey--text">hide</span>
      <v-icon @click="expand(!isExpanded)">
        mdi-chevron-up
      </v-icon>
    </div>
    <div v-else>
      <span class="grey--text">show</span>
      <v-icon @click="expand(!isExpanded)">
        mdi-chevron-down
      </v-icon>
    </div>
  </div>
  <div v-else class="grey--text">
    No reserve
  </div>
</div>
</template>

<script>
/**
 * expanded chevron for reservation column
 *
 * @author Shahrokh elmi
 */
export default {
  name: "ChevronExpand",
  props:{
    item:{
      required:true,
      type:Array
    },
    isExpanded:{
      type:Boolean,
      required:true
    },
    expand:{
      type:Function,
      required:true
    }
  }
}
</script>

<style scoped>

</style>
