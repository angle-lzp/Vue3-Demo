<template>
  <div>
    app-{{ title }}

    <!-- <div id="main"></div> -->
    <div id="main" style="width: 600px;height:400px;"></div>

  </div>
</template>
<script>

import * as echarts from 'echarts'
export default {
  data() {
    return {
      title: '111111',
      option: {}
    }
  },
  beforeCreate() {
    // 基本不用，创建之前啥事都做不了
    console.log("beforeCreate", this.title)
  },
  created() {
    // 有数据了，但是dom获取不了
    console.log("created", this.title)
    this.title = "222222"
    //初始化工作

    this.option = {
      title: {
        text: 'ECharts 入门示例'
      },
      tooltip: {},
      xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
      },
      yAxis: {},
      series: [
        {
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }
      ]
    }
  },
  beforeMount() {
    //挂载之前无法获取dom，要已挂载才可以获取到dom
    console.log("beforeMount", document.getElementById('main'))
  },
  mounted() {
    console.log("mounted", document.getElementById('main'))
    // 订阅发布
    // ajax
    // setInterval
    // 访问dom
    var myChart = echarts.init(document.getElementById('main'));
    myChart.setOption(this.option);
  }
}
</script>
