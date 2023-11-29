<template>
  <div class="home">
    <!-- iterate over all posts from data, we need a key -->
    <!-- we need a key (this is for rerendering, to verify uniqueness) -->
    <!-- we use the post.id for this -->
    <div v-bind:class="this.hello">
      {{ this.hello }}
    </div>
    <Button
      argument="1"
      methodType="increaseCountBy"
      @decrease-count-by="decreaseCount"
      @increase-count-by="increaseCount"
    >
      Decrease Count
    </Button>
    <div>
      Vuex
      {{ this.$store.state.count }}
    </div>
    <button @click="this.$store.dispatch('increment', { interval: 2 })">
      Increment
    </button>
    <div>
      Pinia
      {{ this.store.count }}
    </div>
    <button @click="this.store.increment">
      Increment
    </button>
    <div>
      Pinia
      {{ this.storePlus.count }}
    </div>
    <button @click="this.storePlus.increment({ interval: 2 })">
      Increment
    </button>
    <div v-for="post in posts" v-bind:key="post.id">
      <ul>
        <li>
          <!-- we display the post.title -->
          <!-- we create a href for our link to /posts/:id where :id will be replaced by post.id -->
          <!-- the link can only be a string so we need to convert the id to a string -->
          <!-- we use the name of the route that we defined in the router -->
          <router-link @mouseenter="displayXY" :to="{ name: 'post', params: { id: post.id.toString() } }">{{ post.title }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios';
import Button from '@/components/atoms/Button.vue';
import { useCounterStore } from '@/pinia-store';
import useCounterStorePlus from '@/pinia-store/counter';

// async function fetchDataPromise() {
//   // call the url (default is a get request)
//   return fetch('https://jsonplaceholder.typicode.com/posts/')
//     // when the call is successful
//     .then(async (response) => {
//       // get the data
//       const data = await response.json();
//       console.log(data);
//       return data;
//     })
//     // whenthere is a error
//     .catch(function (error) {
//       // handle error
//       console.log(error);
//     });
// }


// async function fetchDataAxiosPromise() {
//   // axios call the url as get request. if we want to make a post reuest use the porst method etc...
//   return axios.get('https://jsonplaceholder.typicode.com/posts/')
//     .then((response) => {
//       // handle the success
//       console.log(response.data);
//       return response.data;
//     })
//     .catch(function (error) {
//       // handle error
//       console.log(error);
//     });
// }


// when using async await we need to use the asny keyword in the function
// async function fetchDataTryCatch() {
//   try {
//     // call the url with and await the result
//     // we need to use try catch to handle the errors
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts/', {
//       // if we want to make a POST request change the method
//       method: 'GET',
//     });
//     if (response.status !== 200) {
//       console.error('Not Status 200');
//       return;
//     }

//     return response.json();
//   } catch(err) {
//     console.error('Not Status 200', err);
//   }
// }

async function fetchDataAxios() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/');

    if (response.status !== 200) {
      console.log('ERROR');
      return;
    }

    return response.data;
  } catch(err) {
    console.log(err);
  }
}

export default {
  name: 'HomeView',
  data() {
    return {
      store: useCounterStore(),
      storePlus: useCounterStorePlus(),
      posts: [],
      hello: 'Hello World',
      count: 0,
    };
  },
  beforeCreate: async function () {
    const posts = await fetchDataAxios();
    this.posts = posts;
    console.log('this.$store')
    console.log(this.$store)
    console.log('this.store')
    console.log(this.store)
    console.log('this.storeplus')
    console.log(this.storeplus)
  },
  components: {
    Button,
  },
  methods: {
    buttonClick(text) {
      console.log(text);
    },
    increaseCount(n) {
      this.count += n;
      console.log(this.count);
    },
    decreaseCount(n) {
      this.count -= n;
      console.log(this.count);
    },
    displayXY(event) {
      console.log('event', event);
      console.log('event.target', event.target);
      console.log('event.target.tagName', event.target.tagName);
      console.log('x: ', event.clientX, 'y: ', event.clientY);
    },
  }
}
</script>
