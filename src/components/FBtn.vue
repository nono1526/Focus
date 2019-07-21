<template>
  <button
    v-bind="$attrs"
    v-on="$listeners"
    class="f-btn"
    :class="{outline}"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'f-btn',
  props: {
    outline: Boolean
  }
}
</script>

<style lang="stylus" scoped>
.f-btn
  border-radius 30px
  border 2px solid #FEFFF2
  background-color #FEFFF2
  min-height 40px
  padding 0 20px
  font-weight bolder
  display flex
  justify-content center
  align-items center
  &.outline
    background-color transparent
    color rgba(#FEFFF2, 0.7)
    border 2px solid rgba(#FEFFF2, 0.7)
</style>
