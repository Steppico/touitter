<template>
  <div>
    <p class="thanks">Thank you, your email address has been confirmed!</p>
    <p>
      <a href="http://localhost:3001/">Click here</a> to go back.
    </p>
  </div>
</template>
<script>
import { CHECK_TOKEN, CONFIRM_EMAIL } from "../constants/graphql";

export default {
  data() {
    return {
      token: this.$route.query.token
    };
  },
  methods: {
    tokenControl() {
      this.$apollo
        .query({
          query: CHECK_TOKEN,
          variables: {
            token: this.token
          }
        })
        .then(result => {
          this.$apollo.mutate({
            mutation: CONFIRM_EMAIL,
            variables: {
              id: result.data.checkToken.id
            }
          });
        });
    }
  },
  mounted() {
    this.tokenControl();
  }
};
</script>
<style scoped>
.thanks {
  background-color: lightgreen;
  border-radius: 4px;
  color: darkgreen;
  margin: 10px auto;
  padding: 5px;
  width: 30%;
}
</style>