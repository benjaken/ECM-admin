<template>
  <div>
    <v-panel title="活跃用户趋势"
             tip="活跃用户：WEB端和PC端，当日有过登录的用户记为活跃用户；对于移动端，当日有启动应用至少一次的用户记为活跃用户"
             type="time"
             :datas='data'
             :legends='legend'>
    </v-panel>
    <v-table title="活跃用户明细" type="number" :tableThContent="tableThContent" :numbers='table'>
      <button type="button" class="primary">新建</button>
      <button type="button">删除</button>
    </v-table>
  </div>
</template>
<script>
import vPanel from '../components/common/panel'
import vTable from '../components/common/table'
export default{
  components: {
    vPanel,
    vTable
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
      legend: ['邮件营销', '联盟广告', '视频广告'],
      table: [{'date': '1', 'number': '111'},
      {'date': '2', 'number': '222'},
      {'date': '3', 'number': '333'},
      {'date': '4', 'number': '444'},
      {'date': '5', 'number': '555'},
      {'date': '6', 'number': '111'},
      {'date': '7', 'number': '222'},
      {'date': '8', 'number': '333'},
      {'date': '9', 'number': '444'},
      {'date': '10', 'number': '555'}],
      tableThContent: ['日期', '邮件营销', '联盟广告', '视频广告', '操作']
    }
  }
}
</script>
