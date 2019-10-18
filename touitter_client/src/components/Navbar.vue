<template>
  <div class="Navbar">
    <h2>Feed(navbar)</h2>
    <UserProfile class="UserProfile" />
  </div>
</template>
<script>
import UserProfile from "./UserProfile";

export default {
  name: "navbar",
  data() {},
  components: {
    UserProfile
  }
};
</script>
<style scoped>
.Navbar {
  background-color: rgb(0, 170, 239);
  color: white;
}

.UserProfile {
  margin-left: 75%;
}
</style>