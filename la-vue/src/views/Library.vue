<template>
  <div id="library">
    <v-row
      class="black"
      style="padding-top: 100px; padding-bottom: 70px"
    >
      <v-container class="text-center">
        <h1 class="white--text mb-2">The Catalog</h1>
        <v-btn color="blue-grey darken-4 white--text" rounded to="/SignUp"
          >Sign Up To Begin</v-btn
        >
        <v-form class="justify-center" style="width: 400px">
            <v-flex xs12>
              <v-autocomplete
                v-model="searchString"
                :disabled="isUpdating"
                :items="people"
                solo
                chips
                color="orange"
                label="Search"
                item-text="name"
                item-value="name"
                multiple
                clearable
                append-icon="search"
                :append-icon-cb="helo"
                :open-on-click="false"
              >
                
                <template slot="no-data">
                  <v-list-tile>
                    <v-list-tile-title>
                      Search for your favorite
                      <strong>Product</strong>
                    </v-list-tile-title>
                  </v-list-tile>
                </template>
                
                <template
                  slot="selection"
                  slot-scope="data"
                >
                  <v-chip
                    :selected="data.selected"
                    close
                    class="chip--select-multi"
                    @input="data.parent.selectItem(data.item)"
                  >
                    <v-avatar>
                      <img :src="data.item.avatar">
                    </v-avatar>
                    {{ data.item.name }}
                  </v-chip>
                </template>
                <template
                  slot="item"
                  slot-scope="data"
                >
                  <template >
                    <v-list-tile-avatar :tile="data.item.group=='Products'" :size="data.item.group=='Products'?50:40">
                      <img :src="data.item.avatar">
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                      <v-list-tile-title v-html="data.item.name"></v-list-tile-title>
                      <v-list-tile-sub-title v-if="data.item.group=='Products'" v-html="data.item.seller"></v-list-tile-sub-title>
                    </v-list-tile-content>
                  </template>
                </template>
              </v-autocomplete>
            </v-flex>
      </v-form>
      </v-container>
    </v-row>
    <!-- <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="290">
        <v-card>
          <v-card-title>Sign In For More Features</v-card-title>
          <v-card-text
            >Sign in to save important information like the page number that
            you're on for each book along with your own
            annotations.</v-card-text
          >
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              @click="dialog = false"
              rounded
              color="blue-grey darken-4"
              text
              >No</v-btn
            >
            <v-btn color="amber accent-4" rounded text to="/login">Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row> -->
    <div class="amber lighten-2">
      <v-row class="pt-10 pb-10">
        <v-col cols="4" v-for="book of books" :key="book['.key']">
          <book
            :bookTitle="book.name"
            :img="book.imgFile"
            :pdf="book.pdfLink"
            :id="book.id"
          ></book>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import book from "@/components/Books.vue";
import Firebase from "../firebase.js";
import { db } from "@/firebase.js";
export default {
  name: "Library",
  components: {
    book,
  },
  data() {
    return {
      books: [],
      dialog: false,
      user: this.$store.getters.getLoggedIn,
    };
  },
  computed: {
    userN() {
      return this.$store.getters.getLoggedIn;
    },
  },
  watch: {
    userN: function (ev) {
      if (ev == "N/A") {
        this.dialog = true;
      } else {
        this.dialog = false;
      }
    },
  },
  firestore() {
    db.collection("books")
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          let item = doc.data();
          item.id = doc.id;
          this.books.push(item);
        });
      });
  },
  mounted() {
    Firebase.auth.onAuthStateChanged((user) => {
      if (user) {
        this.dialog = false;
      } else {
        this.dialog = true;
      }
    });
  },
};
</script>