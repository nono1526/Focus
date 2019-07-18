<template>
  <div id="app">
    <main-background></main-background>

    <router-view/>
  </div>
</template>
<style lang="stylus">
html, body
  padding 0
  margin 0
  height 100vh
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale

</style>

<script>
import MainBackground from '@/components/MainBackground.vue'
export default {
  components: {
    MainBackground
  }
}
</script>
