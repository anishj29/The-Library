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
    <v-row justify="center">
        <v-dialog
        v-model="dialog"
        persistent
        max-width="290"
        >
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                color="primary"
                dark
                v-bind="attrs"
                v-on="on"
                >
                Open Dialog
                </v-btn>
            </template>
            <v-card>
                <v-card-title class="headline">
                Use Google's location service?
                </v-card-title>
                <v-card-text>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</v-card-text>
                <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    color="green darken-1"
                    text
                    @click="dialog = false"
                >
                    Disagree
                </v-btn>
                <v-btn
                    color="green darken-1"
                    text
                    to="/login"
                >
                    Login
                </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>    
    
    <v-row>
        <v-spacer></v-spacer>
    </v-row>
    <v-row class="pt-5">
        <v-col cols="6" class="blue-grey darken-4 white--text">
            <div>
                <PDF :book="book"></PDF>
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
                            <v-btn class="mr-2 mt-2" v-for="hi in theChapters" :key="hi">
                                {{hi}}
                            </v-btn>
                    </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel  class="blue-grey darken-4">
                    <v-expansion-panel-header>Chapter Summary</v-expansion-panel-header>
                    <v-expansion-panel-content>{{this.$store.getters.getUser}}
                        (Students search up chapter summaries after reading something because they don't get the meaning of a passage in the chapter or the chapter itself)
                    </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel class="blue-grey darken-4">
                    <v-expansion-panel-header>Annotations For Page {{this.$store.getters.loggedIn}}</v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <v-container>
                            <v-row>
                                <v-radio-group v-model="column" column>
                                    <v-radio v-on:change="getNothing()" label="None" value="radio-1"></v-radio>
                                    <v-radio v-on:change="getSymbolism()" label="Symbolism" value="radio-2"></v-radio>
                                    <v-radio v-on:change="getMetaphor()" label="Metaphor" value="radio-3"></v-radio>
                                </v-radio-group>
                                <v-col class="d-flex align-start flex-column mb-6">
                                    <v-btn @click="bookAnno = book;" v-for="book in callAnno" :key="book" color="primary" class="mb-2">
                                        <h2 class="truncate">{{book.quote}}</h2>
                                    </v-btn>
                                </v-col>
                                <v-col>
                                    <v-card class="mx-auto" max-width="344" outlined>
                                        <v-list-item three-line>
                                        <v-list-item-content>
                                            <div v-if="this.$store.getters.getPage >= book.annoStart && this.$store.getters.getPage < book.annoStop" class="overline mb-4">{{bookAnno.quote}}</div>
                                            <div v-if="this.$store.getters.getPage >= book.annoStart && this.$store.getters.getPage < book.annoStop">{{bookAnno.anno}}</div>
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
import Firebase from '../firebase.js'
export default {
    components:{
        PDF
    },
    data () { return {
        id: this.$route.params.id,
        book:{},
        theChapters: ["Chapter 1", "Chapter 2", "Chapter 3", "Chapter 4", "Chapter 5", "Chapter 6"],
        listChapters: [this.sendChapter1, this.sendChapter2, this.sendChapter3, this.sendChapter4, this.sendChapter5],
        quotes: "",
        helloAnno: {},
        callAnno: [],
        page: this.$store.getters.getPage,
        bookAnno: {},
        img: this.$route.params.imgFile,
        pdf: this.$route.params.pdf,
        title: this.$route.params.name,
        annotationsAnalysis:[],
    }},
    computed: {
        pageNum(){
            return this.$store.state.page;
        }
    },
    watch: {
        pageNum: function (ev) {
            this.callAnno = this.annotationsAnalysis.filter(anno => anno.pageNumber === ev);
            console.log(this.callAnno);      
        }
    },
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
        getNothing() {
            this.bookAnno.quote = this.$store.getters.getQuote;
        },
        getSymbolism() {
            this.$store.commit('changeQuote', this.helloAnno.quote);
            if(this.$store.getters.getPage > this.book.annoStart) {
                if(this.callAnno.symbolism != "N/A") {
                    this.bookAnno.quote = "hello";
                }
                else {
                    this.bookAnno.quote = "No symbolism detected!";
                }
            }
            else {
                this.bookAnno.quote = "N/A";
            }
        },
        getMetaphor() {
            this.$store.commit('changeQuote', this.helloAnno.quote);
            if(this.$store.getters.getPage > this.book.annoStart) {
                if(this.callAnno.symbolism != "N/A") {
                    this.bookAnno.quote = "hi";
                }
                else {
                    this.bookAnno.quote = "No metaphors detected!";
                }
            }
            else {
                this.bookAnno.quote = "N/A";
            }
        }, 
        sendChapter1(){
            switch(this.book.name) {
                case "The Odyssey":
                    this.$store.commit('changePage', 13)
                    break;
                case "The Adventures of Tom Sawyer":
                    this.$store.commit('changePage', 3)
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
                case "The Adventures of Tom Sawyer":
                    this.$store.commit('changePage', 13);
                    break;    
                case "Great Expectations":
                    this.$store.commit('changePage', 9);
                    break;
                default:
                    this.$store.commit('changePage', 10);
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
                case "The Adventures of Tom Sawyer":
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
                case "The Adventures of Tom Sawyer":
                    this.$store.commit('changePage', 29);
                    break;    
                default:
                    this.$store.commit('changePage', 40);
            }
        },
        sendChapter5(){
            switch(this.book.name) {
                case "The Odyssey":
                    this.$store.commit('changePage', 84)
                    break;
                case "1984":
                    this.$store.commit('changePage', 62);
                    break;
                case "Great Expectations":
                    this.$store.commit('changePage', 28);
                    break;
                case "The Adventures of Tom Sawyer":
                    this.$store.commit('changePage', 41);
                    break;    
                default:
                    this.$store.commit('changePage', 50);
            }
        },
    },
    mounted() {
        if(noLoginIn = true) {
        }
        Firebase.auth.onAuthStateChanged(user => {
            if (user) {
                this.$store.commit('loggedIn', "Logged");
                console.log(user);
            }else {
                this.$store.commit('loggedIn', "N/A");
                console.log(user); 
            }
        })
        this.page = 1;
        this.wait()
    },
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