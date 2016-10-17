<template>
  <div>
    <v-datepicker format="yyyy-mm-dd"
                  defaultvalue="2016-08-01"
                  :group="true"
                  :onSearch='_onSearch'>
    </v-datepicker>
    <v-panel title="版本分布" :pagination="Pagination">
      <div slot="ios"><div id="ioschart" style="height:400px;"></div></div>
      <div slot="android">222</div>
      <div slot="pc">333</div>
    </v-panel>
    <v-chart title="活跃用户趋势"
             tip="活跃用户：WEB端和PC端，当日有过登录的用户记为活跃用户；对于移动端，当日有启动应用至少一次的用户记为活跃用户"
             type="time"
             :datas='data'
             :legends='legend'>
    </v-chart>
    <v-table title="活跃用户明细" type="number" :tableThContent="tableThContent" :numbers='table'>
      <button type="button" class="primary">新建</button>
      <button type="button">删除</button>
    </v-table>
  </div>
</template>
<script>
import vDatepicker from '../components/common/datepicker'
import vPanel from '../components/common/panel'
import vChart from '../components/common/chart'
import vTable from '../components/common/table'
var echarts = require('echarts')

export default{
  components: {
    vDatepicker,
    vPanel,
    vChart,
    vTable
  },
  data () {
    return {
      Pagination: ['ios', 'android', 'pc'],
      data: [{'xAxis': '周一',
        'yAxis': [{'title': '邮件营销', 'number': '120'},
          {'title': '联盟广告', 'number': '150'},
          {'title': '视频广告', 'number': '120'}]
      }, {'xAxis': '周二',
        'yAxis': [{'title': '邮件营销', 'number': '20'},
          {'title': '联盟广告', 'number': '50'},
          {'title': '视频广告', 'number': '20'}]
      }, {'xAxis': '1',
        'yAxis': [{'title': '邮件营销', 'number': '20'},
          {'title': '联盟广告', 'number': '150'},
          {'title': '视频广告', 'number': '20'}]
      }],
      legend: ['邮件营销', '联盟广告', '视频广告'],
      table: [{'date': '2012-09-01', 'number': '111', 'number2': '222', 'number3': '333'},
      {'date': '2012-09-01', 'number': '111', 'number2': '222', 'number3': '333'},
      {'date': '2012-09-01', 'number': '111', 'number2': '222', 'number3': '333'},
      {'date': '2012-09-01', 'number': '111', 'number2': '222', 'number3': '333'},
      {'date': '2012-09-01', 'number': '111', 'number2': '222', 'number3': '333'},
      {'date': '2012-09-01', 'number': '111', 'number2': '222', 'number3': '333'},
      {'date': '2012-09-01', 'number': '111', 'number2': '222', 'number3': '333'},
      {'date': '2012-09-01', 'number': '111', 'number2': '222', 'number3': '333'},
      {'date': '2012-09-01', 'number': '111', 'number2': '222', 'number3': '333'},
      {'date': '2012-09-01', 'number': '111', 'number2': '222', 'number3': '333'},
      {'date': '2012-09-01', 'number': '111', 'number2': '222', 'number3': '333'}],
      tableThContent: ['日期', '邮件营销', '联盟广告', '视频广告', '操作']
    }
  },
  mounted () {
    var Echart = echarts.init(document.getElementById('ioschart'))
    Echart.hideLoading()
    Echart.setOption({
      title: {
        text: '某站点用户访问来源',
        subtext: '纯属虚构',
        x: 'center'
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
      },
      series: [
        {
          name: '访问来源',
          type: 'pie',
          radius: '55%',
          center: ['50%', '60%'],
          data: [
            {value: 335, name: '直接访问'},
            {value: 310, name: '邮件营销'},
            {value: 234, name: '联盟广告'},
            {value: 135, name: '视频广告'},
            {value: 1548, name: '搜索引擎'}
          ],
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    })
  },
  methods: {
    _onSearch () {
      console.log('click')
    }
  }
}
</script>
