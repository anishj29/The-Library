<template>
    <div class="vue-template cyan lighten-3">
        <form @submit.prevent="forgetPassword">
            <v-container fluid>
              <h3>Forgot Password</h3>
              <div class="form-group">
                  <v-text-field
                    v-model="user.email"
                    label="E-mail address"
                    required
                  ></v-text-field>
              </div>
              <v-btn dark color="blue-grey darken-4" type="submit">Reset password</v-btn >
            </v-container>
        </form>
    </div>
</template>

<script>
import firebase from "firebase";

export default {
  data() {
    return {
      user: {   
        email: ''
      }
    };
  },
  methods: {
    forgetPassword() {
        firebase
        .auth()
        .sendPasswordResetEmail(this.user.email)
        .then(() => {
            alert('Check your registered email to reset the password!')
            this.user = {   
              email: ''
            }
        }).catch((error) => {
          alert(error)
        })
    }
  }
};
</script>