<template>
  <v-container>
    <v-row id="experience">
      <v-col class="mb-10" cols="12">
        <v-row justify="center">
          <v-col cols="12" md="6">
            <h2 class="mb-10 display-2">Education</h2>
            <v-timeline dense clipped reverse>
              <v-timeline-item v-for="(year, i) in training" :key="i" :color="year.color" small>
                <span
                  class="headline font-weight-bold"
                  v-text="year.year"
                  :style="`color: ${year.color}`"
                ></span>
                <div>
                  <h2
                    class="headline font-weight-light mb-4"
                    :style="`color: ${year.color}`"
                  >{{year.title}}</h2>
                  <div>{{year.text}}</div>
                </div>
              </v-timeline-item>
            </v-timeline>
          </v-col>
          <v-col cols="12" md="6">
            <h2 class="mb-10 display-2">Experience</h2>
            <v-timeline dense clipped>
              <v-timeline-item v-for="(year, i) in experience" :key="i" :color="year.color" small>
                <span
                  class="headline font-weight-bold"
                  v-text="year.year"
                  :style="`color: ${year.color}`"
                ></span>
                <div>
                  <h2
                    class="headline font-weight-light mb-4"
                    :style="`color: ${year.color}`"
                  >{{year.title}}</h2>
                  <div>{{year.text}}</div>
                </div>
              </v-timeline-item>
            </v-timeline>
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
    training: [
      {
        color: "rgba(190,118,23,.8)",
        year: "Oct 2018 - Feb 2019",
        title: "Intensive Front-End course",
        text: "Adalab"
      },
      {
        color: "rgba(190,118,23,.8)",
        year: "2014 - 2016",
        title:
          "Master degree in applied sociology: social issues",
        text: "Universidad Complutense de Madrid"
      },
      {
        color: "rgba(190,118,23,.8)",
        year: "2010 - 2014",
        title: "Sociology degree",
        text: "Universidad Complutense de Madrid"
      }
    ],
    experience: [
      {
        color: "rgba(190,118,23,.8)",
        year: "Mar 2019 - Now",
        title: "Front-End developer | NFQ",
        text: "NFQ"
      },
      {
        color: "rgba(190,118,23,.8)",
        year: "2017",
        title: "Sociologist | Freelance",
        text: "Collaboration in social researches"
      },
      {
        color: "rgba(190,118,23,.8)",
        year: "2015 - 2017",
        title: "Internship and volunteering as sociologist | Red Acoge",
        text: "Collaboration in research and reports carried out in the Social Intervention Area."
      },
      {
        color: "rgba(190,118,23,.8)",
        year: "2016",
        title: "Teacher of extracurricular English classes | Activa Idiomas",
        text: ""
      }
    ]
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

#experience {
  padding-top: 70px;
}

</style>
