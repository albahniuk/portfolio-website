<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12" class="about mb-10" id="about">
        <v-img
          :src="require('../assets/profileImage.jpg')"
          class="my-3"
          contain
          height="350"
          width="350"
          style="border-radius: 100%"
        />
        <p>
          Front-End developer junior. Decidí apostar por un cambio tras sentirme estancada en una profesión que no explotaba mis competencias y, tras meses formándome en desarrollo Front-End, estoy lista para nunca dejar de aprender y crecer.
        - Me motivan los proyectos en equipo y valoro las relaciones en el trabajo.
        - Soy concienzuda y responsable. Se puede confiar en mí para realizar un proyecto.
        - Soy creativa, me gusta ofrecer soluciones originales e innovadoras.
        - Gran capacidad adaptativa, de empatía y escucha activa. 
        </p>
      </v-col>

      <v-col class="mb-10" id="projects">
        <h2 class="mb-10 display-2">Projects</h2>
        <v-card elevation="24" max-width="100%" class="mx-auto">
          <v-carousel
            :continuous="false"
            cycle
            :show-arrows="false"
            hide-delimiter-background
            delimiter-icon="mdi-minus"
            height="300"
          >
            <v-carousel-item v-for="(project, i) in projects" :key="i">
              <v-sheet height="100%" tile :color="colors[i]">
                <v-row class="fill-height" align="center" justify="center">
                  <div>
                    <v-card-title class="display-2 mb-5">{{project.title}}</v-card-title>
                    <v-card-subtitle>{{project.subtitle}}</v-card-subtitle>
                    <v-card-actions>
                      <v-btn text outlined :href="project.hrefCode" target="_blank">Show me the code</v-btn>
                      <v-btn text outlined :href="project.hrefProject" target="_blank">Take a look</v-btn>
                      <v-spacer></v-spacer>
                    </v-card-actions>
                  </div>
                </v-row>
              </v-sheet>
            </v-carousel-item>
          </v-carousel>
        </v-card>
      </v-col>

      <v-col class="mb-10" cols="12" id="experience">

        <v-row justify="center">
          <v-col cols="6">
          <h2 class="mb-10 display-2">Education</h2>
          <v-timeline dense clipped reverse>
            <v-timeline-item v-for="(year, i) in training" :key="i" :color="year.color" small>
              <span class="headline font-weight-bold" v-text="year.year" :style="`color: ${year.color}`"></span>
              <div>
                <h2 class="headline font-weight-light mb-4" :style="`color: ${year.color}`">{{year.title}}</h2>
                <div>{{year.text}}</div>
              </div>
            </v-timeline-item>
          </v-timeline>

          </v-col>
            
      <v-col cols="6">
        <h2 class="mb-10 display-2">Experience</h2>
       <v-timeline dense clipped>
            <v-timeline-item v-for="(year, i) in experience" :key="i" :color="year.color" small>
              <span class="headline font-weight-bold" v-text="year.year" :style="`color: ${year.color}`"></span>
              <div>
                <h2 class="headline font-weight-light mb-4" :style="`color: ${year.color}`">{{year.title}}</h2>
                <div>{{year.text}}</div>
              </div>
            </v-timeline-item>
          </v-timeline>
      </v-col>
        </v-row>
      </v-col>



      <v-col class="mb-10" cols="12" id="contact">
        <h2 class="display-2 mb-5">Contact</h2>
        <v-row justify="center">
          <a
            v-for="(link, i) in contact"
            :key="i"
            :href="link.href"
            class="subheading mx-3"
            target="_blank"
          >
            <v-icon color="rgba(190,118,23,.8)">{{link.icon}}</v-icon>
          </a>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({
    colors: [
      "rgba(190,118,23,.8)",
      "rgba(190,118,23,.8)",
      "rgba(190,118,23,.8)",
      "rgba(190,118,23,.8)",
      "rgba(190,118,23,.8)",
      "rgba(190,118,23,.8)",
      "rgba(190,118,23,.8)"
    ],
    projects: [
      {
        title: "Code crushers",
        subtitle: "Collaborative web made with HTML and CSS",
        hrefCode: "https://github.com/Adalab/e-s1-codecrushers",
        hrefProject: "http://beta.adalab.es/e-s1-codecrushers/"
      },
      {
        title: "TV series searcher",
        subtitle: "Made with JavaScript",
        hrefCode:
          "https://github.com/albahniuk/e-s2-evaluacion-final-albahniuk",
        hrefProject: "http://beta.adalab.es/e-s2-evaluacion-final-albahniuk/"
      },
      {
        title: "Find the pair",
        subtitle: "Game made with JavaSpript",
        hrefCode:
          "https://github.com/albahniuk/e-s2-evaluacion-final-bis-albahniuk",
        hrefProject: ""
      },
      {
        title: "Harry potter characters searcher",
        subtitle: "SWA made with React",
        hrefCode: "https://github.com/Adalab/e-s3-evaluacion-final-albahniuk",
        hrefProject: "http://beta.adalab.es/e-s3-evaluacion-final-albahniuk/#/"
      },
      {
        title: "Pokédex",
        subtitle: "Made with React",
        hrefCode: "https://github.com/albahniuk/f-online-pokemon-albahniuk",
        hrefProject: "http://beta.adalab.es/f-online-pokemon-albahniuk/"
      },
      {
        title: "Awesome profile-cards",
        subtitle: "Made with React",
        hrefCode: "https://github.com/Adalab/easley-s3-codekatchers",
        hrefProject: "http://beta.adalab.es/easley-s3-codekatchers/#/"
      },
      {
        title: "Gext",
        subtitle: "Made with React",
        hrefCode: "https://github.com/Adalab/easley-s4-gext",
        hrefProject: "https://gext.es/#/"
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
    ],
    training: [
      {
        color: 'rgba(190,118,23,.8)',
        year: 'Oct 2018 - Feb 2019',
        title: 'Intensive Front-End course',
        text: "Adalab. Skills: html5, css3, JavaScript, git, React, Bootstraap"
      },
      {
        color: 'rgba(190,118,23,.8)',
        year: '2014 - 2016',
        title: "Máster universitario en sociología aplicada: problemas sociales",
        text: "Universidad Complutense de Madrid"
      },
      {
        color: 'rgba(190,118,23,.8)',
        year: '2010 - 2014',
        title: "Grado en Sociología",
        text: "Universidad Complutense de Madrid"
      }
    ],
    experience: [
      {
        color: 'rgba(190,118,23,.8)',
        year: 'Mar 2019 - Now',
        title: 'Front-End developer',
        text: "NFQ"
      },
      {
        color: 'rgba(190,118,23,.8)',
        year: '2017',
        title: "Sociologist freelance",
        text: ""
      },
      {
        color: 'rgba(190,118,23,.8)',
        year: '2015 - 2017',
        title: "Sociologist",
        text: "Red Acoge"
      },
      {
        color: 'rgba(190,118,23,.8)',
        year: '2016',
        title: "Profesora de clases extraescolares de inglés",
        text: "Activa Idiomas"
      }
    ]
  })
};
</script>

<style scoped>
.about {
  display: flex;
  align-items: center;
  justify-content: space-between;
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
</style>
