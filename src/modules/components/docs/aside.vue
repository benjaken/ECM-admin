<template>
  <div class="aside-container">
    <ul>
      <li v-for="config in configs">
        <a :id="config.id" :class="{'active': currentPage === '/main/' + config.id}">{{config.title}}</a>
      </li>
    </ul>
  </div>
</template>
<script>
import {getCategory} from '../util/category'
export default{
  data () {
    return {
      configs: []
    }
  },
  mounted () {
    this.configs = getCategory()
  },
  computed: {
    currentPage() {
      return this.$route.path
    }
  }
}
</script>
