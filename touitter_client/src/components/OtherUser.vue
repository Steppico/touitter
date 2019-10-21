<template>
  <div>
    <div class="user_info">
      <h1>{{username}}</h1>
      <p>{{bio}}</p>
    </div>
    <div class="user_messages">
      <div v-for="message in messages.slice().reverse()" v-bind:key="message.id">
        <div class="board_message">
          <div class="board_message_author">{{message.postedBy.username}}</div>
          <div class="board_message_text">{{message.message}}</div>
          <img
            class="board_message_avatar"
            v-on:click="goToUser(message.postedBy)"
            src="../assets/avatar.jpg"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { GET_USER_MESSAGES } from "../constants/graphql";

export default {
  data() {
    return {
      id: this.otherUser.id,
      username: this.otherUser.username,
      bio: this.otherUser.bio,
      messages: []
    };
  },
  props: ["otherUser"],
  methods: {
    getUserMessages: function() {
      this.$apollo
        .query({
          query: GET_USER_MESSAGES,
          variables: {
            id: this.id
          }
        })
        .then(result =>
          result.data.allUserMessages.forEach(message =>
            this.messages.push(message)
          )
        );
    }
  },
  mounted() {
    this.getUserMessages(this.id);
  }
};
</script>
<style scoped>
</style>