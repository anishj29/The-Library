<template>
<div id="library">
    <v-row class="purple darken-1" style="padding-top: 100px; padding-bottom: 70px;">
        <v-container class="text-center">
            <h1 class="white--text">THE GIANT LIBRARY</h1>
            <v-btn color="blue-grey darken-4 white--text" rounded to="/SignUp">Sign Up To Begin</v-btn>
        </v-container>
    </v-row>
    <v-row justify="center">
        <v-dialog v-model="dialog" persistent max-width="290">
            <v-card>
                <v-card-title>Sign In For More Features</v-card-title>
                <v-card-text>Sign in to save important information like the page number that you're on for each book along with your own annotations.</v-card-text>
                <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn @click="dialog=false" rounded color="blue-grey darken-4" text>No</v-btn>
                <v-btn color="amber darken-2" rounded text to="/login">Login</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row> 
    <div class="cyan accent-2">
        <v-row class="pt-5">
            <v-col cols = "4" v-for="book of books" :key="book['.key']">
                <book :bookTitle = "book.name" :img = "book.imgFile" :pdf = "book.pdfLink" :id = "book.id"></book>
            </v-col>    
        </v-row>
    </div>
</div>
</template>

<script>
import book from '@/components/Books.vue';
import Firebase from '../firebase.js';
import { db } from '@/firebase.js' ;
export default {
    name: 'Library',
    components: {
        book,
    },
    data() {
        return {
            books: [],   
            dialog: false,
            user: this.$store.getters.getLoggedIn,
        }
    },
    computed: {
        userN() {
            return this.$store.getters.getLoggedIn;
        },
    },
    watch: {
        userN: function(ev) {
            if(ev == "N/A") {
                this.dialog = true;
            }
            else {
                this.dialog = false;
            }   
        }
    },
    firestore () {
        db.collection('books').get()
        .then(snapshot => {
        snapshot.forEach(doc => {
          let item = doc.data()
          item.id = doc.id
          this.books.push(item)
        })
      })
  
    }, 
    mounted() {
        Firebase.auth.onAuthStateChanged(user => {
            if (user) {
                this.dialog = false;
            }else {
                this.dialog = true;
            }
        })
    } 
}
</script>