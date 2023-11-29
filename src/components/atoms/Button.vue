<template>
  <button @click="$emit('increaseCountBy', 1)">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    handleClick: Function,
  }
}
</script>

<style scoped>

</style>