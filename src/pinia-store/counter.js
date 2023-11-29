import { defineStore } from 'pinia';

// Create a new store instance.
const store = defineStore('counterplus', {
  state () {
    return {
      count: 0
    }
  },
  actions: {
    increment (payload) {
      console.log('actions increment')
      console.log('this', this)
      console.log('payload', payload)
      this.count += payload.interval || 1;
    }
  },
});

export default store;