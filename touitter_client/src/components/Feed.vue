<template>
  <div class="feed">
    <Navbar v-bind:changeView="changeView" v-bind:currentView="currentView" />
    <OtherUser v-if="currentView==='otherUser'" v-bind:otherUser="otherUser" />
    <MainBoard
      v-if="currentView==='feed'"
      v-bind:loginData="this.loginData"
      v-bind:changeView="changeView"
      v-bind:goToUser="goToUser"
    />
    <UserProfile
      v-if="currentView==='user_profile'"
      v-bind:loginData="this.loginData"
      v-bind:updateLoginData="updateLoginData"
    />
  </div>
</template>
<script>
import Navbar from "./Navbar";
import MainBoard from "./MainBoard";
import UserProfile from "./UserProfile";
import OtherUser from "./OtherUser";

export default {
  name: "feed",
  data() {
    return {
      currentView: "feed",
      otherUser: null
    };
  },
  components: {
    Navbar,
    MainBoard,
    UserProfile,
    OtherUser
  },
  props: ["loginData", "updateLoginData"],
  methods: {
    goToUser: function(other) {
      this.otherUser = other;
      this.changeView("otherUser");
    },
    changeView: function(view) {
      this.currentView = view;
    }
  }
};
</script>
<style scoped>
</style>