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
            <v-text-field outlined dense label="Solo" placeholder="Search Bar" solo>
            </v-text-field>
        </v-col>
    </v-row>
    <v-row class="pt-5">
        <v-col cols="7"  class="blue-grey darken-4 white--text">
            <div height="700">
                <PDF :book="book" @page="summaryPage"></PDF>
            </div>
        </v-col>
        <v-col>
            <v-expansion-panels dark>
                <v-expansion-panel class="blue-grey darken-4">
                    <v-expansion-panel-header> Description </v-expansion-panel-header>
                    <v-expansion-panel-content>{{book.description}}</v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel  class="blue-grey darken-4">
                    <v-expansion-panel-header>Table Of Contents</v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <v-btn class="mr-2" @click="sendChapter1()">Chapter 1</v-btn>
                        <v-btn class="mr-2" @click="sendChapter2()">Chapter 2</v-btn>
                        <v-btn class="mr-2" @click="sendChapter3()">Chapter 3</v-btn>
                        <v-btn class="mr-2" @click="sendChapter4()">Chapter 4</v-btn>
                    </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel  class="blue-grey darken-4">
                    <v-expansion-panel-header>Chapter Summary</v-expansion-panel-header>
                    <v-expansion-panel-content>{{ summary }}(Students search up chapter summaries after reading something because they don't get the meaning of a passage in the chapter or the chapter itself)

                    </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel  class="blue-grey darken-4">
                    <v-expansion-panel-header>Annotations For Page {{this.$store.getters.getPage}}</v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <v-container>
                            <v-row>
                                <v-col class="d-flex align-start flex-column mb-6">
                                    <v-btn @click="bookAnno = book" v-for="book in callAnno" :key="book" color="primary" class="mb-2">
                                        <h2 class="truncate">{{book.quote}}</h2>
                                    </v-btn>
                                </v-col>
                                <v-col>
                                    <v-card class="mx-auto" max-width="344" outlined>
                                        <v-list-item three-line>
                                        <v-list-item-content>
                                            <div v-if="this.$store.getters.getPage > book.annoStart && this.$store.getters.getPage < book.annoStop" class="overline mb-4">{{bookAnno.quote}}</div>
                                            <div v-if="this.$store.getters.getPage > book.annoStart && this.$store.getters.getPage < book.annoStop">{{bookAnno.anno}}</div>
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
        callAnno: [],
        dict: [],
        page: this.$store.getters.getPage,
        chap1: "",
        bookAnno: {},
        summary: "hello",
        img: this.$route.params.imgFile,
        pdf: this.$route.params.pdf,
        title: this.$route.params.name,
        filter: "Please select a filter",
        annotationsAnalysis:[],
    }},
    methods: {
        async wait() {
            await db.collection('books').doc(this.id).get()
            .then(snapshot => {
                this.book = snapshot.data()
            })
            await db.collection('books').doc(this.id).collection('annotations').get()
            .then(snapshot => {
                snapshot.forEach( doc => {
                    this.annotationsAnalysis.push(doc.data());
                }) 
            })  
        },  
        summaryPage(value) {
            this.summary = value;
        },
        sendChapter1(){
            switch(this.book.name) {
                case "The Odyssey":
                    this.$store.commit('changePage', 13)
                    break;
                case "1984":
                    this.$store.commit('changePage', 3);
                    break;
                case "Great Expectations":
                    this.$store.commit('changePage', 2);
                    break;
                default:
                    this.$store.commit('changePage', 1);
            }
        },
        sendChapter2(){
            switch(this.book.name) {
                case "The Odyssey":
                    this.$store.commit('changePage',27);
                    break;
                case "1984":
                    this.$store.commit('changePage', 26);
                    break;
                case "Great Expectations":
                    this.$store.commit('changePage', 9);
                    break;
                default:
                    this.$store.commit('changePage', 1);
            }
        },
        sendChapter3(){
            switch(this.book.name) {
                case "The Odyssey":
                    this.$store.commit('changePage', 41);
                    break;
                case "1984":
                    this.$store.commit('changePage', 37);
                    break;
                case "Great Expectations":
                    this.$store.commit('changePage', 21);
                    break;
                default:
                    this.$store.commit('changePage', 21);
            }
        },
        sendChapter4(){
            switch(this.book.name) {
                case "The Odyssey":
                    this.$store.commit('changePage', 57)
                    break;
                case "1984":
                    this.$store.commit('changePage', 48);
                    break;
                case "Great Expectations":
                    this.$store.commit('changePage', 28);
                    break;
                default:
                    this.$store.commit('changePage', 1);
            }
        },
    },
    mounted() {
        this.wait()
    },
    watch: {
        page: function () {
            this.callAnno = this.annotationsAnalysis.filter(anno => anno.pageNumber === this.$store.getters.getPage);
            console.log(this.callAnno);

           
        }
    }
}
</script>

<style scoped>
    .truncate {
        width: 100px;
        overflow: hidden;
        text-overflow: ellipsis;
        margin: 0;
    }
</style>