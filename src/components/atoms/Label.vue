<template>
  <label :for="htmlFor">
    <slot></slot>
  </label>
</template>

<script>
export default {
  name: 'Label',
  props: {
    htmlFor: String,
  }
}
</script>

<style scoped>

</style>