<template>
  <BoChart v-bind="option" />
</template>

<script>
import BoChart from '../src/bo-chart.vue'
export default {
  components: {
    BoChart,
  },
  computed: {
    option() {
      return {
        tooltip: {
          trigger: 'axis',
        },
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            data: [15123, 23000, 22499, 21800, 13500, 14700, 26099],
            type: 'line',
          },
        ],
      }
    },
  },
}
</script>

<style></style>
