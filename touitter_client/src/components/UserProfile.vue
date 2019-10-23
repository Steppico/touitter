<template>
  <div class="UserProfile">
    <h2 v-on:dblclick="changeUserName">{{ username }}</h2>

    <div class="bio_zone">
      <p class="bio">{{ bio }}</p>
      <button v-on:click="showBio">update Bio</button>
      <modal name="modal-bio">
        <p class="bio_paragraph">Update your Bio</p>
        <textarea class="bio_text" :placeholder="this.bio" v-model="input.bio"></textarea>
        <button class="bio_button" v-on:click="updateBio">save</button>
      </modal>
    </div>
    <button v-on:click="passView">Update Password</button>
    <modal name="modal-password">
      <div class="pass_zone">
        <a class="update_password_text">Insert Password:</a>
        <input class="update_password_input" type="password" v-model="input.firstPass" />
        <a class="update_password_text">Confirm Password:</a>
        <input class="update_password_input" type="password" v-model="input.confirmPass" />
        <button class="update_password_button" v-on:click="updatePassword">Confirm</button>
      </div>
    </modal>
  </div>
</template>

<script>
import {
  UPDATE_USERNAME,
  UPDATE_PASSWORD,
  UPDATE_BIO
} from "../constants/graphql";

export default {
  name: "userProfile",
  data() {
    return {
      id: this.session.id,
      username: this.session.username,
      bio: this.session.bio,
      modifyPass: false,
      input: {
        firstPass: "",
        confirmPass: "",
        bio: ""
      }
    };
  },
  props: ["session", "updateSession"],
  methods: {
    showBio: function() {
      this.$modal.show("modal-bio");
    },
    passView: function() {
      this.$modal.show("modal-password");
    },
    updateBio: function() {
      this.$apollo
        .mutate({
          mutation: UPDATE_BIO,
          variables: {
            id: this.session.id,
            bio: this.input.bio
          }
        })
        .then(this.updateSession(this.id, this.username, this.input.bio));
      this.$modal.hide("modal-bio");
    },
    updatePassword: function() {
      if (
        this.input.firstPass !== this.input.confirmPass ||
        this.input.firstPass.length <= 0 ||
        this.input.confirmPass <= 0
      ) {
        alert("Please check your data");
      } else {
        this.$apollo
          .mutate({
            mutation: UPDATE_PASSWORD,
            variables: {
              id: this.session.id,
              password: this.input.firstPass
            }
          })
          .then(alert("Password updated successfully"))
          .then(this.passView());
        this.$modal.hide("modal-password");
      }
    },
    changeUserName: function() {
      let newUserName = window.prompt(
        "Insert new Username:",
        `${this.username}`
      );
      if (newUserName) {
        if (newUserName.length >= 1) {
          this.username = newUserName;
          this.$apollo
            .mutate({
              mutation: UPDATE_USERNAME,
              variables: {
                id: this.session.id,
                username: newUserName
              }
            })
            .then(this.updateSession(this.id, this.username, this.bio));
        }
      } else {
        alert("Please choose a longer username");
      }
    }
  }
};
</script>

<style>
.bio_zone {
  display: inline-block;
}

.bio_button {
  display: flex;
  margin: 0 auto;
}
.bio_paragraph {
  text-align: center;
}

.bio_text {
  display: flex;
  height: 200px;
  resize: none;
  width: 200px;
  margin: 0 auto;
}

.pass_zone {
  display: block;
  margin: 0 auto;
  margin-top: 30px;
}

.update_password {
  display: flex;
}
.update_password_button {
  display: flex;
  margin: 0 auto;
}

.update_password_input {
  display: flex;
  margin: 0 auto;
  margin-bottom: 5px;
}
.update_password_text {
  display: flex;
  margin-left: 240px;
  padding-top: 10px;
}
</style>