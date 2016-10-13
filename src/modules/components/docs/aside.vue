<template>
  <div class="aside-container">
    <ul>
      <li v-for="config in configs">
        <router-link :to="'/main/' + config.id" tag="a" :class="{'active': currentPage === '/main/' + config.id}">{{config.title}}</router-link>
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
