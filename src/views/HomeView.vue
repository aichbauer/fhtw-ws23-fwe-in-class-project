<template>
  <div class="home">
    <Hero
      title="Some Heading IKEA..."
      text="Some Text IKEA..."
      backgroundColor="yellow"
    />
    <Hero
      title="Some different Heading IKEA..."
      text="Some different Text IKEA..."
      backgroundColor="blue"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import Hero from '@/components/molecules/Hero.vue'

export default {
  name: 'HomeView',
  components: {
    Hero,
  },
  methods: {
    buttonClick() {
      console.log('Hello World');
    }
  }
}
</script>
