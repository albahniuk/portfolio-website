<template>
  <v-container>
    <v-row id="about">
      <v-col cols="12" style="padding: 0;">
        <transition name="welcome" appear>
          <p class="welcomeMsg">Hi, my name is</p>
        </transition>
        <transition name="title" appear>
          <h2 class="mainText">Alba López Folgar.</h2>
        </transition>
        <v-row class="flex-wrap-reverse">
          <v-col cols="12" sm="6" style="margin: auto">
            <transition name="presentation" appear>
              <p class="presentation">I am a Front-End developer.</p>
            </transition>
            <transition name="presentation" appear>
              <v-img
                :src="require('../assets/profile.png')"
                class="my-3 profileImage"
                contain
                :height="260"
                v-if="$vuetify.breakpoint.xs"
              />
            </transition>
            <transition name="description" appear>
              <p class="description">
                <br />I've never stopped engaging my passion to help others and solve problems, before as sociologist and now as web developer.
                <br />I am passionate about building user‑friendly experiences, paying attention to detail. I enjoy turning complex problems into simple, keeping learning and continue challenging myself.
                <br />When I'm not coding, you'll find me traveling, making some ceramic pieces or watercolor drawings, or spending time with some tv series while eating sushi.
              </p>
            </transition>
            <transition-group name="description" tag="a" appear >
              <a
                v-for="(link, i) in contact"
                :key="i"
                :href="link.href"
                class="subheading mx-3"
                target="_blank"
              >
                <v-icon color="var(--primaryColor)">{{link.icon}}</v-icon>
              </a>
            </transition-group>
          </v-col>
          <transition name="description" appear>
            <v-col cols="12" sm="6" class="imageContainer" v-if="!$vuetify.breakpoint.xs">
                <v-img
                  :src="require('../assets/profile.png')"
                  class="my-3 profileImage"
                  contain
                  :height="320"
                  width="350"
                />
            </v-col>
          </transition>
        </v-row>
        <v-row>
          <transition name="skills" appear>
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
          </transition>
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
        name: "JavaScript (ES6+)",
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
        name: "Vuetify",
        icon: "mdi-vuetify"
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
      },
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
  padding-left: 12px;
}
.welcome-enter, .welcome-leave-to, 
.title-enter, .title-leave-to, 
.presentation-enter, .presentation-leave-to,
.description-enter, .description-leave-to,
.skills-enter, .skills-leave-to {
  opacity: 0;
}
.welcome-enter-active, .welcome-leave-active {
  transition: opacity 1s ease-in .5s;
}
.title-enter-active, .title-leave-active {
  transition: opacity 1s ease-in 1s;
}
.presentation-enter-active, .presentation-leave-active {
  transition: opacity 1s ease-in 1.5s;
}
.description-enter-active, .description-leave-active {
  transition: opacity 1s ease-in 2s;
}
.skills-enter-active, .skills-leave-active {
  transition: opacity 1s ease-in 2.5s;
}
.mainText {
  font-family: var(--fontRoboto);
  font-size: 70px;
  font-weight: 600;
  position: relative;
  color: var(--lightFontColor);
  line-height: 1.1;
  padding-left: 12px;
}
.presentation {
  color: var(--fontColor);
  font-size: 46px;
  font-weight: 600;
  line-height: 1.1;
  padding: 0 12px;
}
.sm .mainText {
  font-size: 40px;
}
.sm .presentation {
  font-size: 30px;
}
.description {
  color: var(--fontColor);
  padding-left: 12px;
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
  padding: 200px 22px 0 22px;
}
@media (max-width: 600px) {
  #about {
  padding: 100px 22px 0 22px;
}
}
.skillsContainer {
  margin-top: 40px;
  box-shadow: none;
  background: transparent !important;
}
</style>
