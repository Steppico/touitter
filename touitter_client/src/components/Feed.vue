<template>
  <div class="feed">
    <Navbar v-bind:changeView="changeView" v-bind:currentView="currentView" />
    <OtherUser v-if="currentView==='otherUser'" v-bind:otherUser="otherUser" />
    <!-- <MyFollowed v-if="currentView==='followers'" v-bind:loginData="this.loginData" /> -->
    <MainBoard
      v-if="currentView==='feed'"
      v-bind:updateFollowers="this.updateFollowers"
      v-bind:session="this.session"
      v-bind:changeView="changeView"
      v-bind:goToUser="goToUser"
    />
    <UserProfile
      v-if="currentView==='user_profile'"
      v-bind:session="this.session"
      v-bind:updateSession="updateSession"
    />
  </div>
</template>
<script>
import Navbar from "./Navbar";
import MainBoard from "./MainBoard";
import UserProfile from "./UserProfile";
import OtherUser from "./OtherUser";
// import MyFollowed from "./MyFollowed";
import { USER_LOGIN } from "../constants/graphql";

export default {
  name: "feed",
  data() {
    return {
      currentView: "feed",
      otherUser: null,
      followers: null,
      session: {
        email: this.loginData.email,
        id: "",
        username: "",
        bio: ""
      }
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
    fetchUserInfo: function() {
      this.$apollo
        .query({
          query: USER_LOGIN,
          variables: {
            email: this.session.email
          }
        })
        .then(result => {
          this.session.id = result.data.userLogin.id;
          this.session.username = result.data.userLogin.username;
          this.session.bio = result.data.userLogin.bio;
        });
    },

    updateFollowers: function(followers) {
      this.followers = followers;
    },

    goToUser: function(other) {
      this.otherUser = other;
      this.changeView("otherUser");
    },
    changeView: function(view) {
      this.currentView = view;
    },
    updateSession(id, username, bio) {
      this.session.id = id;
      this.session.username = username;
      this.session.bio = bio;
    }
  },
  mounted() {
    this.fetchUserInfo();
  }
};
</script>
<style scoped>
</style>