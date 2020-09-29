<template>
<div id="library">
    <v-row class="deep-purple darken-1" style="padding-top: 90px; padding-bottom: 60px;">
        <v-container class="text-center">
            <h1 class="white--text">THE GIANT LIBRARY</h1>
            <v-btn color="blue-grey darken-4 white--text" rounded to="/SignUp">Sign Up To Begin</v-btn>
        </v-container>
    </v-row>
    <div class="teal lighten-2">
        <!-- <v-row class="">
            <v-container>
                <span class="mr-2 font-weight-bold">Filter:</span>
                <v-btn @click="sortList()" class="mr-2" rounded>A-Z</v-btn>
                <v-btn class="mr-2" rounded>Date</v-btn>
                <v-btn class="mr-2" rounded>None</v-btn>

            </v-container>
        </v-row> -->
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
        // sortList() {
        //     var list = [], book1, i, switching, shouldSwitch;
        //     for(book1 of this.books){
        //         list.push(book1.name);
        //     }
        //     console.log(list);
        // switching = true;
        // /* Make a loop that will continue until
        // no switching has been done: */
        // while (switching) {
        //     // start by saying: no switching is done:
        //     switching = false;
        //     // Loop through all list-items:
        //     for (i = 0; i < (list.length - 1); i++) {
        //     // start by saying there should be no switching:
        //     shouldSwitch = false;
        //     /* check if the next item should
        //     switch place with the current item: */
        //     if (list[i].innerHTML.toLowerCase() > list[i + 1].innerHTML.toLowerCase()) {
        //         /* if next item is alphabetically
        //         lower than current item, mark as a switch
        //         and break the loop: */
        //         shouldSwitch = true;
        //         break;
        //     }
        //     }
        //     if (shouldSwitch) {
        //         /* If a switch has been marked, make the switch
        //         and mark the switch as done: */
        //         list[i].parentNode.insertBefore(list[i + 1], list[i]);
        //         switching = true;
        //     }
        // }
        // console.log(list);
        // }
    },   
}
</script>