<template>
  <div class="main-board">
    <UserPost v-bind:loginData="this.loginData" />
    <Messages v-bind:changeView="changeView" v-bind:goToUser="goToUser" />
  </div>
</template>
<script>
import UserPost from "./UserPost";
import Messages from "./Messages";

export default {
  name: "mainboard",
  data() {
    return {};
  },
  props: ["loginData", "changeView", "goToUser"],
  components: {
    UserPost,
    Messages
  }
};
</script>
<style scoped>
.main-board {
  margin: 0 auto;
  width: 90%;
}
</style>