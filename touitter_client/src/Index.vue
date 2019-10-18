<template>
<div>
  <span v-if="!loggedin">
    <div id="login">
      <body>
        <h1>tOUItter</h1>
        <span v-if="signup">
          <div class="login_panel">
            <Login v-bind:goToSignUp="goToSignUp" v-bind:loggingIn="loggingIn" />
          </div>
        </span>
        <span v-if="!signup">
          <Signup v-bind:goToSignUp="goToSignUp" />
        </span>
      </body>
    </div>
  </span>
  <Feed v-if="loggedin" />
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
      loggedin: true
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
    }
  }
};
</script>

<style>
body {
  width: 100%;
}

#login {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.login_panel {
  border: 1px solid black;
  width: 400px;
  text-align: center;
  display: inline-block;
}

h1 {
  color: rgb(0, 100, 200);
}
</style>
<style>
body {
  text-align: center;
  display: inline-block;
  margin: 0px;
}
</style>