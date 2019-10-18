<template>
  <div>
    <h3 class="login-title">login</h3>
    <input type="text" name="email" v-model="input.email" placeholder="email" />
    <input type="password" name="password" v-model="input.password" />
    <button type="button" v-on:click="login()">Login</button>
    <div class="not-a-member">
      <a>Not a member?</a>
      <a class="signup_click" v-on:click="goToSignUp">Sign up</a>
    </div>
  </div>
</template>
<script>
import { SIGNIN_USER } from "../constants/graphql";

export default {
  name: "login",
  data() {
    return {
      input: {
        email: "",
        password: ""
      }
    };
  },
  props: ["goToSignUp", "loggingIn"],
  methods: {
    login() {
      if (this.input.email.length <= 0 || this.input.password.length <= 0) {
        alert("Please insert your credentials");
      } else {
        try {
          this.$apollo
            .mutate({
              mutation: SIGNIN_USER,
              variables: {
                email: this.input.email,
                password: this.input.password
              }
            })
            .then(result => {
              if (result.data.signInUser !== null) {
                alert("welcome!");
                this.loggingIn();
              } else {
                alert("login failed");
                this.input.password = "";
              }
            });
        } catch (e) {
          alert(`Error while logging in ${e}`);
        }
      }
    }
  }
};
</script>
<style scoped>
.signup_click:hover {
  cursor: pointer;
  color: blue;
}
.login-title {
  color: rgb(0, 170, 239);
  text-shadow: -0.6px 0 black, 0 0.6px black, 0 -0.6px black, 0.6px 0 black;
  font-size: 24px;
}

.not-a-member {
  margin-top: 10px;
  font-size: 12px;
}

input {
  margin: 5px;
}

button {
  margin: 0 auto;
  display: inline-block;
}
</style>