<template>
  <div class="feed">
    <Navbar v-bind:changeView="changeView" v-bind:currentView="currentView" />
    <OtherUser v-if="currentView==='otherUser'" v-bind:otherUser="otherUser" />
    <!-- <MyFollowed v-if="currentView==='followers'" v-bind:loginData="this.loginData" /> -->
    <MainBoard
      v-if="currentView==='feed'"
      v-bind:updateFollowers="this.updateFollowers"
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
// import MyFollowed from "./MyFollowed";

export default {
  name: "feed",
  data() {
    return {
      currentView: "feed",
      otherUser: null,
      followers: null
    };
  },
  components: {
    Navbar,
    MainBoard,
    UserProfile,
    OtherUser
    // MyFollowed
  },
  props: ["loginData", "updateLoginData"],
  methods: {
    updateFollowers: function(followers) {
      this.followers = followers;
    },

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