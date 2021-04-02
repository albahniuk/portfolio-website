<template>
  <v-container>
    <v-row id="experience" class="mb-10">
      <v-col cols="12">
        <v-row justify="center">
          <v-col cols="12">
            <h2 class="mb-10 sectionTitle">Experience</h2>
            <v-tabs vertical v-model="experienceTab">
              <v-tab v-for="(item, i) in experience" :key="i">
                {{ item.title }}
              </v-tab>
              <v-tabs-items v-model="experienceTab">
                <v-tab-item v-for="(item, i) in experience" :key="i">
                  <v-card flat>
                    <v-card-text>
                      <p class="tabText">{{item.text}} <span v-if="item.place">@{{item.place}}</span></p>
                      <p class="tabYear">{{item.year}}</p>
                      <template v-if="item.description && Array.isArray(item.description)">
                        <p class="tabDescription" v-for="(sentence, index) in item.description" :key="index">
                          <v-icon left>mdi-chevron-right</v-icon>
                          {{sentence}}
                        </p>
                      </template>
                      <p class="tabDescription" v-if="item.description && !Array.isArray(item.description)">
                        <v-icon left>mdi-chevron-right</v-icon>
                        {{item.description}}
                      </p>
                    </v-card-text>
                  </v-card>
                </v-tab-item>
              </v-tabs-items>
            </v-tabs>
          </v-col>
          <v-col cols="12" class="mt-10">
            <h2 class="mb-10 sectionTitle">Education</h2>
            <v-tabs vertical v-model="educationTab">
              <v-tab v-for="(item, i) in training" :key="i">
                {{ item.year }}
              </v-tab>
              <v-tabs-items v-model="educationTab">
                <v-tab-item v-for="(item, i) in training" :key="i">
                  <v-card flat>
                    <v-card-text>
                      <p class="tabText">{{item.title}}</p>
                      <p class="tabYear">{{item.place}}</p>
                      <template v-if="item.description && Array.isArray(item.description)">
                        <p class="tabDescription" v-for="(sentence, index) in item.description" :key="index">
                          <v-icon left>mdi-chevron-right</v-icon>
                          {{sentence}}
                        </p>
                      </template>
                      <p class="tabDescription" v-if="item.description && !Array.isArray(item.description)">
                        <v-icon left>mdi-chevron-right</v-icon>
                        {{item.description}}
                      </p>
                    </v-card-text>
                  </v-card>
                </v-tab-item>
              </v-tabs-items>
            </v-tabs>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "ExperienceSection",

  data: () => ({
    educationTab: 0,
    experienceTab: 0,
    training: [
      {
        year: "Oct 2018 - Feb 2019",
        title: "Intensive Front-End course",
        place: "Adalab",
        description: "Javascript, HTML5, CSS3, CSS Grid, Flexbox, SASS, Bootstrap, ReactJs..."
      },
      {
        year: "2014 - 2016",
        title: "Master degree in applied sociology: social issues",
        place: "Universidad Complutense de Madrid"
      },
      {
        year: "2010 - 2014",
        title: "Sociology degree",
        place: "Universidad Complutense de Madrid"
      }
    ],
    experience: [
      {
        year: "Sep 2020 - Present",
        title: "Bosonit",
        text: "Front-End developer",
        description: [
          "Development and maintaning of financial solutions web apps with Vue, HLML5, CSS3, material design, SCRUM methodology",
          "Development of e2e tests with Cypress",
          "Development of unit tests",
          "Documentation with Storybook"
        ],
        place: "Bosonit"
      },
      {
        year: "Mar 2019 - Sep 2020",
        title: "NFQ",
        text: "Front-End developer",
        description: [
          "Development and maintaning of financial solutions web apps with Angular2+, Vue, HLML5, CSS3, material design, SCRUM methodology", 
          "Development of e2e tests with Protractor, Selenium and Cypress",
          "Documentation with Styleguidist"
        ],
        place: "NFQ"
      },
      {
        year: "2017",
        title: "Freelance",
        text: "Sociologist",
        description: "Collaboration in social researches directed by Tomás Calvo Buezas, Emeritus Professor of Social Anthropology at the Faculty of Political Sciences and Sociology of the UCM and founder of the Center for Studies on Migration and Racism.",
      },
      {
        year: "2015 - 2017",
        title: "Red Acoge",
        text: "Internship and volunteering as sociologist",
        description: [
          "Collaboration in research and reports carried out in the Social Intervention Area.",
          "Treatment of statistical data, data analysis, field work (in-depth interviews), development of theoretical framework..."
        ],
        place: "Red Acoge"
      },
      {
        year: "2016",
        title: "Activa Idiomas",
        text: "English teacher",
        place: "Activa Idiomas",
        description: "Teacher of after-school English classes in early childhood education"
      }
    ]
  }),
};
</script>

<style scoped lang="scss">
.v-card__subtitle {
  text-align: left;
}
.description {
  color: var(--fontColor);
}
#experience {
  padding: 100px 22px 0 22px;
}
.tabYear {
  font-family: var(--fontMonospace);
}
.tabText {
  font-weight: 700;
  font-size: 20px;
  span {
    color: var(--primaryColor);
  }
}
.tabDescription {
  i {
    font-size: 18px;
    color: var(--primaryColor);
  }
}
::v-deep {
  .v-card__text {
    color: var(--fontColor) !important;
  }
  .v-tab {
    justify-content: flex-start;
  }
  .v-tab:not(.v-tab--active) {
    color: var(--fontColor) !important;
    text-align: left;
  }
  .v-tabs > .v-tabs-bar {
    background-color: transparent !important;
  }
  .v-tabs-items, .v-card {
    background-color: transparent !important;
  }
}
</style>
