<template>
  <div class="feed">
    <Navbar v-bind:changeView="changeView" v-bind:currentView="currentView" />
    <span v-if="currentView==='feed'">
      <MainBoard />
    </span>
    <span v-if="currentView==='user_profile'">
      <UserProfile v-bind:loginData="this.loginData" />
    </span>
  </div>
</template>
<script>
import Navbar from "./Navbar";
import MainBoard from "./MainBoard";
import UserProfile from "./UserProfile";

export default {
  name: "feed",
  data() {
    return {
      currentView: "feed"
    };
  },
  components: {
    Navbar,
    MainBoard,
    UserProfile
  },
  props: ["loginData"],
  methods: {
    changeView: function() {
      this.currentView === "feed"
        ? (this.currentView = "user_profile")
        : (this.currentView = "feed");
    }
  }
};
</script>
<style scoped>
</style>