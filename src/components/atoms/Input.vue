<template>
  <input class="input" :id="id" :type="type" :value="value" :placeholder="placeholder">
</template>

<script>
export default {
  name: 'Label',
  props: {
    id: String,
    type: String,
    value: String,
    placeholder: String,
  }
}
</script>

<style scoped>
.input {
  margin: 10px;
}
</style>