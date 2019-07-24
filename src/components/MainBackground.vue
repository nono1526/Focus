<template>
  <div class="wrapper">
    <canvas ref="bg" id="main" :class="{top: status === 'top', bottom: status === 'bottom', hide: visible}"></canvas>
    <canvas
      ref="blur"
      :class="{top: status === 'top', bottom: status === 'bottom', hide: visible}"
      id="blur"></canvas>
    <div class="focus"
      :class="{top: status === 'top', bottom: status === 'bottom'}"
    >{{ status === 'bottom' ? 'Breath Time' : 'Focus' }}</div>
    <div class="time" :class="{
      top: status === 'top', bottom: status === 'bottom'
    }">{{remainMinutes}}:{{remainSeconds}}</div>
    <img class="dotWh" ref="dotWh" src="../assets/dotWh.png" height="100%">
  </div>
</template>

<script>
const DEG_TO_PI = Math.PI / 180
const WW = window.innerWidth
const WH = window.innerHeight
export default {
  name: 'main-background',
  props: {
    status: String,
    remainTime: Number,
    visible: {
      default: false,
      type: Boolean
    },
    fullTime: Number
  },
  data () {
    return {
      publicPath: process.env.BASE_URL,
      canvas: null,
      ctx: null,
      time: 0,
      blurCanvas: null,
      blurCtx: null,
      timer: null,
      moon: {
        x: WW / 2,
        y: WH * 2 / 5,
        r: 120
      },
      requestId: 0,
      bgc: {
        r: 22,
        g: 22,
        b: 22,
        a: 0.9
      },
      running: false
    }
  },
  computed: {
    remainMinutes () {
      return Math.floor(this.remainTime / 1000 / 60)
    },
    remainSeconds () {
      const sec = (this.remainTime / 1000) % 60
      return `${sec < 10 ? '0' : ''}${sec}`
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
        this.time++
      }, 1000 / 30)
      this.requestId = window.requestAnimationFrame(() => {
        this.draw(this.ctx, false)
        this.draw(this.blurCtx, true)
      })
    },
    draw (ctx, blur) {
      ctx.fillStyle = `rgba(${this.bgc.r},${this.bgc.g}, ${this.bgc.b}, ${this.bgc.a})`
      if (blur) {
        ctx.filter = 'blur(16px)'
        ctx.fillStyle = 'rgba(55, 55, 61, .56)'
      }
      ctx.rect(0, 0, WW, WH)
      ctx.fill()
      ctx.beginPath()
      const moonY = this.status === 'mid' ? this.moon.y + Math.cos(this.time / 30) * 10 - 30 : this.moon.y

      if (this.status === 'top') {
        ctx.shadowBlur = 55
        ctx.shadowColor = '#FFF3B5'
      } else {
        ctx.shadowBlur = 0
      }
      ctx.arc(this.moon.x, moonY, this.moon.r, 0, Math.PI * 2)
      ctx.fillStyle = '#FCFFEE'
      ctx.fill()

      if (this.status === 'top') {
        ctx.beginPath()
        ctx.arc(this.moon.x, moonY, this.moon.r + 13, 0, Math.PI * 2)
        ctx.strokeStyle = 'rgba(254, 255, 249, 0.3)'
        ctx.stroke()
        const pathToAngle = (360 - ((this.remainTime / this.fullTime) * 360) - 90) * DEG_TO_PI
        ctx.beginPath()
        const outR = this.moon.r + 13
        const dotX = outR * Math.cos(pathToAngle)
        const dotY = outR * Math.sin(pathToAngle)
        ctx.arc(this.moon.x + dotX, this.moon.y + dotY, 3, 0, 360 * DEG_TO_PI)
        ctx.fillStyle = '#FEFFF9'
        ctx.fill()
        ctx.beginPath()
        ctx.arc(this.moon.x, moonY, outR, -90 * DEG_TO_PI, pathToAngle)
        ctx.strokeStyle = '#FEFFF9'
        ctx.stroke()
        ctx.beginPath()
      }

      this.requestId = window.requestAnimationFrame(() => {
        this.draw(ctx, blur)
      })
    },
    runTop () {
      const top = WH * 3 / 10
      if (this.moon.y > top) {
        this.moon.y -= 30
        this.moon.r -= 5
        this.bgc.r += 3
        this.bgc.g += 3
        this.bgc.b += 3
        window.setTimeout(() => this.runTop(), 1000 / 30)
      } else {
      }
    },
    runMid (isFromBottom) {
      const top = WH * 2 / 5
      if (!isFromBottom) {
        if (this.moon.y < top) {
          this.moon.y += 20
          this.moon.r += 5
          this.bgc.r -= 3
          this.bgc.g -= 3
          this.bgc.b -= 3
          window.setTimeout(() => this.runMid(isFromBottom), 1000 / 30)
        } else {
          this.moon.r = 120
          this.moon.y = top
          this.running = false
        }
      } else {
        if (this.moon.y > top) {
          this.moon.y -= 13
          this.moon.r += 2
          this.bgc.r = 22
          this.bgc.g = 22
          this.bgc.b = 22
          window.setTimeout(() => this.runMid(isFromBottom), 1000 / 30)
        } else {
          this.moon.r = 120
          this.moon.y = top
          this.running = false
        }
      }
    },
    runBottom () {
      const top = WH / 2
      if (this.moon.y < top) {
        this.moon.y += 20
        this.bgc.r -= 3
        this.bgc.g -= 3
        this.bgc.b -= 3
        window.setTimeout(() => this.runBottom(), 1000 / 30)
      } else {
        this.running = false
      }
    }
  },
  watch: {
    status (val, last) {
      this.running = true
      const statusActionMapping = {
        top: this.runTop,
        mid: this.runMid,
        bottom: this.runBottom
      }
      window.setTimeout(() => statusActionMapping[val](last === 'bottom'), 1000 / 30)
    }
  },
  mounted () {
    this.init()
  },
  beforeDestroy () {
    window.clearInterval(this.timer)
    window.cancelAnimationFrame(this.requestId)
  }
}
</script>

<style lang="stylus" scoped>

.wrapper
  background-color rgba(22,22,22,.9)
  height 100vh
  width 100vw
  position absolute
  z-index -1
  canvas
    position absolute
    left 0
    top 0
  #main
    z-index -2
    &.hide
      opacity 0
  #blur
    z-index -1
    clip-path circle(90% at 50% 105%)
    &.hide
      opacity 0
    &.top
      opacity 0
    &.bottom
      clip-path none

.time
  font-family 'Verdana'
  font-weight lighter
  position absolute
  z-index -1
  color #2B2B32
  font-size 40px
  top 31%
  left 50%
  transform translate(-50%, -50%)
  opacity 0
  &.bottom
    top 55%
    font-size 20px
    opacity 1
    transition .1s
  &.top
    opacity 1
    transition .1s
.focus
  white-space nowrap
  font-family 'no1'
  font-weight bold
  position absolute
  z-index -1
  color #2B2B32
  font-size 40px
  text-shadow 0 24px 12px
  top 33%
  left 50%
  transform translate(-50%, -50%)
  transition .6s
  &.top
    top 23%
    font-size 20px
    transform translate(-50%, -50%)
    text-shadow none
    opacity .7
  &.bottom
    top 48%
  // animation: linear updown 3s infinite alternate
  // @keyframes updown
  //   from
  //     transform translate(-50%, -90%)
  //   to
  //     transform translate(-50%, -70%)
.dotWh
  position absolute
  width 100%
  z-index -1
</style>
