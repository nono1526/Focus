<template>
  <div id="app">
    <main-background
      :status="status"
    ></main-background>
    <button @click="status = 'top'">top</button>
    <button @click="status = 'mid'">mid</button>
    <button @click="status = 'bottom'">bottom</button>
    <router-view/>
  </div>
</template>
<style lang="stylus">
@font-face
  font-family no1
  font-style normal
  src url(../public/font/Hijrnotes_PERSONAL_USE_ONLY.ttf)
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
  },
  data () {
    return {
      status: 'mid'
    }
  }
}
</script>
