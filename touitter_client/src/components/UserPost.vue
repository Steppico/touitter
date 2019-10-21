<template>
  <div class="UserPost">
    <textarea
      class="user-input"
      type="text"
      placeholder="What are you thinking?"
      maxlength="140"
      v-model="input.text"
    />
    <div>
      <button class="user-input-button" type="button" v-on:click="sharePost">Share</button>
    </div>
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
      if (this.input.text.length <= 0) return alert("Write something");
      this.$apollo.mutate({
        mutation: SHARE_POST,
        variables: {
          id: this.loginData.id,
          message: this.input.text
        }
      });
      this.input.text = "";
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
  width: 30.5%;
  height: 25px;
}
.UserPost {
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>