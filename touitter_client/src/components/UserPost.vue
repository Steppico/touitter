<template>
  <div class="UserPost">
    <textarea
      class="user-input"
      type="text"
      placeholder="What are you thinking?"
      maxlength="140"
      v-model="input.text"
    />
    <button class="user-input-button" type="button" v-on:click="sharePost">Share</button>
  </div>
</template>
<script>
import { SHARE_POST } from "../constants/graphql";
export default {
  name: "userpost",
  data() {
    return {
      input: {
        text: ""
      }
    };
  },
  props: ["loginData"],
  methods: {
    sharePost: function() {
      this.$apollo
        .mutate({
          mutation: SHARE_POST,
          variables: {
            id: this.loginData.id,
            message: this.input.text
          }
        })
        .then(result => alert(JSON.stringify(result)));
    }
  }
};
</script>
<style scoped>
.user-input {
  border-color: lightgrey;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  resize: none;
  border-radius: 3px;
  width: 30%;
  height: 60px;
}

.user-input-button {
  border: none;
  height: 60px;
}
.UserPost {
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>