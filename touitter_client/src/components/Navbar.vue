<template>
  <div class="navbar">
    <h2 class="touitter_title" v-on:click="changeView('feed')">tOUItter</h2>
    <span v-if="currentView!=='user_profile'">
      <a class="user_profile" v-on:click="changeView('user_profile')">My Profile</a>
    </span>
    <span v-if="currentView==='user_profile'">
      <a class="user_profile" v-on:click="changeView('feed')">Feed</a>
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
.navbar {
  background-color: rgb(0, 170, 239);
  color: white;
}

.touitter_title {
  margin: 0 auto;
}

.user_profile {
  margin-left: 75%;
}

.user_profile:hover {
  cursor: pointer;
}
</style>