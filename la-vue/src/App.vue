<template>
  <v-app id="body">
    <v-app-bar app color="blue-grey darken-4">
      <v-toolbar-title class="mx-10">
        <img
          src="@/assets/images/Logo.png"
          alt="Logo"
          style="width: 60px; height: 60px"
        />
      </v-toolbar-title>
      <v-btn text dark rounded to="/">Home</v-btn>
      <v-btn text dark rounded to="/library">Library</v-btn>
      <v-btn text dark rounded @click="dialogSignUp = true">Sign Up</v-btn>
      <v-btn text dark rounded @click="dialogLogIn = true">Login</v-btn>
      <v-btn text dark rounded to="/contact">Contact</v-btn>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
      <v-dialog v-model="dialogSignUp" persistent max-width="290">
        <v-card>
          <form @submit.prevent="userRegistration" class="wrap">
            <v-container>
              <h2 class="mt-5" style="text-align: center">Sign Up</h2>
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
                <router-link :to="{ name: 'Login' }" color="light-blue accent-3"
                  >Sign In</router-link
                >
              </p>
            </v-container>
          </form>
        </v-card>
      </v-dialog>
      <v-dialog v-model="dialogLogIn" persistent max-width="290">
        <v-card>
          <form @submit.prevent="userLogin" class="wrap">
            <v-container>
              <h2 class="mt-5" style="text-align: center">Sign In</h2>
              <v-text-field
                v-model="user.email"
                :error-messages="emailErrors"
                label="Email"
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
                @input="$v.password.$touch()"
                @blur="$v.password.$touch()"
                @click:append="show1 = !show1"
              ></v-text-field>
              <div class="d-flex">
                <v-btn
                  class="mr-md-3"
                  rounded
                  type="submit"
                  dark
                  color="blue-grey darken-4"
                  >Sign In</v-btn
                >
                <hello></hello>
              </div>
            </v-container>
            <v-container>
              <p class="forgot-password mt-2 mb-5">
                <router-link to="/forgot-password"
                  >Forgot password?</router-link
                >
              </p>
            </v-container>
          </form>
        </v-card>
      </v-dialog>
    </v-content>
  </v-app>
</template>

<script>
import firebase from "firebase";
import hello from "@/components/Hello.vue";

export default {
  components: {
    hello
  },
  data() {
    return {
      show1: false,
      show2: true,
      show3: false,
      show4: false,
      dialogSignUp: false,
      dialogLogIn: false,
      rules: {
        required: (value) => !!value || "Required.",
        min: (v) => v.length >= 8 || "Min 8 characters",
        emailMatch: () => "The email and password you entered don't match",
      },
      user: {
        name: "",
        email: "",
        password: "",
      },
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
              displayName: this.user.name,
            })
            .then(() => {
              this.dialogSignUp = false;
              this.dialogLogIn = true;
            });
        })
        .catch((error) => {
          alert(error.message);
        });
      this.dialogSignUp = false;  
    },
    userLogin() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.user.email, this.user.password)
        .then(() => {
          this.dialogLogIn = false;  
          this.$router.push("/library");
        })
        .catch((error) => {
          alert(error.message);
        });
    },
  },
};
</script>
