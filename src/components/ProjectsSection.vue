<template>
  <v-container>
    <v-row id="projects">
      <v-col class="mb-10">
        <h2 class="mb-10 display-2">Projects</h2>
        <v-card elevation="24" max-width="100%" class="mx-auto project">
          <v-carousel
            cycle
            hide-delimiter-background
            delimiter-icon="mdi-minus"
            height="300"
            show-arrows-on-hover
          >
            <v-carousel-item v-for="(project, i) in projects" :key="i" >
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
        title: "Awesome profile-cards",
        subtitle: "Interactive web application made with React that allows you to create a personalized business card",
        hrefCode: "https://github.com/Adalab/easley-s3-codekatchers",
        hrefProject: "http://beta.adalab.es/easley-s3-codekatchers/#/",
      },
      {
        title: "Gext",
        subtitle: "Platform made with React that allows you to create documents from templates, automatically changing the text or image fields to customize it to your needs.",
        hrefCode: "https://github.com/Adalab/easley-s4-gext",
        hrefProject: "https://gext.es/#/",
      },
      {
        title: "Code crushers",
        subtitle: "Collaborative web presentation of a team using HTML5, CSS3, Grid, Sass, Gulp, responsive design...",
        hrefCode: "https://github.com/Adalab/e-s1-codecrushers",
        hrefProject: "http://beta.adalab.es/e-s1-codecrushers/",
      },
      {
        title: "Harry potter characters searcher",
        subtitle: "SWA made with React",
        hrefCode: "https://github.com/Adalab/e-s3-evaluacion-final-albahniuk",
        hrefProject: "http://beta.adalab.es/e-s3-evaluacion-final-albahniuk/#/",
      },
      {
        title: "Pokédex",
        subtitle: "SWA made with React",
        hrefCode: "https://github.com/albahniuk/f-online-pokemon-albahniuk",
        hrefProject: "http://beta.adalab.es/f-online-pokemon-albahniuk/",
      },
      {
        title: "TV series searcher",
        subtitle: "SWA made with JavaScript",
        hrefCode:
          "https://github.com/albahniuk/e-s2-evaluacion-final-albahniuk",
        hrefProject: "https://albahniuk.github.io/e-s2-evaluacion-final-albahniuk/",
      }
    ],
  }),
};
</script>

<style scoped>
h2 {
  font-family: "Roboto", sans-serif;
  font-size: 26px;
  position: relative;
}
.v-card__subtitle {
  text-align: left;
}
#projects {
  padding-top: 70px;
  padding: 0 22px;
}
.project-container {
  background-image: linear-gradient(to bottom, #cd954d, #d79f54, #e1a95b, #eab462, #f4be69);  padding: 20px 70px;
  color: white;
  height: 100%;
}
</style>
