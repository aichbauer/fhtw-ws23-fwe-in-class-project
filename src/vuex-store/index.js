import { createStore } from 'vuex';

// Create a new store instance.
const store = createStore({
  state () {
    return {
      count: 0
    }
  },
  mutations: {
    increment (state, payload) {
      console.log('mutation increment')
      console.log('state', state)
      console.log('payload', payload)
      state.count += payload.interval || 1;
    }
  },
  actions: {
    increment (context, payload) {
      console.log('action increment')
      console.log('context', context)
      console.log('payload', payload)
      context.commit('increment', payload)
    }
  }
});

export default store;