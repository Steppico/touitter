<template>
<div>
  <router-view v-if="this.$route.query.token" />
  <span v-if="!this.$route.query.token">
    <div v-if="!loggedin" id="login">
      <body>
        <h1 v-on:click="goToSignUp">tOUItter</h1>
        <div v-if="signup" class="login_panel">
          <Login
            v-bind:goToSignUp="goToSignUp"
            v-bind:loggingIn="loggingIn"
            v-bind:updateLoginData="updateLoginData"
          />
        </div>
        <span v-if="!signup">
          <Signup v-bind:goToSignUp="goToSignUp" />
        </span>
      </body>
    </div>
  </span>
  <!-- </span> -->
  <Feed v-if="loggedin" v-bind:loginData="this.loginData" v-bind:updateLoginData="updateLoginData" />
</div>
</template>

<script>
// import axios from "axios";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Feed from "./components/Feed";

export default {
  name: "index",
  data() {
    return {
      signup: true,
      loggedin: false,
      loginData: {
        id: "",
        username: "",
        bio: "",
        followers: []
      }
    };
  },

  components: {
    Login,
    Signup,
    Feed
  },
  methods: {
    goToSignUp: function() {
      this.signup = !this.signup;
    },
    loggingIn: function() {
      this.loggedin = true;
    },
    updateLoginData(id, username, bio) {
      this.loginData.id = id;
      this.loginData.username = username;
      this.loginData.bio = bio;
    }
  }
};
</script>
<style>
body {
  text-align: center;
  display: inline-block;
  margin: 0px;
  width: 100%;
  height: 100vh;
}

#login {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.login_panel {
  background-color: white;
  border: 1px solid black;
  border-radius: 30px;
  display: inline-block;
  padding-bottom: 5px;
  text-align: center;
  width: 400px;
}

h1 {
  color: rgb(0, 170, 239);
  font-size: 50px;
}
</style>
