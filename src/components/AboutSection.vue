<template>
  <v-container>
    <v-row id="about">
      <v-col cols="12">
        <h2 class="mb-10 display-2">About</h2>
        <v-row class="mb-10">
          <v-col cols="12" md="6" class="about">
            <v-img
              :src="require('../assets/profile.png')"
              class="my-3"
              contain
              height="350"
              width="350"
              style="border-radius: 100%"
            />
          </v-col>
          <v-col cols="12" md="6" style="margin: auto">
            <p>
              Hi! I'm Alba, a Front-End developer based in Madrid.
              <br />I've never stopped engaging my passion to help others and solve problems, before as sociologist and now as web developer.
              <br />I am passionate about building user‑friendly experiences, paying attention to detail, and I enjoy turning complex problems into simple, keeping learning and continue challenging myself.
              <br />I’m fast learner and self-sufficient. Among the tools I work with are responsibility, empathy and great adaptive capacity.
              <br />When I'm not coding, you'll find me traveling, cooking (and eating), enjoying time with family and friends, reading a book or watching TV series.
            </p>
            <a
              v-for="(link, i) in contact"
              :key="i"
              :href="link.href"
              class="subheading mx-3"
              target="_blank"
            >
              <v-icon color="rgba(190,118,23,.8)">{{link.icon}}</v-icon>
            </a>
          </v-col>
        </v-row>
        <v-row>
          <v-card shaped class="card-container">
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
  }),
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
}
.v-card__subtitle {
  text-align: left;
}
#about {
  padding-top: 70px;
}
.card-container {
  padding: 20px;
}
</style>
