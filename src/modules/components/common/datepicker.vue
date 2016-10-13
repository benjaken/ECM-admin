<template>
  <div class="datepicker" v-show="background  ">
     <input type='text' :id='id' v-model="value" :disabled="disabled"/>
   </div>
</template>
<script>
import $ from 'jquery'
import {defaultProps} from '../util/props'
require('../util/bootstrap-datetimepicker')
require('../../../static/css/bootstrap-datetimepicker.css')
export default {
  props: defaultProps({
    value: String,
    disabled: false,
    background: true
  }),
  data () {
    return {
      id: 'datePicker',
      format: 'YYYY-MM-DD'
    }
  },
  mounted () {
    let option = {locale: 'zh-CN', format: this.format}
    $('#' + this.id).datetimepicker(option)
  }
}
</script>
