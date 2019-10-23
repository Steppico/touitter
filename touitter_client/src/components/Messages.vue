<template>
  <div class="messages">
    <p v-if="this.messages.length <= 0">No messages here yet. Be the first one!</p>
    <div v-for="message in messages.slice().reverse()" v-bind:key="message.id">
      <div class="card">
        <div class="card_top">
          <img
            class="card_avatar"
            v-on:click="goToUser(message.postedBy)"
            src="../assets/avatar.jpg"
          />
          <div
            class="card_author"
            v-on:click="goToUser(message.postedBy)"
          >{{message.postedBy.username}}</div>
        </div>
        <div class="card_message">
          <div class="card_text">{{message.message}}</div>
        </div>
        <div v-if="message.postedBy.id !== session.id" class="following">
          <a class="follow" v-on:click="followUser(message.postedBy.id)">Follow</a>
          <a class="unfollow" v-on:click="unfollowUser(message.postedBy.id)">Unfollow</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {
  GET_ALL_MESSAGES,
  GET_USER_FOLLOWERS,
  UNFOLLOW_USER,
  FOLLOW_USER
} from "../constants/graphql";
const userAvatar = require("../assets/avatar.jpg");

export default {
  name: "messages",
  data() {
    return {
      messages: [],
      followers: [],
      avatar: userAvatar
    };
  },
  props: ["changeView", "goToUser", "session", "updateFollowers"],
  methods: {
    unfollowUser(followerId) {
      if (!this.followers.includes(followerId))
        return alert("You are already not following this user");
      this.$apollo
        .mutate({
          mutation: UNFOLLOW_USER,
          variables: {
            userId: this.session.id,
            followerId: Number(followerId)
          }
        })
        .then(
          this.followers.splice(this.followers.indexOf(followerId), 1),
          this.updateFollowers(this.followers),
          alert("You have unfollowed this user")
        );
    },

    followUser: function(followerId) {
      if (this.followers.includes(followerId))
        return alert("You are already following this user");
      this.$apollo
        .mutate({
          mutation: FOLLOW_USER,
          variables: {
            userId: this.session.id,
            followerId: Number(followerId)
          }
        })
        .then(
          this.updateFollowers(this.followers.push(followerId)),
          alert("You started following this user")
        );
    },

    populateMessages: function() {
      this.$apollo
        .query({
          query: GET_ALL_MESSAGES
        })
        .then(result =>
          result.data.allMessages.forEach(message =>
            this.messages.push(message)
          )
        );
    },
    populateFollowers: function() {
      this.$apollo
        .query({
          query: GET_USER_FOLLOWERS,
          variables: {
            userId: this.session.id
          }
        })
        .then(
          result =>
            result.data.followerByUserId.forEach(follower => {
              this.followers.push(follower.followerId);
            }),
          this.updateFollowers(this.followers)
        );
    }
  },

  mounted() {
    this.populateFollowers();
    this.populateMessages();
  }
};
</script>
<style>
.card {
  width: 300px;
  word-wrap: break-word;
  background-color: lightblue;
  border: 1px solid lightgrey;
  margin: 5px auto;
}
.following > a {
  padding: 15px;
}
.following > a:hover {
  cursor: pointer;
  color: blue;
  text-decoration: underline;
}
.card_avatar {
  width: 50px;
  border-radius: 50%;
  border: 1px solid lightgrey;
}

.card_avatar:hover {
  box-shadow: 2px 0px 5px rgba(180, 184, 189, 0.9);
  cursor: pointer;
}

.card_author:hover {
  cursor: pointer;
  color: blue;
  text-decoration: underline;
}

.card_message {
  background-color: lightcyan;
  margin: 0 auto;
  margin-bottom: 5px;
  border: 1px solid grey;
  border-radius: 2px;
  width: 90%;
}

.messages {
  margin: 0 auto;
  border: 1px solid lightgrey;
  border-radius: 3px;
  width: 100%;
}
</style>