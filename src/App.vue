<template>
  <v-app :class="{'sm': $vuetify.breakpoint.smAndDown, 'md': $vuetify.breakpoint.md}">
    <Header />
    <AboutSection />
    <ExperienceSection />
    <ProjectsSection />
    <ContactSection class="hidden hidden-right" v-infocus="'showElement'"/>
    <v-footer elevation="5" height="60" width="100%" color="var(--lightBgColor)" class="mt-10">
      <div class="footerText">Powered by Coffee <v-icon color="var(--primaryColor)">mdi-coffee</v-icon></div>
      <v-spacer></v-spacer>
      <div class="footerText">&copy; {{ new Date().getFullYear() }} — <strong>Alba López Folgar</strong></div>
    </v-footer>
  </v-app>
</template>

<script>
import Header from './components/Header';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import ContactSection from './components/ContactSection';


export default {
  name: 'App',
  components: {
    Header,
    AboutSection,
    ProjectsSection,
    ExperienceSection,
    ContactSection
  },
  directives: {
    infocus: {
      isLiteral: true,
      inserted: (el, binding) => {
        let f = () => {
          let rect = el.getBoundingClientRect()
          let inView = (
            rect.width > 0 &&
            rect.height > 0 &&
            rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
          )
          if (inView) {
            el.classList.add(binding.value)
            window.removeEventListener('scroll', f)
          }
        }
        window.addEventListener('scroll', f)
        f()
      }
    }
  }
};
</script>
<style lang='scss'>
@import "./assets/styles.scss";
.container {
  padding: 0;
  margin: 0 auto; 
  max-width: 1000px;
}
.hidden {
  opacity: 0;
}
.hidden-right {
  transform: translate(50px, 0);
}
.hidden-left {
  transform: translate(-50px, 0);
}
.showElement {
  opacity: 1;
  transform: translate(0, 0);
  -webkit-transition: all 0.5s ease-out;
  -moz-transition: all 0.5s ease-out;
  transition: all 0.5s ease-out;
}
.footerText {
  color: var(--fontColor);
  font-family: var(--fontMonospace);
  strong {
    color: var(--primaryColor);
  }
}
</style>
