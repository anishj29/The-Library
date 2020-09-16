<template>
<v-container fluid class="px-12 light-blue lighten-3">
    <v-row class="pt-8">
        <v-col cols="1">
            <v-img max-width="100%" :src="book.imgFile"></v-img>
        </v-col>
        <v-col>
            <h1 class="mt-10" style="padding-left: 400px">{{book.name}}</h1>
        </v-col>
    </v-row>
    <v-row>
        <v-spacer></v-spacer>
        <v-col cols="4">
            <v-text-field class="" outlined dense label="Solo" placeholder="Search Bar" solo>
            </v-text-field>
        </v-col>
    </v-row>
    <v-row class="pt-5">
        <v-col cols="7"  class="blue-grey darken-4 white--text">
            <div height="700">
                <PDF :book = "book" @page="summaryPage" ></PDF>
            </div>
        </v-col>
        <v-col>
            <v-expansion-panels dark>
                <v-expansion-panel  class="blue-grey darken-4">
                    <v-expansion-panel-header> Description </v-expansion-panel-header>
                    <v-expansion-panel-content>{{book.description}}</v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel  class="blue-grey darken-4">
                    <v-expansion-panel-header>Filter</v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <v-btn class="mr-1" v-on:click="filter = book.locations">Locations</v-btn>
                        <v-btn v-on:click="filter = book.mainCharacters">Characters</v-btn>
                        <p class="mt-5">{{filter}}</p>
                    </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel  class="blue-grey darken-4">
                    <v-expansion-panel-header>Chapter Summary</v-expansion-panel-header>
                    <v-expansion-panel-content>{{ summary }}(Students search up chapter summaries after reading something because they don't get the meaning of a passage in the chapter or the chapter itself)

                    </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel  class="blue-grey darken-4">
                    <v-expansion-panel-header>Annotations On Page {{page}}</v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <v-container>
                            <h1>{{ }}</h1>
                            <v-row>
                                <v-col class="d-flex align-start flex-column mb-6">
                                    <v-btn @click="bookAnno = book" v-for="book in annotationsAnalysis" :key="book" color="primary" class="mb-2">{{book.title}}</v-btn>
                                </v-col>
                                <v-col>
                                     <v-card
                                        class="mx-auto"
                                        max-width="344"
                                        outlined
                                    >
                                        <v-list-item three-line>
                                        <v-list-item-content>
                                            <div class="overline mb-4">OVERLINE</div>
                                            <v-list-item-subtitle>{{bookAnno.title}}</v-list-item-subtitle>
                                        </v-list-item-content>
                                        </v-list-item>
                                    </v-card>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>
        </v-col>
    </v-row>
</v-container>

</template>

<script>
import PDF from './PDF.vue'; 
import { db } from '@/firebase.js';

export default {
    components:{
        PDF
    },
    data () { return {
        id: this.$route.params.id,
        book:{},
        annotationsAnalysis:[
        {title: "quote1",annotation: "annotation1"},
        {title: "quote2",annotation: "annotation2"}],
        page: null,
        bookAnno: {},
        summary: '',
        img: this.$route.params.imgFile,
        pdf: this.$route.params.pdf,
        title: this.$route.params.name,
        filter: "Please select a filter",
    }},
    methods: {
        async wait() {
            await db.collection('books').doc(this.id).get()
            .then(snapshot => {
                this.book = snapshot.data()
            })
        },
        summaryPage(value, page) {
            this.summary = value;
            this.page = page;
        }
    },
    mounted() {
        this.wait()
    },
}
</script>
