<template>
  <div class="datearea">
     <input type='text' id='startValue' :class="{'error': error}" :disabled="disabled"/>
     <span v-if="group"> 至 </span>
     <input type='text' id='endValue' :class="{'error': error}" :disabled="disabled" v-if="group"/>
     <button type="button" class="primary" :disabled='error ' @click='onSearch'>搜索</button>
     <span class="error" v-if="error">{{errorString}}</span>
   </div>
</template>
<script>
import $ from 'jquery'
import {defaultProps} from '../util/props'
import moment from 'moment'
require('bootstrap-datepicker/dist/js/bootstrap-datepicker.js')
export default {
  props: defaultProps({
    disabled: false,
    // background: true,
    defaultvalue: String,
    format: {
      type: String,
      default: 'mm/dd/yyyy'
    },
    autoclose: true,
    orientation: {
      type: String,
      default: 'bottom auto'
    },
    group: Boolean,
    onSearch: () => {}
  }),
  data () {
    return {
      startValue: Number(this.defaultvalue === '' ? moment().format('x') : moment(this.defaultvalue).format('x')),
      endValue: Number(moment().format('x')),
      error: false,
      errorString: ''
    }
  },
  mounted () {
    $('#startValue').datepicker({
      autoclose: this.autoclose,
      language: 'zh-CN',
      orientation: this.orientation,
      format: this.format
    }).on('changeDate', function(e) {
      this.startValue = Number(moment(e.date).format('x'))
      return this.startValue
    })
    $('#endValue').datepicker({
      autoclose: this.autoclose,
      language: 'zh-CN',
      orientation: this.orientation,
      format: this.format
    }).on('changeDate', function(e) {
      var self = this
      self.endValue = moment(e.date).format('x')
      return self.endValue
    })
    $('#startValue').datepicker('setDate', moment(Number(this.startValue)).format(this.format.toUpperCase()))
    $('#endValue').datepicker('setDate', moment(Number(this.endValue)).format(this.format.toUpperCase()))
  },
  watch: {
    'startValue' (val) {
      if (val > this.endValue) {
        this.error = true
        this.errorString = '起始时间不能晚于终止时间'
      }
    }
  }
}
</script>
