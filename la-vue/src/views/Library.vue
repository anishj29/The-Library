<template>
  <div id="library">
    <v-img class="header"
      max-height="320"
    src="https://firebasestorage.googleapis.com/v0/b/la-project-3fd8e.appspot.com/o/fantasylibraryart-1639629358259-4045.jpg?alt=media&token=d545310a-09bb-4a99-ae0b-0902eac84043"
    >
      <v-container class="text-center">
        <h1 class="white--text mb-2">The Catalog</h1>
        <v-btn color="blue-grey darken-4 white--text" rounded to="/SignUp">
          Sign Up To Begin
        </v-btn>
        <v-form class="justify-center mt-8">
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
                      Enter in the title of a book
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
    </v-img>
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
      searchString:"",
      isUpdating: false,
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
    isUpdating (val) {
      if (val) {
        setTimeout(() => (this.isUpdating = false), 3000)
      }
    }
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

<style scoped>
.header {
  padding-top: 100px;
  filter: brightness(50%);
  text-align: center;
}
.v-select.v-select--is-menu-active .v-input__icon--append .v-icon {
    transform: none;
}
</style>