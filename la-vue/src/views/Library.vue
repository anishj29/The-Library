<template>
<div id="library">
    <v-row class="deep-purple purple darken-2" style="padding-top: 100px; padding-bottom: 70px;">
        <v-container class="text-center">
            <h1 class="white--text">THE GIANT LIBRARY</h1>
            <v-btn color="blue-grey darken-4 white--text" rounded to="/SignUp">Sign Up To Begin</v-btn>
        </v-container>
    </v-row>
    <div class="cyan darken-1">
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
import { db } from '@/firebase.js' ;
export default {
    name: 'Library',
    components: {
        book,
    },
    data() {
        return {
            books: [],   
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
    methods: {
    
    },   
}
</script>