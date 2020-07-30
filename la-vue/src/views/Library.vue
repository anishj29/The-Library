<template>
    <div id="library">
        <v-row class="deep-purple darken-1" style="padding-top: 90px; padding-bottom: 60px;">
                <v-container class="text-center">
                        <h1 class="white--text">THE GIANT LIBRARY</h1>
                        <v-btn color="blue-grey darken-4 white--text" rounded to="/SignUp">Sign Up To Begin</v-btn>
                </v-container>
        </v-row>
        <v-row class="teal lighten-2">
            <v-container>
                    <span class="mr-2 font-weight-bold">Filter:</span>
                    <v-btn rounded>ALL</v-btn>
                    <v-btn rounded>Alphabetical</v-btn>
                    <v-btn rounded>Date</v-btn>
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
    };
</script>