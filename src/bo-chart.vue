<template>
  <div class="bo-chart">
    <div ref="chart" class="chart-el"></div>
  </div>
</template>

<script>
import debounce from './utils/debounce'
import { init } from 'echarts'

export default {
  inheritAttrs: false,
  name: 'bo-chart',
  data() {
    return {
      chart: null,
      LISTENER_HOOKS: {
        resize: debounce(() => {
          this.chart && this.chart.resize()
        }),
      },
    }
  },
  computed: {
    series() {
      return this.$attrs.series
    },
  },
  watch: {
    series: {
      handler() {
        this.setOption()
      },
      deep: true,
    },
  },
  mounted() {
    this.initChart()
    this.setOption()
    this.addEventListener()
  },
  beforeDestroy() {
    this.chart.dispose()
    this.removeEventListener()
  },
  methods: {
    addEventListener() {
      window.addEventListener('resize', this.LISTENER_HOOKS.resize)
    },
    removeEventListener() {
      window.removeEventListener('resize', this.LISTENER_HOOKS.resize)
    },
    initChart() {
      this.chart = init(this.$refs.chart)
      this.chart.on('click', (params) => this.$emit('click-event', params))
    },
    setOption() {
      this.chart.clear()
      this.chart.setOption(this.$attrs)
    },
  },
}
</script>

<style scoped>
.bo-chart {
  height: 450px;
  width: 100%;
  min-height: 50px;
  min-width: 50px;
}
.chart-el {
  height: 100%;
  width: 100%;
}
</style>
