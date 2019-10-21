<template>
  <div class="messages">
    <p v-if="this.messages.length <= 0">No messages here yet. Be the first one!</p>
    <div v-for="message in messages.slice().reverse()" v-bind:key="message.id">
      <div class="board_message">
        <div
          class="board_message_author"
          v-on:click="goToUser(message.postedBy)"
        >{{message.postedBy.username}}</div>
        <div class="board_message_text">{{message.message}}</div>
        <img
          class="board_message_avatar"
          v-on:click="goToUser(message.postedBy)"
          src="../assets/avatar.jpg"
        />
        <!-- <a v-if="follower">Unfollow</a> -->
        <!-- <a v-if="!follower">Follow</a> -->
      </div>
    </div>
  </div>
</template>
<script>
import { GET_ALL_MESSAGES } from "../constants/graphql";
const userAvatar = require("../assets/avatar.jpg");

export default {
  name: "messages",
  data() {
    return {
      messages: [],
      avatar: userAvatar
    };
  },
  props: ["changeView", "goToUser"],
  methods: {
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
    }
  },

  mounted() {
    this.populateMessages();
  }
};
</script>
<style>
.board_message {
  width: 300px;
  word-wrap: break-word;
  background-color: aqua;
  margin: 5px auto;
}

.board_message_avatar {
  width: 50px;
  border-radius: 50%;
  border: 1px solid lightgrey;
}

.board_message_avatar:hover {
  box-shadow: 2px 0px 5px rgba(180, 184, 189, 0.9);
  cursor: pointer;
}

.board_message_author:hover {
  cursor: pointer;
  color: blue;
  text-decoration: underline;
}

.messages {
  margin: 0 auto;
  border: 1px solid lightgrey;
  border-radius: 3px;
  width: 100%;
}
</style>