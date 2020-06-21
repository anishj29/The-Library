<template>
    <div class = "library">
        <div class = "libraryheader" style = "padding-top: 110px; padding-bottom: 68px;">
            <v-container>
                <v-row class="text-center">
                    <v-col class = "text-white">
                        <h1>THE GIANT LIBRARY</h1>
                        <br>
                         <v-btn rounded to="/SignUp">Sign Up To Begin</v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </div>
        <div class = "librarybg">
            <v-container>
                <v-row>
                    <b><span class="text-right mr-2">Filter:</span></b>
                    <button class=" btn-dark text-white mr-1">ALL</button>
                    <button class=" btn-dark text-white mr-1">Alphabetical</button>
                    <button class=" btn-dark text-white">Date</button>
                </v-row>
           
            <Hello-world></Hello-world>
            <!-- <div class="mt-3 row solid">
                <div class="margin-bottom col">
                    <img src="images/OdysseyCover.jpg" alt="OdysseyCover" style="width:160px; height:220px;" class="-hover-opacity">
                    <div class="">
                    <p><b>The Odyssey</b></p>
                    <p>The Odyssey is Homer's epic of Odysseus' 10-year struggle to return home after the Trojan War. While Odysseus battles mystical creatures and faces the wrath of the gods, his wife Penelope and his son Telemachus stave off suitors vying for Penelope's hand and Ithaca's throne long enough for Odysseus to return.</p>
                    </div>
                </div>
                <div class="container margin-bottom col ">
                    <img src="images/RomeoJulietCover.jpg" alt="RomeoJulietCover" style="width:160px;height:220px;" class="-hover-opacity">
                    <div class="">
                    <p><b>Romeo and Juliet</b></p>
                    <p>Romeo and Juliet is a tragedy written by William Shakespeare early in his career about two young star-crossed lovers whose deaths ultimately reconcile their feuding families. </p>
                    </div>
                </div>
                <div class="container col ">
                    <img src="images/GreatExpectationsCover.jpg" alt="GreatExpectationsCover" style="width:160px;height:220px;">
                    <div class="">
                    <p><b>Great Expectations</b></p>
                    <p>Great Expectations is a novel by Charles Dickens. It depicts the growth and personal development of an orphan named Philip Pirrip ("Pip"). The novel was first published in serial form in Dickens' weekly periodical All the Year Round, from 1 December 1860 to August 1861.</p>
                    </div>
                </div>
            </div>
            <div class="mt-3 row solid">
                <div class="margin-bottom col ">
                <img src="images/1984Cover.jpg" alt="1984Cover" style="width:160px; height:220px;">
                <div class="">
                    <p><b>1984</b></p>
                    <p>1984 is a dystopian novell by George Orwell published in 1949, which follows the life of Winston Smith, a low ranking member of 'the Party', who is frustrated by the omnipresent eyes of the party, and its ominous ruler Big Brother. 'Big Brother' controls every aspect of people's lives.</p>
                </div>
                </div>
                <div class="container margin-bottom col ">
                <img src="images/LordOfTheFliesCover.jpg" alt="LordOfTheFliesCover" style="width:160px;height:220px;">
                <div class="">
                    <p><b>Lord Of The Flies</b></p>
                    <p>William Golding's 1954 novel Lord of the Flies tells the story of a group of young boys who find themselves alone on a deserted island. They develop rules and a system of organization, but without any adults to serve as a 'civilizing' impulse, the children eventually become violent and brutal.</p>
                </div>
                </div>
                <div class="third container col">
                <img src="/images/nature.jpg" alt="" style="width:160px;height:220px;">
                <div class="">
                    <p><b></b></p>
                    <p></p>
                </div>
                </div>
            </div> -->
            </v-container>
        </div>
        <!-- End of container tag -->
    </div>
</template>

<script>
   import HelloWorld from '@/components/HelloWorld.vue';

    export default {
     name: 'Library',

        components: {
             HelloWorld,
        },

        data: () => ({
            
        }),
    };
</script>

<style lang="stylus" scoped>
    body,h1,h2,h3,h4,h5,h6 {font-family: "Lato", sans-serif}
    .w3-bar,h1,button {font-family: "Montserrat", sans-serif}
    .fa-anchor,.fa-coffee {font-size:200px}
    .homeheader{
        background-color: #993399;
    }
    .homebg {
        background-color: #14ade0;
    }
    .libraryheader{
        background-color: #993399;
    }
    .librarybg {
        background-color: #84df53;
    }
    .solid {
        border-style: solid;
    }


    body,h1,h2,h3,h4,h5,h6 {font-family: "Raleway", sans-serif}
</style>