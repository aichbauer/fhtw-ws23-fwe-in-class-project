<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/login">Login</router-link>
    <div v-if="this.store.isLoggedIn">{{ this.store.username }}</div>
  </nav>
</template>

<script>
import { useUserStore } from '@/pinia-store/user';

export default {
  name: 'Navigation',
  data() {
    return ({
      store: useUserStore(),
    });
  },
  mounted: async function () {
    console.log('mounted navigation');
    console.log(this.store);
  },
}
</script>