<template>
  <div class="feed">
    <Navbar v-bind:changeView="changeView" />
    <span v-if="currentView==='feed'">
      <MainBoard />
    </span>
    <span v-if="currentView==='user_profile'">
      <UserProfile />
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