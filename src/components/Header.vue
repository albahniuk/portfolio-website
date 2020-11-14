<template>
<div>
  <v-app-bar
    color="white"
    fixed
  >
    <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="d-lg-none"></v-app-bar-nav-icon>
    <v-toolbar-title>
      <a href="#top">
        <v-img
          :src="require('../assets/logo.png')"
          contain
          height="40"
          width="40"
          style="border-radius: 100%"
        />
      </a>
      <span>Alba López Folgar</span>
    </v-toolbar-title>

    <v-spacer></v-spacer>
    <v-btn text href="#about" class="d-none d-lg-flex">About</v-btn>
    <v-btn text href="#projects"  class="d-none d-lg-flex">Projects</v-btn>
    <v-btn text href="#experience"  class="d-none d-lg-flex">Education and experience</v-btn>
    <v-btn text href="#contact"  class="d-none d-lg-flex">Contact</v-btn>

  </v-app-bar>
  <v-navigation-drawer v-model="drawer" absolute temporary>
    <v-list nav dense>
      <v-list-item-group active-class="orange lighten-3--text text--accent-4">
        <v-list-item href="#about" @click.stop="drawer = !drawer">
          <v-list-item-title>About</v-list-item-title>
        </v-list-item>
        <v-list-item href="#projects" @click.stop="drawer = !drawer">
          <v-list-item-title>Projects</v-list-item-title>
        </v-list-item>
        <v-list-item href="#experience" @click.stop="drawer = !drawer">
          <v-list-item-title >Education and experience</v-list-item-title>
        </v-list-item>
        <v-list-item href="#contact" @click.stop="drawer = !drawer">
          <v-list-item-title>Contact</v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</div>
</template>

<script>
export default {
  name: "Header",
  props: {},
  data: () => ({
    drawer: false
  })
};
</script>

<style scoped>
.v-btn {
  background-color: none !important;
  box-shadow: none;
}
.theme--dark.v-btn:not(.v-btn--flat):not(.v-btn--text):not(.v-btn--outlined) {
  background-color: none !important;
}
.v-toolbar.v-toolbar--absolute {
  z-index: 5;
}
.v-toolbar__title {
  display: flex;
  align-items: center;
}
.v-toolbar__title .v-image {
  margin-right: 10px;
}
a {
  text-decoration: none;
  color: inherit;
}
.v-navigation-drawer {
  position: fixed;
}
</style>
