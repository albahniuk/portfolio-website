<template>
<div>
  <v-app-bar
    color="var(--bgColor)"
    fixed
  >
    <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="d-lg-none"></v-app-bar-nav-icon>
    <v-toolbar-title>
      <a href="#top">
        <v-img
          :src="require('../assets/logo.png')"
          contain
          height="55"
          width="55"
          style="border-radius: 100%"
        />
      </a>
    </v-toolbar-title>

    <v-spacer></v-spacer>
    <v-btn text href="#about" class="d-none d-lg-flex">About</v-btn>
    <v-btn text href="#projects"  class="d-none d-lg-flex">Projects</v-btn>
    <v-btn text href="#experience"  class="d-none d-lg-flex">Education and experience</v-btn>
    <v-btn text href="#contact"  class="d-none d-lg-flex">Contact</v-btn>

  </v-app-bar>
  <v-navigation-drawer v-model="drawer" absolute temporary color="var(--bgColor)">
    <v-list nav dense>
      <v-list-item-group>
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

<style scoped lang="scss">
.v-btn {
  background-color: none !important;
  box-shadow: none;
  color: var(--fontColor) !important;
  font-family: var(--fontMonospace);
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
  .v-list-item__title {
    color: var(--fontColor);
    font-family: var(--fontMonospace);
  }
}
</style>
