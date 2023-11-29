<template>
  <Navigation />
  <router-view/>
</template>

<script>
import Navigation from '@/components/molecules/Navigation.vue';

export default {
  name: 'App',
  components: {
    Navigation,
  },
}
</script>

<style>
</style>
