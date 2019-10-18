<template>
  <div class="Navbar">
    <h2>Feed(navbar)</h2>
    <a class="UserProfile" v-on:click="changeView()">User Profile</a>
  </div>
</template>
<script>
export default {
  name: "navbar",
  data() {},
  props: ["changeView"]
};
</script>
<style scoped>
.Navbar {
  background-color: rgb(0, 170, 239);
  color: white;
}

.UserProfile {
  margin-left: 75%;
}

.UserProfile:hover {
  cursor: pointer;
}
</style>