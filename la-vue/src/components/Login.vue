<template>
  <v-dialog v-model="dialogLogIn" persistent max-width="290">
    <v-card>
      <v-toolbar dark color="primary">
        <v-btn icon dark @click="closeDialog">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>
      <form @submit.prevent="userLogin" dark class="blue-grey darken-4">
        <v-container>
          <h2 class="mt-5" style="text-align: center; color: white">Sign In</h2>
          <v-text-field
            v-model="user.email"
            label="Email"
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
            dark
            @input="$v.password.$touch()"
            @blur="$v.password.$touch()"
            @click:append="show1 = !show1"
          ></v-text-field>
          <div class="d-flex">
            <v-btn class="mr-md-3" rounded type="submit" dark>Sign In</v-btn>
            <hello></hello>
          </div>
        </v-container>
        <v-container>
          <div>
            <router-link
              to="/forgot-password"
              >Forgot Password?</router-link>
          </div>
        </v-container>
      </form>
    </v-card>
  </v-dialog>
</template>


<script>
import firebase from "firebase";
import hello from "../components/Hello.vue";
export default {
  components: {
    hello,
  },
  data() {
    return {
      show1: false,
      rules: {
        required: (value) => !!value || "Required.",
        min: (v) => v.length >= 8 || "Min 8 characters",
      },
      user: {
        email: "",
        password: "",
      },
      dialogLogIn: false,
    };
  },
  computed: {
    dialog() {
      return this.$store.getters.getDialogLogIn;
    },
  },
  watch: {
    dialog: function (ev) {
      if (ev === true) {
        this.dialogLogIn = true;
      } else {
        this.dialogLogIn = false;
      }
    },
  },
  methods: {
    userLogin() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.user.email, this.user.password)
        .then(() => {
          this.$router.push("/library");
          this.$store.commit('dialogLogIn', false);
        })
        .catch((error) => {
          alert(error.message);
        });
    },
    closeDialog() {
      this.$store.commit("dialogLogIn", false);
    },
  },
};
</script>