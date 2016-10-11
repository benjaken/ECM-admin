<template>
  <div :class="prefixCls">
    <div :class="prefixCls +'-heading'">
      <div class="title">
        {{title}}
        <v-tip v-if="tip" :content="tip"></v-tip>
        <nav>
          <a v-if="type === 'time'" v-for="time in timePagination" :id="time.name" @click="_selectPage(time.name)" :class="{'active': currentpage === time.name}">{{time.name}}</a>
          <a v-if="type === 'number'" v-for="number in numberPagination" :id="number.name" @click="_selectPage(number.name)" :class="{'active': currentpage === number.name}">{{number.name}}</a>
        </nav>
      </div>
    </div>
    <div :class="prefixCls + '-content'">
      <div v-if="type === 'time'" id="Echart" style="height:400px;"></div>
      <div v-else></div>
    </div>
  </div>
</template>
<script>
import {defaultProps, oneOf} from '../util/props'
var echarts = require('echarts')
import vTip from './tip'

export default {
  props: defaultProps({
    prefixCls: 'panel',
    title: String,
    tip: String,
    type: oneOf(['time', 'number', undefined]),
    timePagination: [{'name': '日'}, {'name': '周'}, {'name': '月'}],
    numberPagination: [{'name': '30'}, {'name': '50'}, {'name': '100'}, {'name': '所有'}],
    datas: Array,
    legend: []
  }),
  data () {
    return {
      currentpage: this.timePagination.length > 0 ? this.timePagination[0].name : '',
      xAxis: []
    }
  },
  methods: {
    _selectPage (val) {
      this.currentpage = val
    }
  },
  mounted () {
    for (var obj of this.datas) {
      this.xAxis.push(obj.xAxis)
    }
    var Echart = echarts.init(document.getElementById('Echart'))
    Echart.hideLoading()
    Echart.setOption({
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: this.legend
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      xAxis: [{
        type: 'category',
        boundaryGap: false,
        data: this.xAxis
      }],
      yAxis: [{
        type: 'value'
      }],
      series: [{
        name: '邮件营销',
        type: 'line',
        data: [120, 132, 100] // data
      }]
    })
  },
  components: {
    vTip
  }
}
</script>
