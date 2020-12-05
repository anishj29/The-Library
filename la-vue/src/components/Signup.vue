<template>
  <v-dialog v-model="dialogSignUp" persistent max-width="290">
    <v-card>
      <v-toolbar dark color="primary">
        <v-btn icon dark @click="closeDialog">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>
      <form @submit.prevent="userRegistration" dark class="blue-grey darken-4">
        <v-container>
          <h2 class="mt-5" dark style="text-align: center; color: white">
            Sign Up
          </h2>
          <v-text-field
            v-model="user.name"
            :counter="10"
            label="Name"
            dark
            required
            @input="$v.name.$touch()"
            @blur="$v.name.$touch()"
          ></v-text-field>
          <v-text-field
            v-model="user.email"
            label="E-mail"
            required
            dark
            @input="$v.email.$touch()"
            @blur="$v.email.$touch()"
          ></v-text-field>
          <v-text-field
            v-model="user.password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="Password"
            hint="At least 8 characters"
            counter
            dark
            @input="$v.password.$touch()"
            @blur="$v.password.$touch()"
            @click:append="show1 = !show1"
          ></v-text-field>
          <v-btn rounded type="submit" dark> Submit </v-btn>
        </v-container>
        <v-container>
          <div style="color: white">
            Already registered?
            <v-btn @click="sendLogin" class="primary" dark style="width: 20px; height: 20px">Sign In</v-btn>
          </div>
        </v-container>
      </form>
    </v-card>
  </v-dialog>
</template>

<script>
import firebase from "firebase";

export default {
  data() {
    return {
      show1: false,
      rules: {
        required: (value) => !!value || "Required.",
        min: (v) => v.length >= 8 || "Min 8 characters",
      },
      user: {
        name: "",
        email: "",
        password: "",
      },
      dialogSignUp: false,
    };
  },
  computed: {
    dialog() {
      return this.$store.getters.getDialogSignUp;
    },
  },
  watch: {
    dialog: function (ev) {
      if (ev === true) {
        this.dialogSignUp = true;
      } else {
        this.dialogSignUp = false;
      }
    },
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
    },
    closeDialog() {
      this.$store.commit("dialogSignUp", false);
    },
    sendLogin() {
      this.$store.commit("dialogLogIn", true);
      this.$store.commit("dialogSignUp", false);
    },
  },
};
</script>