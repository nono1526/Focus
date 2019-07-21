<template>
  <button
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'f-btn',
  props: {

  }
}
</script>

<style lang="stylus" scoped>

</style>
