<template>
  <v-container>
    <v-row id="projects">
      <v-col class="mb-10">
        <h2 class="mb-10 display-2">Projects</h2>
        <v-card elevation="24" max-width="100%" class="mx-auto project">
          <v-carousel
            :continuous="false"
            cycle
            hide-delimiter-background
            delimiter-icon="mdi-minus"
            height="300"
            show-arrows-on-hover
          >
            <v-carousel-item v-for="(project, i) in projects" :key="i" :src="require(`@/assets/${project.background}`)">
              <v-row align="center" justify="center" class="project-container">
                <div>
                  <v-card-title class="headline mb-5">{{project.title}}</v-card-title>
                  <v-card-subtitle>{{project.subtitle}}</v-card-subtitle>
                  <v-card-actions>
                    <v-btn text outlined :href="project.hrefCode" target="_blank">Show me the code</v-btn>
                    <v-btn text outlined :href="project.hrefProject" target="_blank">Take a look</v-btn>
                    <v-spacer></v-spacer>
                  </v-card-actions>
                </div>
              </v-row>
            </v-carousel-item>
          </v-carousel>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "ProjectsSection",

  data: () => ({
    projects: [
      {
        title: "Code crushers",
        subtitle: "Collaborative web presentation of a team using HTML5, CSS3, Grid, Sass, Gulp, responsive design...",
        hrefCode: "https://github.com/Adalab/e-s1-codecrushers",
        hrefProject: "http://beta.adalab.es/e-s1-codecrushers/",
        background: "code-crushers.png"
      },
      {
        title: "TV series searcher",
        subtitle: "SWA made with JavaScript",
        hrefCode:
          "https://github.com/albahniuk/e-s2-evaluacion-final-albahniuk",
        hrefProject: "http://beta.adalab.es/e-s2-evaluacion-final-albahniuk/",
        background: "code-crushers.png"
      },
      {
        title: "Find the pair",
        subtitle: "Classic memory game to find the pairs made with JavaSpript",
        hrefCode:
          "https://github.com/albahniuk/e-s2-evaluacion-final-bis-albahniuk",
        hrefProject: "",
        background: "code-crushers.png"
      },
      {
        title: "Harry potter characters searcher",
        subtitle: "SWA made with React",
        hrefCode: "https://github.com/Adalab/e-s3-evaluacion-final-albahniuk",
        hrefProject: "http://beta.adalab.es/e-s3-evaluacion-final-albahniuk/#/",
        background: "harry-potter-page.png"
      },
      {
        title: "Pokédex",
        subtitle: "SWA made with React",
        hrefCode: "https://github.com/albahniuk/f-online-pokemon-albahniuk",
        hrefProject: "http://beta.adalab.es/f-online-pokemon-albahniuk/",
        background: "pokedex.png"
      },
      {
        title: "Awesome profile-cards",
        subtitle: "Interactive web application made with React that allows you to create a personalized business card",
        hrefCode: "https://github.com/Adalab/easley-s3-codekatchers",
        hrefProject: "http://beta.adalab.es/easley-s3-codekatchers/#/",
        background: "awesome-profile-cards.png"
      },
      {
        title: "Gext",
        subtitle: "Platform made with React that allows you to create documents from templates, automatically changing the text or image fields to customize it to your needs.",
        hrefCode: "https://github.com/Adalab/easley-s4-gext",
        hrefProject: "https://gext.es/#/",
        background: "gext.png"
      }
    ],
  }),
};
</script>

<style scoped>
h2 {
  font-family: "Roboto", sans-serif;
  font-size: 26px;
}
.v-card__subtitle {
  text-align: left;
}
#projects {
  padding-top: 70px;
}
.project-container {
  display: none;
}
.project:hover .project-container {
  display: block;
  background-color:rgba(190,118,23,1);
  padding: 20px 70px;
  color: white;
}
</style>
