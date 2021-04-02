<template>
  <v-container>
    <v-row id="projects" class="mb-10">
      <v-col cols="12">
        <h2 class="mb-10 sectionTitle">Projects</h2>
        <div class="projects">
          <v-card class="project ma-2" color="var(--lightBgColor)" v-for="(project, i) in projects" :key="i" >
            <div class="preCard">
              <v-icon color="var(--primaryColor)" class="folderIcon">mdi-folder</v-icon>
              <v-card-actions>
                <v-btn text :href="project.hrefCode" target="_blank" color="var(--primaryColor)" class="showBtn">
                  <v-icon left color="var(--primaryColor)">mdi-github</v-icon>
                  Show me the code
                </v-btn>
              </v-card-actions>
            </div>
            <v-card-title class="headline mb-5">
              {{project.title}}
            </v-card-title>
            <v-card-subtitle>{{project.subtitle}}</v-card-subtitle>
          </v-card>
        </div>
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

<style scoped lang="scss">
.v-card__subtitle {
  color: var(--fontColor) !important;
}
.v-card__title {
  color: var(--lightFontColor) !important;
  padding-top: 10px;
}
#projects {
  padding: 100px 22px 0px 22px;
}
.projects {
  display: flex;
  flex-wrap: wrap;
}
.project {
  color: white;
  height: 280px;
  width: 300px;
}
.preCard {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 20px;
  padding-top: 20px;
}
.folderIcon {
  font-size: 40px;
}
.showBtn {
  font-family: var(--fontMonospace);
  font-size: 12px;
}
</style>
