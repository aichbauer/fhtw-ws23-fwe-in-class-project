import { defineStore } from 'pinia';

// Create a new store instance.
export const useUserStore = defineStore('user', {
  state () {
    return {
      email: '',
      username: '',
    }
  },
  getters: {
    isLoggedIn () {
      return this.email !== '' && this.username !== '';
    },
  },
  actions: {
    login (payload) {
      this.email = payload.email;
      this.username = 'User-' + payload.email.split('@')[0];
    },
  },
});
