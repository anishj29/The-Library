<template>
  <v-container fluid class="black white--text" style="height: 100%">
    <h2 class="mt-5" style="text-align: center">Contact</h2>
    <v-form @submit.prevent="sendEmail" class="wrap">
      <v-text-field
        label="Name"
        dark
        name="user_name"
        single-line
        full-width
        hide-details
      ></v-text-field>
      <v-divider></v-divider>
      <v-text-field
        label="Email"
        name="user_email"
        single-line
        full-width
        dark
        hide-details
      ></v-text-field>
      <v-textarea
        name="message"
        label="Message"
        counter
        dark
        maxlength="120"
        full-width
        single-line
      ></v-textarea>
      <v-btn
        @click="returnToHome()"
        type="submit"
        dark
        color="blue-grey darken-4"
        >Send</v-btn
      >
    </v-form>
  </v-container>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
  methods: {
    sendEmail: (e) => {
      emailjs
        .sendForm(
          "service_1uasidd",
          "template_qxicxxu",
          e.target,
          "user_96BbfAz0kirbDn2jH3DSL"
        )
        .then(
          (result) => {
            console.log("SUCCESS!", result.status, result.text);
          },
          (error) => {
            console.log("FAILED...", error);
          }
        );
    },
    returnToHome() {
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss" scoped>
.wrap {
  margin-left: auto;
  margin-right: auto;
  max-width: 1000px;
}
</style>