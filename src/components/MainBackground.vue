<template>
  <div class="wrapper">
    <canvas ref="bg" id="main"></canvas>
    <canvas ref="blur" id="blur"></canvas>
    <div class="focus">Focus</div>
  </div>
</template>

<script>
const WW = window.innerWidth
const WH = window.innerHeight
export default {
  name: 'main-background',
  data () {
    return {
      publicPath: process.env.BASE_URL,
      canvas: null,
      ctx: null,
      time: 0,
      blurCanvas: null,
      blurCtx: null,
      timer: null
    }
  },
  methods: {
    init () {
      this.canvas = this.$refs['bg']
      this.blurCanvas = this.$refs['blur']
      this.canvas.width = WW
      this.canvas.height = WH
      this.blurCanvas.width = WW
      this.blurCanvas.height = WH
      this.ctx = this.canvas.getContext('2d')
      this.blurCtx = this.blurCanvas.getContext('2d')
      this.timer = window.setInterval(() => {
        this.draw(this.ctx, false)
        this.draw(this.blurCtx, true)
      }, 1000 / 30)
    },
    draw (ctx, blur) {
      this.time++
      ctx.rect(0, 0, WW, WH)
      ctx.fillStyle = '#000'
      ctx.fill()
      ctx.beginPath()
      ctx.arc(WW / 2, WH / 2 + Math.cos(this.time / 30) * 10 - 30, 120, 0, Math.PI * 2)
      ctx.fillStyle = '#FEFFF9'
      ctx.fill()
      if (blur) ctx.filter = 'blur(16px)'
    },
    drawBlur () {

    },
    update () {

    }
  },
  mounted () {
    this.init()
  },
  beforeDestroy () {
    window.clearInterval(this.timer)
  }
}
</script>

<style lang="stylus" scoped>

.wrapper
  height 100vh
  width 100vw
  position relative
  canvas
    position absolute
    left 0
    top 0
  #blur
    z-index 1
    clip-path circle(75% at 50% 105%)
.focus
  font-family 'no1'
  position absolute
  z-index 2
  color black
  font-size 40px
  text-shadow 0 24px 12px
  top 45%
  left 50%
  transform translate(-50%, -50%)
  animation: linear updown 3s infinite alternate
  @keyframes updown
    from
      transform translate(-50%, -90%)
    to
      transform translate(-50%, -70%)
</style>
