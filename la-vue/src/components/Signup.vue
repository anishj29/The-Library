<template>
    <v-col class="sign-up cyan lighten-3">
        <form @submit.prevent="userRegistration">
          <v-container fluid>
              <h3>Register</h3>
              <v-text-field
                v-model="user.name"
                :error-messages="nameErrors"
                :counter="10"
                label="Name"
                required
                @input="$v.name.$touch()"
                @blur="$v.name.$touch()"
                
              ></v-text-field>
              <v-text-field
                v-model="user.email"
                :error-messages="emailErrors"
                label="E-mail"
                required
                @input="$v.email.$touch()"
                @blur="$v.email.$touch()"
              ></v-text-field>
              <v-text-field
                v-model="user.password"
                :error-messages="passwordErrors"
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[rules.required, rules.min]"
                :type="show1 ? 'text' : 'password'"
                name="input-10-1"
                label="Password"
                hint="At least 8 characters"
                counter
                @input="$v.password.$touch()"
                @blur="$v.password.$touch()"
                @click:append="show1 = !show1"

              ></v-text-field>
              <v-btn type="submit" dark color="blue-grey darken-4">
                Sign Up
              </v-btn>
          </v-container>
          <v-container fluid>
            <p class="forgot-password">
              Already registered? 
              <router-link :to="{name: 'Login'}">Sign In</router-link>
            </p>
          </v-container>
        </form>
    </v-col>
</template>

<script>
import firebase from "firebase";

export default {
  data() {
    return {
      show1: false,
        show2: true,
        show3: false,
        show4: false,
        rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 8 characters',
          emailMatch: () => ('The email and password you entered don\'t match'),
      },
      user: {
        name: '',
        email: '',
        password: '',
        
      }
      
    };
  },
  
  methods: {
    userRegistration() {
      firebase
      .auth()
      .createUserWithEmailAndPassword(this.user.email, this.user.password)
      .then((res) => {
        res.user
          .updateProfile({
            displayName: this.user.name
          })
          .then(() => {
            this.$router.push('/login')
          });
      })
      .catch((error) => {
         alert(error.message);
      });
    }
  }
};
</script>