<template>
  <v-form class="teal lighten-3 contact-form" @submit.prevent="sendEmail">
    <v-container fluid>
      <v-text-field
        label="Name"
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
        hide-details
      ></v-text-field>
      <v-textarea
        name="message"
        label="Message"
        counter
        maxlength="120"
        full-width
        single-line
      ></v-textarea>
      <v-btn @click="returnToHome()" type="submit" dark color="blue-grey darken-4">Send</v-btn>
    </v-container>  
  </v-form>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
  methods: {
    sendEmail: (e) => {
      emailjs.sendForm('service_1uasidd', 'template_qxicxxu', e.target, 'user_96BbfAz0kirbDn2jH3DSL')
        .then((result) => {
            console.log('SUCCESS!', result.status, result.text);
        }, (error) => {
            console.log('FAILED...', error);
        });
    },
    returnToHome(){
      this.$router.push('/');
    }
  }
}
</script>