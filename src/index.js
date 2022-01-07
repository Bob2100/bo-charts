import BoChart from './src/bo-chart.vue'
import BoRadarChart from './src/bo-radar-chart.vue'
import BoLineChart from './src/bo-line-chart.vue'
const components = [BoChart, BoRadarChart, BoLineChart]
const install = function (Vue) {
  components.map((component) => {
    Vue.component(component.name, component)
  })
}
export default {
  install,
}
