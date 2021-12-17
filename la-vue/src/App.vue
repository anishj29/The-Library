<template>
  <v-app id="body">
    <v-app-bar app color="blue-grey darken-4">
      <v-toolbar-title class="mx-10">
        <img
          src="@/assets/images/Logo.png"
          alt="Logo"
          style="width: 90px; height: 90px"
        />
      </v-toolbar-title>
      <v-btn text dark rounded to="/">Home</v-btn>
      <v-btn text dark rounded to="/library">Library</v-btn>
      <v-btn text dark rounded @click="dialogSignUp">Sign Up</v-btn>
      <v-btn text dark rounded @click="dialogLogIn">Login</v-btn>
      <v-btn text dark rounded to="/contact">Contact Us</v-btn>
    </v-app-bar>

    <v-content>
      <router-view ></router-view>
      <login></login>
      <signup></signup>
    </v-content>
    <v-footer v-bind="localAttrs" :padless="padless">
      <v-card
        flat
        tile
        width="100%"
        class="blue-grey darken-4 white--text text-center"
      >
        <v-card-text>
          <v-btn v-for="icon in icons" :key="icon" class="mx-4 white" icon>
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-text>
        <v-divider class="white"></v-divider>
        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>The LA Catalog</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
import signup from "@/components/Signup.vue";
import login from "@/components/Login.vue";

export default {
  components: {
    signup,
    login,
  },
  data: () => ({
    icons: ["mdi-home", "mdi-email"],
    padless: true,
  }),
  computed: {
    localAttrs() {
      const attrs = {};

      if (this.variant === "default") {
        attrs.absolute = false;
        attrs.fixed = false;
      } else {
        attrs[this.variant] = true;
      }
      return attrs;
    },
  },
  methods: {
    dialogSignUp() {
      this.$store.commit("dialogSignUp", true);
    },
    dialogLogIn() {
      this.$store.commit("dialogLogIn", true);
    },
  },
};
</script>
