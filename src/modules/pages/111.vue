<template>
  <div>
    <v-panel title="活跃用户趋势"
             tip="活跃用户：WEB端和PC端，当日有过登录的用户记为活跃用户；对于移动端，当日有启动应用至少一次的用户记为活跃用户"
             type="time"
             :datas='data'>
    </v-panel>
    <v-panel title="活跃用户明细" type="number" legend='legend'></v-panel>
  </div>
</template>
<script>
import vPanel from '../components/common/panel'
export default{
  components: {
    vPanel
  },
  data () {
    return {
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
      legend: ['邮件营销', '联盟广告', '视频广告']
    }
  }
}
</script>
