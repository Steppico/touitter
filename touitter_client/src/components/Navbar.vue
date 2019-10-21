<template>
  <div class="navbar">
    <h2 class="touitter_title" v-on:click="changeView('feed')">tOUItter</h2>
    <!-- <a class="my_followers" v-on:click="changeView('followers')">My Followers</a> -->
    <a
      v-if="currentView!=='user_profile'"
      class="user_profile"
      v-on:click="changeView('user_profile')"
    >My Profile</a>
    <a v-if="currentView==='user_profile'" class="user_profile" v-on:click="changeView('feed')">Feed</a>
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

.my_followers:hover {
  cursor: pointer;
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