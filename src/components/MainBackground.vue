<template>
  <div class="wrapper">
    <canvas ref="bg" id="main"></canvas>
    <canvas
      ref="blur"
      :class="{top: this.status === 'top'}"
      id="blur"></canvas>
    <div class="focus"
      :class="{top: this.status === 'top'}"
    >Focus</div>
    <div class="time" :class="{
      show: status === 'top'
    }">{{remainMinutes}}:{{remainSeconds}}</div>
    <img class="dotWh" ref="dotWh" src="../assets/dotWh.png" width="100%">
  </div>
</template>

<script>
const DEG_TO_PI = Math.PI / 180
const FULL_TIME = 60 * 1000 * 25
const WW = window.innerWidth
const WH = window.innerHeight
export default {
  name: 'main-background',
  props: {
    status: String
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
        y: WH / 2,
        r: 120
      },
      requestId: 0,
      bgc: {
        r: 22,
        g: 22,
        b: 22,
        a: 1
      },
      running: false,
      counter: 1000 * 60 * 60 * 25
    }
  },
  computed: {
    remainMinutes () {
      return Math.floor(this.counter / 1000 / 60)
    },
    remainSeconds () {
      const sec = (this.counter / 1000) % 60
      return `${sec < 10 ? '0' : ''}${sec}`
    }
  },
  methods: {
    countdown () {
      this.countTimer = window.setTimeout(() => {
        this.counter -= 1000
        if (this.counter > 0) this.countdown()
      }, 1000)
    },
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
        ctx.shadowBlur = 100
        ctx.shadowColor = '#FEFFF9'
      } else {
        ctx.shadowBlur = 0
      }
      ctx.arc(this.moon.x, moonY, this.moon.r, 0, Math.PI * 2)
      ctx.fillStyle = '#FEFFF9'
      ctx.fill()

      if (this.status === 'top') {
        ctx.beginPath()
        ctx.arc(this.moon.x, moonY, this.moon.r + 13, 0, Math.PI * 2)
        ctx.strokeStyle = 'rgba(254, 255, 249, 0.3)'
        ctx.stroke()

        const pathToAngle = (360 - ((this.counter / FULL_TIME) * 360) - 90) * DEG_TO_PI
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
      const top = WH / 3
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
    runMid () {
      const top = WH / 2
      if (this.moon.y < top) {
        this.moon.y += 30
        this.moon.r += 5
        this.bgc.r -= 3
        this.bgc.g -= 3
        this.bgc.b -= 3
        window.setTimeout(() => this.runMid(), 1000 / 30)
      } else {
        console.log('end2')
        this.running = false
      }
    },
    runBottom () {
      console.log('bottom')
    }
  },
  watch: {
    status (val) {
      this.running = true
      const statusActionMapping = {
        top: this.runTop,
        mid: this.runMid,
        bottom: this.runBottom
      }
      if (val === 'top') {
        window.clearTimeout(this.countTimer)
        this.counter = FULL_TIME
        this.countdown()
      }
      window.setTimeout(() => statusActionMapping[val](), 1000 / 30)
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
  #blur
    z-index -1
    clip-path circle(75% at 50% 105%)
    &.top
      opacity 0
.time
  font-family 'Verdana'
  font-weight lighter
  position absolute
  z-index -1
  color #2B2B32
  font-size 40px
  top 30%
  left 50%
  transform translate(-50%, -50%)
  opacity 0
  transition opacity .1s

.show
  opacity 1

.focus
  font-family 'no1'
  font-weight bold
  position absolute
  z-index -1
  color #2B2B32
  font-size 40px
  text-shadow 0 24px 12px
  top 45%
  left 50%
  transform translate(-50%, -50%)
  transition .6s
  &.top
    top 23%
    font-size 20px
    transform translate(-50%, -50%)
    text-shadow none
    opacity .7
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
