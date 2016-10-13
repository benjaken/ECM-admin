<template>
  <div :class="{'modal open': open}" v-if="open">
    <div :class="prefixCls + '-dialog'">
      <div :class="prefixCls + '-heading'">
        {{title}}
        <span @click="open === false">x</span>
      </div>
      <div :class="prefixCls + '-body'">
        <slot></slot>
      </div>
      <div :class="prefixCls + '-footer'">
        <button type="button" class="primary">确定</button>
        <button type="button" @click="open = false">取消</button>
      </div>
    </div>
  </div>
</template>
<script>
import {defaultProps} from '../util/props'
export default {
  props: defaultProps({
    prefixCls: 'modal',
    title: String
  }),
  data () {
    return {
      open: true
    }
  }
}
</script>
