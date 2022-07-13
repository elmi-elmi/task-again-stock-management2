<template>
  <div class="report">
      <h1 class="subtitle-1 pa-4 grey--text">Reports</h1>
    <v-container class="my-5 pa-4" v-if="report.length" >
      <v-card  tile class="pa-4 mx-auto"    >
        <v-list
            justify="center"
            align-content="center"
            :class="`pa-2`" v-for="report in report"
        >
          <v-row
              :class="`report ${report.status}`"
          >
          <v-col class="" sm="2" >
            <div class="grey--text">ID</div>
            <div>{{ report.id }}</div>
          </v-col>
          <v-col  sm="6">
            <div class="grey--text">Name</div>
            <div>{{ report.name }}</div>
          </v-col>
          <v-col  sm="2">
            <div class="grey--text">stock</div>
            <div>{{ report.stock }} </div>
          </v-col>
          <v-col  sm="2" class="justify-end" >
            <v-chip  :class="`mt-2  white--text caption ${report.status}`">{{report.amount}}</v-chip>
          </v-col>
          </v-row>


          <v-divider class="" ></v-divider>
        </v-list>
      </v-card>
    </v-container>
    <h1 class="display-1 reportFallback grey--text" v-else>No record</h1>
  </div>
</template>

<script>
export default {
  name: "ReportView",
  computed: {
    report() {
      console.log('--->',this.$store.getters['report/getReports'])
      return this.$store.getters['report/getReports']
    }
  }
}
</script>

<style scoped>
.reportBorder {
  border-left: 4px solid orange;
}
.v-chip.refill{
  background: teal;
}
.v-chip.decrease{
  background: coral;
}

.report.refill{
  border-left: 4px solid teal;

}
.report.decrease{
  border-left: 4px solid coral;

}
.reportFallback{
  position: absolute;
  top: 50%;
  left: 50%;
  transform:translate(-50%,-50%)
}
</style>
