<template>
<div>
  <v-app-bar
    color="var(--bgColor)"
    fixed
  >
    <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="d-md-none"></v-app-bar-nav-icon>
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
    <transition name="about" appear>
      <v-btn text href="#about" class="d-none d-md-flex">About</v-btn>
    </transition>
    <transition name="experience" appear>
      <v-btn text href="#experience"  class="d-none d-md-flex">Experience</v-btn>
    </transition>
    <transition name="projects" appear>
      <v-btn text href="#projects"  class="d-none d-md-flex">Projects</v-btn>
    </transition>
    <transition name="contact" appear>
      <v-btn text href="#contact"  class="d-none d-md-flex">Contact</v-btn>
    </transition>

  </v-app-bar>
  <v-navigation-drawer v-model="drawer" absolute temporary color="var(--bgColor)">
    <v-list nav dense>
      <v-list-item-group>
        <v-list-item href="#about" @click.stop="drawer = !drawer">
          <v-list-item-title>About</v-list-item-title>
        </v-list-item>
        <v-list-item href="#experience" @click.stop="drawer = !drawer">
          <v-list-item-title >Experience</v-list-item-title>
        </v-list-item>
        <v-list-item href="#projects" @click.stop="drawer = !drawer">
          <v-list-item-title>Projects</v-list-item-title>
        </v-list-item>
        <v-list-item href="#contact" @click.stop="drawer = !drawer">
          <v-list-item-title>Get in touch</v-list-item-title>
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
.about-enter, .about-leave-to,
.projects-enter, .projects-leave-to,
.experience-enter, .experience-leave-to,
.contact-enter, .contact-leave-to {
  opacity: 0;
}
.about-enter-active, .about-leave-active {
  transition: opacity 1s ease-in .5s;
}
.experience-enter-active, .experience-leave-active {
  transition: opacity 1s ease-in 1s;
}
.projects-enter-active, .projects-leave-active {
  transition: opacity 1s ease-in 1.5s;
}
.contact-enter-active, .contact-leave-active {
  transition: opacity 1s ease-in 2s;
}
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
