<template>
  <div class="main-board">
    <UserPost v-bind:session="this.session" />
    <Messages
      v-bind:session="this.session"
      v-bind:changeView="changeView"
      v-bind:goToUser="goToUser"
      v-bind:updateFollowers="updateFollowers"
    />
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
  props: ["session", "changeView", "goToUser", "updateFollowers"],
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