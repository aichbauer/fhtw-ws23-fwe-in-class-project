<template>
  <div :class="backgroundColor" class="hero">
    <Title type="h2">{{ title }}</Title>
    <Paragraph>{{ text }}</Paragraph>
  </div>
</template>

<script>
import Paragraph from '../atoms/Paragraph.vue';
import Title from '../atoms/Title.vue';

  export default {
    name: 'HeroComponent',
    props: {
        title: String,
        text: String,
        backgroundColor: String,
    },
    components: {
    Title,
    Paragraph,
  },
};
</script>

<style scoped>
.yellow {
  background-color: #F9C70C;
}
.blue {
  background-color: #2c6fbb;
}
.hero {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem 2rem;
}
</style>

