<template>
  <v-container>
    <v-row id="about">
      <v-col cols="12" style="padding: 0;">
        <p class="welcomeMsg">Hi, my name is</p>
        <h2 class="mainText">Alba López Folgar.</h2>
        <v-row :style="$vuetify.breakpoint.smAndUp ? 'margin: 0 auto; max-width: 1200px;' : 'margin: auto; max-width: 100%;'">
          <v-col cols="12" sm="6" style="margin: auto">
            <p class="presentation">A Front-End developer based in Madrid.</p>
            <p class="description">
              <br />I've never stopped engaging my passion to help others and solve problems, before as sociologist and now as web developer.
              <br />I am passionate about building user‑friendly experiences, paying attention to detail. I enjoy turning complex problems into simple, keeping learning and continue challenging myself.
              <br />When I'm not coding, you'll find me traveling, eating pizza, laughing at some memes or spending time on Netflix.
            </p>
            <a
              v-for="(link, i) in contact"
              :key="i"
              :href="link.href"
              class="subheading mx-3"
              target="_blank"
            >
              <v-icon color="var(--primaryColor)">{{link.icon}}</v-icon>
            </a>
          </v-col>
          <v-col cols="12" sm="6" class="imageContainer">
              <v-img
                :src="require('../assets/profile.png')"
                class="my-3"
                contain
                :height="$vuetify.breakpoint.xs ? 260 : 320"
                width="350"
              />
          </v-col>
        </v-row>
        <v-row>
          <v-card class="skillsContainer">
            <v-col cols="12" class="skills">
                <v-chip
                  class="ma-2"
                  color="var(--lightBgColor)"
                  text-color="var(--primaryColor)"
                  v-for="skill in skills" :key="skill.name"
                >
                  <v-avatar left>
                    <v-icon>{{skill.icon}}</v-icon>
                  </v-avatar>
                  {{ skill.name }}
                </v-chip>
            </v-col>
            <v-col class="mb-10" cols="6">
                <v-chip
                  class="ma-2"
                  color="var(--lightBgColor)"
                  text-color="var(--primaryColor)"
                  v-for="language in languages" :key="language.name"
                >
                  <v-avatar left>
                    <v-icon>{{language.icon}}</v-icon>
                  </v-avatar>
                  {{ language.name }}
                </v-chip>
            </v-col>
          </v-card>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "AboutSection",

  data: () => ({
    skills: [
      {
        name: "HTML5",
        icon: "mdi-language-html5"
      },
      {
        name: "CSS3",
        icon: "mdi-language-css3"
      },
      {
        name: "SASS",
        icon: "mdi-sass"
      },
      {
        name: "JavaScript",
        icon: "mdi-language-javascript"
      },
      {
        name: "React",
        icon: "mdi-react"
      },
      {
        name: "Vue",
        icon: "mdi-vuejs"
      },
      {
        name: "Angular2+",
        icon: "mdi-angular"
      },
      {
        name: "TypeScript",
        icon: "mdi-language-typescript"
      },
      {
        name: "Bootstrap",
        icon: "mdi-bootstrap"
      },
      {
        name: "Material design",
        icon: "mdi-material-design"
      }
    ],
    languages: [
      {
        name: "Spanish",
        icon: "mdi-circle-slice-8"
      },
      {
        name: "Galician",
        icon: "mdi-circle-slice-8"
      },
      {
        name: "English",
        icon: "mdi-circle-slice-6"
      }
    ],
    contact: [
      {
        text: "Email",
        href: "mailto:albalopezfolgar@gmail.com",
        icon: "mdi-email"
      },
      {
        text: "Linkedin",
        href: "https://www.linkedin.com/in/albalopezfolgar",
        icon: "mdi-linkedin"
      },
      {
        text: "Github",
        href: "https://github.com/albahniuk",
        icon: "mdi-github"
      },
      {
        text: "Twitter",
        href: "https://twitter.com/albahniuk",
        icon: "mdi-twitter"
      }
    ]
  })
};
</script>

<style scoped lang="scss">
.welcomeMsg {
  color: var(--primaryColor);
  font-family: var(--fontMonospace);
  line-height: 1.1;
  font-size: 20px;
}
.mainText {
  font-family: var(--fontRoboto);
  font-size: 80px;
  font-weight: 600;
  position: relative;
  color: var(--lightFontColor);
  line-height: 1.1;
}
.presentation {
  color: var(--fontColor);
  font-size: 50px;
  font-weight: 600;
  line-height: 1.1;
}
.sm .mainText, .sm .presentation {
  font-size: 40px;
}
.description {
  color: var(--fontColor);
}
@media (max-width: 960px) {
  .description {
    padding: 0 12px;
    font-size: 14px;
  }
}
.imageContainer {
  display: flex;
  align-items: center;
}
a {
  text-decoration: none;
}
#about {
  padding-top: 200px;
}
.skillsContainer {
  margin-top: 40px;
  box-shadow: none;
  background: transparent !important;
}
</style>
