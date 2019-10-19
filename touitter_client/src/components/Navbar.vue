<template>
  <div class="Navbar">
    <h2>Feed(navbar)</h2>
    <span v-if="currentView!=='user_profile'">
      <a class="UserProfile" v-on:click="changeView()">My Profile</a>
    </span>
    <span v-if="currentView==='user_profile'">
      <a class="UserProfile" v-on:click="changeView()">Feed</a>
    </span>
  </div>
</template>
<script>
export default {
  name: "navbar",
  data() {
    return {};
  },
  props: ["changeView", "currentView"]
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