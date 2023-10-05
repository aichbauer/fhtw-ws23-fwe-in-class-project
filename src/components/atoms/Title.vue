<template>
  <component :is="type">
    <slot></slot>
  </component>
</template>

<script>
export default {
  name: 'Title',
  props: {
    type: String,
  },
}
</script>

<style scoped>

</style>