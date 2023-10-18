<template>
  <div class="login">
    <h1>Login</h1>
    <!-- call the submit function when clicking enter or wehn clicking the button -->
    <!-- the button needs to be a type submit -->
    <form
      @submit.prevent="submit"
    >
      <div>
        <div>
          <label for="email">Email</label>
        </div>
        <!-- v-model: for sync of data form.values.email - see data object -->
        <!-- @blur: when blur occurs call the method validate with 'email' -->
        <div>
          <input type="email" id="email" v-model="form.values.email" @blur="validate('email')" />
        </div>
        <!-- v-if: when form.errors.email is not empty display the message -->
        <p v-if="!!form.errors.email">
          {{ form.errors.email }}
        </p>
      </div>
      <div>
        <div>
          <label for="password">Password</label>
        </div>
        <!-- v-model: for sync of data form.values.password - see data object -->
        <!-- @blur: when blur occurs call the method validate with 'password'  -->
        <div>
          <input type="password" id="password" v-model="form.values.password" @blur="validate('password')" />
        </div>
        <p v-if="!!form.errors.password">
          {{ form.errors.password }}
        </p>
      </div>
      <div>
        <!-- the button needs to be a type submit to call the submit function on the form -->
        <button type="submit">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
import { object, string } from 'yup';

const loginSchema = object().shape({
  email: string().required().email(),
  password: string().required(),
});

export default {
  name: 'LoginView',
  data() {
    return {
      form: {
        values: {
          email: '',
          password: '',
        },
        errors: {
          email: '',
          password: '',
        },
      },
    };
  },
  methods: {
    // field => 'email' or 'password'
    validate(field){
      // promise format
      // validate the field (email or password) form the data (this.form.values)
      loginSchema
        .validateAt(field, this.form.values)
        .then(() => {
          // if everything works
          // remove all errors from the field (this.form.errors['email' or 'password'])
          this.form.errors[field] = '';
        }).catch((err) => {
          console.log(err);
          // if error
          // add the error message from the field (this.form.errors['email' or 'password'])
          // this will be displayed in the form under the input see v-if
          this.form.errors[field] = err.message;
        });
    },
    async submit() {
        // => { email: '', password: '' }
        loginSchema
          .validate(this.form.values, {
            abortEarly: false,
          }).then(async () => {
            // if valid
            // reset errors
            this.form.errors = {
              email: '',
              password: '',
            };

            // make a post request to the server with the json from this.form.values
            const response = await fetch('/login', {
              method: 'POST',
              body: JSON.stringify(this.form.values),
            });
            // get the response from the server
            const data = await response.json();

            // get the token from the data from the server
            const token = data.accessToken;
            // save the token in the browser for reuse
            // e.g. for making requests to the servers private reqources
            // e.g. update user, delete user...
            // persisted after browser window is closed
            localStorage.setItem('token', token);
            // removed after browser window ist closed
            // sessionStorage.setItem('token', token);
            // JWT - JSON Web Token
            // token => "y.x.z"
            // y => header -> base64 of the following { alg: "",  }
            // x => payload -> where the data is stored
            // z => signature -> is encrypted version of the header and payload
          }).catch((err) => {
            console.log('err sddf');
            console.log(err);
            // if error
            if (err.inner) {
              // set errormessage
              err.inner.forEach((error) => {
                this.form.errors[error.path] = error.message;
              });
            }
          });
    }
  }
}
</script>
