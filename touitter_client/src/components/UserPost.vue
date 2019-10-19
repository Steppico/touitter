<template>
  <div class="UserPost">
    <input class="user-input" type="text" placeholder="What are you thinking?" maxlength="140" />
    <button class="user-input-button" type="button">Share</button>
  </div>
</template>
<script>
export default {
  name: "userpost",
  data() {
    return {};
  },
  components: {}
};
</script>
<style scoped>
.user-input {
  border: none;
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