<template>
  <div :class="prefixCls">
    <div :class="prefixCls +'-heading'">
      <div class="title">
        {{title}}
        <v-tip v-if="tip" :content="tip"></v-tip>
        <nav>
          <a v-if="pagination.length > 0" v-for="pages in pagination" @click="_selectPage(pages)" :class="{'active': currentpage === pages}">{{pages}}</a>
        </nav>
      </div>
    </div>
    <div :class="prefixCls + '-content'">
      <div v-for="pages in pagination" v-show="currentpage === pages">
        <slot :name="pages"></slot>
      </div>
    </div>
  </div>
</template>
<script>
import {defaultProps} from '../util/props'
export default {
  props: defaultProps({
    prefixCls: 'panel',
    title: String,
    tip: String,
    pagination: []
  }),
  data () {
    return {
      currentpage: this.pagination[0]
    }
  },
  methods: {
    _selectPage (val) {
      this.currentpage = val
    }
  }
}
</script>
