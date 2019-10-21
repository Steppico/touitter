<template>
  <div class="otherUser">
    <h1 class="user_name">{{username}}</h1>
    <img class="user_avatar" v-on:click="goToUser(message.postedBy)" src="../assets/avatar.jpg" />
    <p>What {{username}} says about himself:</p>
    <div class="user_bio">{{bio}}</div>
    <p>Most recent messages:</p>
    <div class="user_messages">
      <div v-for="message in messages.slice().reverse()" v-bind:key="message.id">
        <div class="card">
          <div class="board_message">
            <div class="board_message_author">{{message.postedBy.username}}</div>
            <div class="board_message_text">{{message.message}}</div>
          </div>
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
<style >
.card {
  border-radius: 3px;
  padding: 5px;
  margin-bottom: 10px;
}

.user_name {
  margin: 0 auto;
}

.user_avatar {
  border-radius: 50%;
  width: 100px;
  border: 1px solid lightslategray;
}

.user_messages {
  border: 1px solid lightgrey;
  border-radius: 2px;
  width: 50%;
  margin: 0 auto;
  padding-bottom: 10px;
  padding-top: 10px;
}

.user_bio {
  border: 1px solid lightgrey;
  margin: 0 auto;
  width: 300px;
  font-style: italic;
  margin-bottom: 20px;
}
</style>
