<template>
  <v-container>
    <v-row id="about">
      <v-col cols="12" style="padding: 0;">
        <v-parallax
          dark
          src="../assets/background-about.png"
          :height="$vuetify.breakpoint.xs ? 750 : 550"

        >
          <h2 class="mb-5 display-2" style="margin: 100px auto; max-width: 1200px;">I'm Alba!</h2>
          <v-row class="mb-10" :style="$vuetify.breakpoint.smAndUp ? 'margin: 0 auto; max-width: 1200px;' : 'margin: auto; max-width: 100%;'">
            <v-col cols="12" sm="6" class="about image-container">
                <v-img
                  :src="require('../assets/profile.png')"
                  class="my-3"
                  contain
                  :height="$vuetify.breakpoint.xs ? 260 : 320"
                  width="350"
                  style="border-radius: 100%"
                />
            </v-col>
            <v-col cols="12" sm="6" style="margin: auto">
              <p>
                A Front-End developer based in Madrid.
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
                <v-icon color="#333">{{link.icon}}</v-icon>
              </a>
            </v-col>
          </v-row>
        </v-parallax>
        <v-row>
          <v-card class="card-container" style="margin: 0 auto; max-width: 1200px;">
            <v-col cols="12">
                <p class="headline">Skills</p>
                <v-chip
                  class="ma-2"
                  color="rgba(190,118,23,.8)"
                  text-color="white"
                  v-for="skill in skills" :key="skill.name"
                >
                  <v-avatar left>
                    <v-icon>{{skill.icon}}</v-icon>
                  </v-avatar>
                  {{ skill.name }}
                </v-chip>
            </v-col>
            <v-col class="mb-10" cols="6">
                <p class="headline">Languages</p>
                <v-chip
                  class="ma-2"
                  color="rgba(190,118,23,.8)"
                  text-color="white"
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

<style scoped>
.about {
  display: flex;
  align-items: center;
}
a {
  text-decoration: none;
}
h2 {
  font-family: "Roboto", sans-serif;
  font-size: 26px;
  position: relative;
  color: #333;
}
.v-card__subtitle {
  text-align: left;
}
#about {
  padding-top: 50px;
}
.card-container {
  padding: 20px;
  box-shadow: none;
}
p {
  color: #333;
}
  @media (max-width: 960px) {
    p {
      padding: 0 12px;
      font-size: 14px;
    }
  }
</style>
