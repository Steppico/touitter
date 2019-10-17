<template>
<div id="login">
  <body>
    <h1>tOUItter</h1>
    <span v-if="signup">
      <div class="login_panel">
        <h3>Login</h3>
        <input type="text" name="email" v-model="input.email" placeholder="email" />
        <input type="password" name="password" v-model="input.password" />
        <button type="button" v-on:click="login()">Login</button>
        <a>Not a member?</a>
        <a class="signup_click" v-on:click="goToSignUp" v-on="hover">Sign up</a>
      </div>
    </span>
    <span v-if="!signup">
      <Signup v-bind:goToSignUp="goToSignUp" />
    </span>
  </body>
</div>
</template>

<script>
// import axios from "axios";
import Signup from "./components/Signup";

export default {
  name: "login",
  data() {
    return {
      input: {
        email: "",
        password: ""
      },
      count: 0,
      signup: true
    };
  },

  components: {
    Signup
  },
  methods: {
    async login() {
      // try {
      //   await axios({
      //     method: "post",
      //     url: "http://localhost:3000/graphql",
      //     data: {
      //       query: `{
      //         userLogin(email:"admin") {
      //           email
      //         }
      //       }`
      //     },
      //     headers: {
      //       "Access-Control-Allow-Origin": "http://localhost:3000"
      //     }
      //   }).then(result => alert(`miamamma, ${result}`));
      // } catch (error) {
      //   alert(`Errore! ${error}`);
      // }
    },
    goToSignUp: function() {
      this.signup = !this.signup;
    }
  }
};
</script>

<style scoped>
#login {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.login_panel {
  border: 1px solid black;
  width: 400px;
  text-align: center;
  display: inline-block;
}

.signup_click:hover {
  cursor: pointer;
  color: blue;
}

h1 {
  color: rgb(0, 100, 200);
}
</style>
<style>
body {
  text-align: center;
  display: inline-block;
}
</style>