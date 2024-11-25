# BoCharts

echarts 图表的 vue2 组件封装

# NPM 安装 BoCharts

```sh
npm i -S bo-charts
```

# 在 Vue2 中注册 BoCharts

```js
import BoCharts from 'bo-charts'

Vue.use(BoCharts)
```

# 使用示例

```html
<template>
  <bo-chart v-bind="option" />
</template>

<script>
  export default {
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
```
