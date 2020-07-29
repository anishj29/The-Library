<template>
    <div class = "library">
        <v-row class = "libraryheader" style = "padding-top: 90px; padding-bottom: 60px;">
            <v-container>
                <v-row class="text-center">
                    <v-col class = "text-white">
                        <h1>THE GIANT LIBRARY</h1>
                        <br>
                         <v-btn rounded to="/SignUp">Sign Up To Begin</v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </v-row>
        <v-row class = "librarybg">
            <v-container>
                <v-row>
                    <span class="mr-2 font-weight-bold">Filter:</span>
                    <v-btn rounded>ALL</v-btn>
                    <v-btn rounded>Alphabetical</v-btn>
                    <v-btn rounded>Date</v-btn>
                </v-row>
                <Hello-world></Hello-world>
            </v-container>
        </v-row>
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

<style scoped>
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