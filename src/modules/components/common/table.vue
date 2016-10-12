<template>
  <div :class="prefixCls">
    <div :class="prefixCls +'-heading'">
      <div class="title">
        {{title}}
        <v-tip v-if="tip" :content="tip"></v-tip>
        <nav>
          <a v-if="type === 'time'" v-for="time in timePagination" :id="time.name" @click="_selectPage(time.name)" :class="{'active': currentpage = time.name}">{{time.name}}</a>
          <a v-if="type === 'number'" v-for="number in numberPagination" @click="_selectPage(number)" :class="{'active': currentpage === number}">{{number}}</a>
        </nav>
      </div>
    </div>
    <div :class="prefixCls + '-content'">
      <div class="toolbox">
        <slot></slot>
      </div>
      <table class="table table-striped">
        <thead><tr><th v-for="th in tableThContent">{{th}}</th></tr></thead>
        <tbody>
          <tr v-for="n in evenNumbers">
            <td>{{n.date}}</td>
            <td v-for="i in 3">{{n.number}}</td>
            <td><a href="#">查看</a></td>
          </tr>
        </tbody>
      </table>
      <ul class="pagination">
        <li><button @click="nowpage -= 1" :disabled="nowpage === 1">上一页</button></li>
        <li>{{nowpage}}/{{pages}}</li>
        <li><button @click="nowpage += 1" :disabled="nowpage === pages">下一页</button></li>
      <ul>
    </div>
  </div>
</template>
<script>
import {defaultProps, oneOf} from '../util/props'
import vTip from './tip'

export default {
  props: defaultProps({
    prefixCls: 'panel',
    tableThContent: [],
    title: String,
    tip: String,
    type: oneOf(['time', 'number', undefined]),
    timePagination: [{'name': '日'}, {'name': '周'}, {'name': '月'}],
    numberPagination: [30, 50, 100, 500],
    datas: Array,
    numbers: Array
  }),
  data () {
    return {
      currentpage: 30,
      nowpage: 1
    }
  },
  computed: {
    pages: function () {
      return Math.ceil(this.numbers.length / this.currentpage)
    },
    evenNumbers: function () {
      return this.numbers.slice(this.currentpage * (this.nowpage - 1), this.currentpage * this.nowpage)
    }
  },
  methods: {
    _selectPage (val) {
      this.currentpage = val
      this.nowpage = 1
    }
  },
  components: {
    vTip
  }
}
</script>
