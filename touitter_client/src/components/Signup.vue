<template>
  <div class="signup_box">
    <a>Username</a>
    <input type="text" name="signup-username" v-model="input.username" placeholder="john_doe" />
    <a>Email</a>
    <input type="text" name="signup-email" v-model="input.email" placeholder="john.doe@example.com" />
    <a>Password</a>
    <input type="password" name="signup-password" v-model="input.password" />
    <a>Confirm Password</a>
    <input type="password" name="signup-confirm-password" v-model="input.confirmPassword" />
    <button type="button" v-on:click="confirmation">Confirm</button>
  </div>
</template>

<script>
import { SIGN_UP_MUTATION } from "../constants/graphql";

export default {
  name: "Signup",
  props: ["goToSignUp"],
  data() {
    return {
      input: {
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
      }
    };
  },
  methods: {
    confirmation: function() {
      if (
        this.input.email !== "" &&
        this.input.password !== "" &&
        this.input.confirmPassword !== "" &&
        this.input.password === this.input.confirmPassword
      ) {
        try {
          this.$apollo
            .mutate({
              mutation: SIGN_UP_MUTATION,
              variables: {
                username: this.input.username,
                email: this.input.email,
                password: this.input.password
              }
            })
            .then(result =>
              alert(
                `Thank you, ${result.data.createUser.username}! We have sent you an email. Please confirm.`
              )
            );
          this.goToSignUp();
        } catch (e) {
          alert(`apollo error: ${e}`);
        }
      } else if (this.input.password !== this.input.confirmPassword) {
        alert("Password inserted is wrong. Please type again.");
        this.input.password = "";
        this.input.confirmPassword = "";
      } else {
        alert("Please complete the form");
      }
    }
  }
};
</script>

<style scoped>
a {
  padding-left: 10px;
  padding-right: 10px;
}

input {
  padding: 14px 20px;
  font-size: 18px;
  margin-bottom: 14px;
}

.signup_box {
  display: flex;
  align-items: center;
}
</style>


 