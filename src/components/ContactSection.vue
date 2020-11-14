<template>
  <v-container>
    <v-row id="contact">
      <v-card shaped class="mb-10 card-container">
        <v-col cols="12">
          <h2 class="display-2 mb-5">Contact</h2>
          <v-row justify="center">
            <p>
              If you wanna get in touch, talk to me about a project collaboration or just say hi, fill up the awesome form below or send an email to
              <strong>albalopezfolgar@gmail.com</strong>
            </p>
          </v-row>
          <v-form ref="form" v-model="valid" lazy-validation action="https://formspree.io/f/xzbkvgrz" method="POST">
            <v-row>
              <v-col cols="6">
                <v-text-field
                  v-model="name"
                  :rules="nameRules"
                  :counter="20"
                  label="First name"
                  name="name"
                  prepend-icon="mdi-account"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="E-mail"
                  prepend-icon="mdi-at"
                  name="_replyto"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-textarea
                  class="mx-2"
                  label="Message"
                  name="message"
                  :rules="messageRules"
                  rows="1"
                  prepend-icon="mdi-comment-text"
                  required
                ></v-textarea>
              </v-col>
            </v-row>
            <v-btn :disabled="!valid" @click="sendMessage" color="rgba(190,118,23,.8)" type="submit" rounded>
              <v-icon>mdi-email-send-outline</v-icon>
              Send
              </v-btn>
          </v-form>
        </v-col>
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

<style scoped>
h2 {
  font-family: "Roboto", sans-serif;
  font-size: 26px;
  position: relative;
}
.v-card__subtitle {
  text-align: left;
}
#contact button {
  color: white;
}
#contact {
  padding: 0 22px;
}
#contact button i {
  margin-right: 5px;
  font-size: 18px;
}
.card-container {
  padding: 20px;
}
</style>
