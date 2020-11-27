<template>
    <v-col class="sign-up cyan accent-2" style="height: 100%">
        <form @submit.prevent="userRegistration" class="wrap">
          <v-container>
              <h2 class="mt-5" style="text-align:center;">Sign Up</h2>
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
              <v-btn rounded type="submit" dark color="blue-grey darken-4">
                Submit
              </v-btn>
          </v-container>
          <v-container>
            <p class="forgot-password">
              Already registered? 
              <router-link :to="{name: 'Login'}" color="light-blue accent-3">Sign In</router-link>
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

<style lang="scss" scoped>
.wrap{
  margin-left: auto;
  margin-right: auto;
  max-width: 1000px;
}
</style>