<template>
  <v-app>
    <Header />
    <v-sheet id="scrolling-techniques-2" class="overflow-y-auto" max-height="100vh">
      <v-container style="margin-top: 128px; max-width: 1200px">
        <v-content>
          <AboutSection/>
          <ProjectsSection/>
          <ExperienceSection/>
          <ContactSection/>
        </v-content>
      </v-container>
      <v-footer elevation="5" height="60" width="100%">
        <div>Powered by Coffee <v-icon color="rgba(190,118,23,.8)">mdi-coffee</v-icon></div>
        <v-spacer></v-spacer>
        <div>&copy; {{ new Date().getFullYear() }} — <strong>Alba López Folgar</strong></div>
      </v-footer>
    </v-sheet>
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

  data: () => ({
    //
  }),
};
</script>
