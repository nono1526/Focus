<template>
  <div id="app" :class="actionClass">
    <main-background
      :status="status"
      :visible="isEdit"
      :remainTime="counter"
    ></main-background>
    <div class="top-space "
      :class="actionClass"
    >
      <button :class="actionClass" class="back" v-show="isEdit" @click="isEdit = false">
        <img src="@/assets/left-arrow.svg"> Back
      </button>
      <h2 v-show="status === 'mid' && !isEdit" class="title">Start to focus</h2>
    </div>
    <ul class="todos " :class="actionClass">
      <li class="todos__tile"  @click="item.done = !item.done" v-for="(item, key) in todos" :key="key">
        <div class="tile__btn" :class="{active: item.done}"></div>
        <div class="tile__text">{{ item.text }}</div>
      </li>
    </ul>
    <div class="toolbar " :class="actionClass">
      <div class="toolbar__actions actions--main" v-show="!isPause && !isEdit">
        <img class="action__btn" src="@/assets/add.svg" v-show="isWaiting" @click="isEdit = true">
        <img class="action__btn" src="@/assets/pause.svg" v-show="!isWaiting" @click="togglePause">
        <img class="action__btn" src="@/assets/play.svg" v-show="isWaiting" @click="startTask" >
        <img class="action__btn" src="@/assets/Settings.svg" v-show="isWaiting">
      </div>
      <div class="toolbar__actions actions--pause" v-show="isPause && !isEdit">
        <f-btn @click="togglePause">Coutinue</f-btn>
        <f-btn @click="stop">Quit</f-btn>
      </div>
      <div class="toolbar__actions actions--edit" v-show="isEdit">
        <input v-model="newTask" class="edit__textfield" type="text" placeHolder="Let's get things done" @keydown.enter="addTask">
        <img src="@/assets/add.svg" class="add__task" @click="addTask">
      </div>
    </div>
  </div>
</template>

<script>
import MainBackground from '@/components/MainBackground.vue'
import FBtn from '@/components/FBtn.vue'
const MINUTE = 60 * 1000
const STATUS_WAITING = 'mid'
const STATUS_FOCUS = 'top'
const STATUS_BREATH = 'bottom'

export default {
  components: {
    MainBackground,
    FBtn
  },
  data () {
    return {
      newTask: '',
      isEdit: false,
      focusTime: 1000,
      breathTime: 5000,
      status: 'mid',
      counter: 25 * MINUTE,
      todos: [{
        text: '棒式', done: false
      }, {
        text: '側棒式', done: true
      }, {
        text: '側棒式', done: false
      }],
      countTimer: null,
      isPause: false
    }
  },
  computed: {
    isWaiting () {
      return this.status === STATUS_WAITING
    },
    actionClass () {
      return {
        mid: this.status === 'mid',
        top: this.status === 'top',
        bottom: this.status === 'bottom',
        edit: this.isEdit
      }
    }
  },
  methods: {
    addTask () {
      this.todos.push({
        text: this.newTask,
        done: false
      })
      this.newTask = ''
    },
    stop () {
      this.status = STATUS_WAITING
      window.clearTimeout(this.countTimer)
      this.counter = this.focusTime
      this.isPause = !this.isPause
    },
    countdown () {
      this.countTimer = window.setTimeout(() => {
        this.counter -= 1000
        if (this.counter > 0) {
          this.countdown()
        } else {
          this.nextStatus()
        }
      }, 1000)
    },
    nextStatus () {
      if (this.status === STATUS_FOCUS) {
        this.status = STATUS_BREATH
        this.counter = this.breathTime
        this.countdown()
      } else {
        this.status = STATUS_WAITING
        this.counter = this.focusTime
      }
    },
    startTask () {
      if (this.status === STATUS_WAITING) {
        this.counter = this.focusTime
        this.status = STATUS_FOCUS
        this.countdown()
      }
    },
    togglePause () {
      if (this.isPause) {
        this.countdown()
      } else {
        window.clearTimeout(this.countTimer)
      }
      this.isPause = !this.isPause
    }
  }
}
</script>

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
  font-family 'Noto Sans TC', 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  display flex
  flex-direction column
  height 100%
  &.mid
    background-image linear-gradient(rgba(#fff, 0.01), rgba(#fff, 0.01))
  &.top
    background-image linear-gradient(rgba(#fff, 0.001), rgba(#fff, 0.1))
.top-space
  transition 1s
  flex 10
  padding 5px 20px
  &.edit
    flex 40px
    flex-grow 0
.title
  font-weight bolder
  letter-spacing 1px
  color #FEFFF9
  transition 1s
  margin 10px
.back
  margin-top 10px
  transition 1s
  display flex
  align-items center
  color #FEFFF9
  background-color transparent
  border none
  outline none
.todos
  transition flex 1s
  &.mid
    flex 5
  &.top
    flex 9
  &.bottom
    flex 0
    opacity 0
  list-style none
  padding 0
  margin 0
  max-height 100%
  overflow auto
  .todos__tile
    min-height 44px
    background-color rgba(#fff, 0.03)
    display flex
    margin 2px 0
    align-items center
    transition .3s
    &:hover
      background-color rgba(#fff, 0.1)
      .tile__btn
        border 1px solid rgba(#fff, 0.8)
      .tile__text
        color rgba(#fff, 0.8)
    .tile__btn
      margin 0 10px
      height 20px
      width 20px
      border-radius 50%
      background-color transparent
      border 1px solid rgba(#fff, 0.28)
      position relative
      &::before
        content: ''
        position absolute
        display block
        top 50%
        left 50%
        transform translate(-50%, -50%)
        width 15px
        height 15px
        border-radius 50%
        background-color rgba(#fff, 0.8)
        opacity 0
        transition .5s
      &.active
        &::before
          opacity 1
    .tile__text
      color rgba(#fff, 0.28)
.toolbar
  min-height 80px
  .toolbar__actions
    display flex
    justify-content center
    align-items center
    height 100%
    .action__btn
      margin auto 30px
   .edit__textfield
      flex 1
      margin-left: 15px
      min-height 30px
      background-color transparent
      border-radius 30px
      border 2px solid rgba(255,255,255, 0.5)
      font-size 18px
      padding 3px 20px
      outline none
      color rgba(255,255,255, 0.7)
    .add__task
      margin auto 15px
</style>
