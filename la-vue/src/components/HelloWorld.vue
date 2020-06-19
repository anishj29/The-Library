
<template>

  <v-container>
    <v-row>
      <v-col>
        <v-row style = "width: 50%;" id="mydiv" @mouseover = "hoverr()" @mouseout = "unhoverr()">
          <v-col>
             <v-img src= "@/assets/images/OdysseyCover.jpg" alt="OdysseyCover" style="width:160px; height:220px;" class="-hover-opacity"></v-img>
          </v-col>
          <v-col id = "lol" style = "diplay:none;">random letters </v-col>
        </v-row>
      </v-col>
      
      <v-col style = "border: 1px solid purple">bye</v-col>
      
      <v-col style = "border: 1px solid blue">welcome</v-col>

    </v-row>
    <v-row>
      <v-col id = "someElementId" class = "bg-primary" style = "display:none; border: 1px solid red">Hello</v-col>
       <v-col cols = "4" v-for="(book, i) in books" :key="i">
        <v-img :src="require(`@/assets/images/${book.img}`)" alt="OdysseyCover" style="width:160px; height:220px;" class="-hover-opacity"></v-img>
        <div class="">
        <p><b>{{book.name}}</b></p>
        </div>
      </v-col>
      <v-col cols = "4" v-for="(book, i) in books" :key="i">
        <div class="">
        <p>{{book.description}}</p>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',

    data: () => ({
      books: [
        {
        

          img:"OdysseyCover.jpg",
          name: "The Odyssey",
          description: "The Odyssey is Homer's epic of Odysseus' 10-year struggle to return home after the Trojan War. While Odysseus battles mystical creatures and faces the wrath of the gods, his wife Penelope and his son Telemachus stave off suitors vying for Penelope's hand and Ithaca's throne long enough for Odysseus to return."
        },
        {
          img:"RomeoJulietCover.jpg",
          name: "Romeo and Juliet",
          description: "Romeo and Juliet is a tragedy written by William Shakespeare early in his career about two young star-crossed lovers whose deaths ultimately reconcile their feuding families."
        },
        {
          img:"GreatExpectationsCover.jpg",
          name: "Great Expectations",
          description: "Great Expectations is a novel by Charles Dickens. It depicts the growth and personal development of an orphan named Philip Pirrip. The novel was first published in serial form in Dickens' weekly periodical All the Year Round, from 1 December 1860 to August 1861."
        },
        {
          img:"1984Cover.jpg",
          name: "1984",
          description: "1984 is a dystopian novell by George Orwell published in 1949, which follows the life of Winston Smith, a low ranking member of 'the Party', who is frustrated by the omnipresent eyes of the party, and its ominous ruler Big Brother. 'Big Brother' controls every aspect of people's lives."
        },
        {
          img:"LordOfTheFliesCover.jpg",
          name: "Lord Of the Flies",
          description: "William Golding's 1954 novel Lord of the Flies tells the story of a group of young boys who find themselves alone on a deserted island. They develop rules and a system of organization, but without any adults to serve as a 'civilizing' impulse, the children eventually become violent and brutal."
        }
      ]


    }),
    methods: {
           hoverr() {
            document.getElementById("mydiv").style.width = "100%";
            document.getElementById("lol").style.display = "block";
            },
           unhoverr() {
            document.getElementById("mydiv").style.width = "50%";
            document.getElementById("lol").style.display = "none";

            }
    }
  }
</script>
