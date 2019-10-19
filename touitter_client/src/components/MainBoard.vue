<template>
  <div class="main-board">
    <a>mainboard</a>
    <UserPost />
    <Messages />
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