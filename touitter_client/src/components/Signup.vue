<template>
  <div class="signup_box">
    <a>Email</a>
    <input
      type="text"
      name="signup-email"
      v-model="input.signupemail"
      placeholder="john.doe@example.com"
    />
    <a>Password</a>
    <input type="password" name="signup-password" v-model="input.signUpPassword" />
    <a>Confirm Password</a>
    <input type="password" name="signup-confirm-password" v-model="input.confirmPassword" />
    <button type="button" v-on:click="confirmation">Confirm</button>
  </div>
</template>

<script>
export default {
  name: "Signup",
  props: ["goToSignUp"],
  data() {
    return {
      input: {
        signupemail: "",
        signUpPassword: "",
        confirmPassword: ""
      }
    };
  },
  methods: {
    confirmation: function() {
      if (
        this.input.signupemail !== "" &&
        this.input.signUpPassword !== "" &&
        this.input.confirmPassword !== "" &&
        this.input.signUpPassword === this.input.confirmPassword
      ) {
        alert("Registration completed! Thank you");
        this.goToSignUp();
      } else if (this.input.signUpPassword !== this.input.confirmPassword) {
        alert("Password inserted is wrong. Please type again.");
        this.input.signUpPassword = "";
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
.signup_box {
  display: flex;
  align-items: center;
}
</style>


 