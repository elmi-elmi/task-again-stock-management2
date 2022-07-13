<template>
  <div class="report">
    <v-container  >
      <v-card  tile class="pa-4"  max-width="600" >
        <v-row
            align-content="center"
            class="reportBorder pa-2" v-for="report in report"
        >
          <v-col class="" sm="1" >
            <div class="grey--text">ID</div>
            <div>{{ report.id }}</div>
          </v-col>
          <v-col  sm="6">
            <div class="grey--text">Name</div>
            <div>{{ report.name }}</div>
          </v-col>
          <v-col  sm="2">
            <div class="grey--text">stock</div>
            <div>{{ report.stock }}</div>
          </v-col>
          <v-col  sm="3">
            <v-chip :class="`mt-2  white--text caption `">{{report.amount}}</v-chip>
          </v-col>


          <v-divider class="pa-1" ></v-divider>
        </v-row>
      </v-card>
    </v-container>
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
</style>
