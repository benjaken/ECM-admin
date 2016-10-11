<template>
  <span class="tip" @click="showTip = !showTip">?
    <div class="tip-content">{{content}}</div>
  </span>
</template>
<script>
  import {defaultProps} from '../util/props'
  export default{
    props: defaultProps({
      content: String
    }),
    data () {
      return {
        showTip: false
      }
    }
  }
</script>
