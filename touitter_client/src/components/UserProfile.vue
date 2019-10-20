<template>
  <div class="UserProfile">
    <h2 v-on:dblclick="changeUserName">{{ username }}</h2>
    <img
      src="data:image/jpeg;base64,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"
    />
    <div class="bio_zone">
      <p class="bio">{{ bio }}</p>
      <button v-on:click="showBio">update Bio</button>
      <modal name="modal-bio">
        <p class="bio_paragraph">Update your Bio</p>
        <textarea class="bio_text" :placeholder="this.bio" v-model="input.bio"></textarea>
        <button class="bio_button" v-on:click="updateBio">save</button>
      </modal>
    </div>
    <span v-if="!this.modifyPass">
      <div class="modify_password" v-on:click="passView">Update Password</div>
    </span>
    <div class="update_password" v-if="this.modifyPass">
      <a class="update_password_text">New Password:</a>
      <input class="update_password_input" type="password" v-model="input.firstPass" />
      <a class="update_password_text">Confirm Password:</a>
      <input class="update_password_input" type="password" v-model="input.confirmPass" />
      <div class="modify_password" v-on:click="updatePassword">Confirm</div>
    </div>
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
      id: this.loginData.id,
      username: this.loginData.username,
      bio: this.loginData.bio,
      modifyPass: false,
      input: {
        firstPass: "",
        confirmPass: "",
        bio: ""
      }
    };
  },
  props: ["loginData", "updateLoginData"],
  methods: {
    showBio: function() {
      this.$modal.show("modal-bio");
    },
    passView: function() {
      this.modifyPass = !this.modifyPass;
    },
    updateBio: function() {
      this.$apollo
        .mutate({
          mutation: UPDATE_BIO,
          variables: {
            id: this.loginData.id,
            bio: this.input.bio
          }
        })
        .then(this.updateLoginData(this.id, this.username, this.input.bio));
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
              id: this.loginData.id,
              password: this.input.firstPass
            }
          })
          .then(alert("Password updated successfully"))
          .then(this.passView());
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
                id: this.loginData.id,
                username: newUserName
              }
            })
            .then(this.updateLoginData(this.id, this.username, this.bio));
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

.modify_password {
  background-color: rgb(0, 170, 239);
  border-radius: 5px;
  border: 1px solid lightslategrey;
  color: white;
  margin: 0 auto;
  width: 100px;
}

.modify_password:hover {
  cursor: pointer;
  transform: scale(1.05, 1.05);
}

.bio_text {
  display: flex;
  height: 200px;
  resize: none;
  width: 200px;
  margin: 0 auto;
}
.update_password {
  text-align: center;
}

.update_password_input {
  display: flex;
  margin: 0 auto;
  margin-bottom: 5px;
}
.update_password_text {
  padding: 10px;
}
</style>