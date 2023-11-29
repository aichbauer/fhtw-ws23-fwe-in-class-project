<template>
  <button @click="$emit(methodType, parseInt(argument))">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    argument: {
      type: Number,
      default: 1,
    },
    methodType: {
      type: String,
      default: 'increase-count-by',
    },
    handleClick: Function,
  }
}
</script>

<style scoped>

</style>