<template>
  <v-container>
    <v-row id="contact">
      <v-card shaped class="mb-10 card-container">
        <h2 class="sectionTitle mb-5">Get in touch</h2>
        <p class="contactText">
          My inbox is open if you wanna get in touch, talk to me about a project collaboration or just say hi.
        </p>
        <a
          href="mailto:albalopezfolgar@gmail.com"
          class="subheading mx-3"
          target="_blank"
        >
          <v-btn color="var(--primaryColor)" rounded class="sendBtn">
            Say hello
          </v-btn>
        </a>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "ContactSection",

  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      v => !!v || "Name is required",
      v => (v && v.length <= 20) || "Name must be less than 10 characters"
    ],
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],
    message: "",
    messageRules: [v => !!v || "Message is required"],
  }),
  methods: {
    sendMessage() {
      this.$refs.form.validate();
    }
  }
};
</script>

<style scoped lang="scss">
.v-card__subtitle {
  text-align: left;
}
::v-deep {
  .sendBtn {
    color: var(--bgColor);
    font-family: var(--fontMonospace);
    i {
      font-size: 18px;
    }
  }
  .v-input {
    font-family: var(--fontMonospace);
    .v-label, i {
      color: var(--fontColor);
    }
  }
  .theme--light.v-input input, .theme--light.v-input textarea, .theme--light.v-counter {
    color: var(--fontColor);
  }
  .theme--light.v-text-field > .v-input__control > .v-input__slot:before {
    border-color: var(--fontColor);
  }
}
#contact {
  padding: 100px 22px 0px 22px;
}
.card-container {
  padding: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.contactText {
  color: var(--fontColor);
  strong {
    color: var(--primaryColor);
  }
}
.v-card {
  background: var(--lightBgColor);
}
</style>
