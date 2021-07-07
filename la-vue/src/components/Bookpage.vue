<template>
  <v-container
    fluid
    class="container px-12 cyan lighten-2"
    style="height: 100%"
  >
    <v-row class="pt-8">
      <v-col cols="1">
        <v-img max-width="100%" :src="book.imgFile"></v-img>
      </v-col>
      <v-col>
        <h1 class="mt-10" style="padding-left: 400px">{{ book.name }}</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-spacer></v-spacer>
    </v-row>
    <v-row class="pt-5">
      <v-col cols="6" class="pdf black white--text">
        <PDF class="pdf" :book="book"></PDF>
      </v-col>
      <v-col>
        <v-expansion-panels dark>
          <v-expansion-panel class="dark">
            <v-expansion-panel-header> Description </v-expansion-panel-header>
            <v-expansion-panel-content>{{
              book.description
            }}</v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel class="dark">
            <v-expansion-panel-header
              >Table Of Contents</v-expansion-panel-header
            >
            <v-expansion-panel-content>
              <v-btn
                class="mr-2 mt-2"
                v-for="(chapter, i) in theChapters"
                :key="i"
                @click="chapter.list"
              >
                {{ chapter.chapter }}
              </v-btn>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel class="dark">
            <v-expansion-panel-header>Chapter Summary</v-expansion-panel-header>
            <v-expansion-panel-content>
              <div v-for="i in chapterSummary" :key="i">
                <div v-if="i.chapterNumber == 1">
                  {{ i.chapter }}
                </div>
              </div>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel class="dark">
            <v-expansion-panel-header
              >Annotations For Page {{ page }}</v-expansion-panel-header
            >
            <v-expansion-panel-content>
              <v-container>
                <v-row>
                  <v-radio-group row>
                    <v-radio
                      v-on:change="getNothing()"
                      label="None"
                      value="1"
                    ></v-radio>
                    <v-radio
                      v-on:change="getSymbolism()"
                      label="Symbolism"
                      value="2"
                    ></v-radio>
                    <v-radio
                      v-on:change="getMetaphor()"
                      label="Metaphor"
                      value="3"
                    ></v-radio>
                  </v-radio-group>
                  <v-col style="width: 40px">
                    <VueSlickCarousel v-bind="settings">
                      <div v-for="(book, i) in callAnno" :key="i">
                        <v-card outlined>
                          <v-list-item three-line>
                            <v-list-item-content>
                              <h2 class="overline mb-4">
                                {{ book.quote }}
                              </h2>
                              <p>
                                {{ book.anno }}
                              </p>
                            </v-list-item-content>
                          </v-list-item>
                        </v-card>
                      </div>
                    </VueSlickCarousel>
                  </v-col>
                </v-row>
              </v-container>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel class="dark">
            <v-expansion-panel-header>Characters</v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-radio-group row>
                <v-radio
                  v-on:change="firstChar = true"
                  label="All"
                  value="radio-1"
                ></v-radio>
                <v-radio
                  v-on:change="firstChar = false"
                  label="On Page"
                  value="radio-2"
                ></v-radio>
              </v-radio-group>
              <v-container>
                <v-row>
                  <v-col style="width: 40px">
                    <transition name="fade" mode="out-in">
                      <VueSlickCarousel
                        v-if="firstChar == true"
                        key="firstDiv"
                        v-bind="settings"
                      >
                        <div v-for="(char, i) in firstCharArray" :key="i">
                          <v-card outlined>
                            <v-list-item three-line>
                              <v-list-item-content>
                                <h2 class="overline mb-4">
                                  {{ char.name }}
                                </h2>
                                <p>
                                  {{ char.bio }}
                                </p>
                              </v-list-item-content>
                            </v-list-item>
                            <v-card-actions>
                              <v-btn
                                v-for="ann in checkID(char)"
                                :key="ann"
                              ></v-btn>
                            </v-card-actions>
                          </v-card>
                        </div>
                      </VueSlickCarousel>
                      <VueSlickCarousel
                        v-else
                        key="secondDiv"
                        v-bind="settings"
                      >
                        <div v-for="char in secondCharArray" :key="char">
                          <v-card outlined>
                            <v-list-item three-line>
                              <v-list-item-content>
                                <h2 class="overline mb-4">
                                  {{ char.name }}
                                </h2>
                                <p>
                                  {{ char.bio }}
                                </p>
                              </v-list-item-content>
                            </v-list-item>
                            <v-card-actions>
                              <v-btn>{{ char.id }}</v-btn>
                            </v-card-actions>
                          </v-card>
                        </div>
                      </VueSlickCarousel>
                    </transition>
                  </v-col>
                </v-row>
              </v-container>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel class="dark">
            <v-expansion-panel-header
              >Create Annotations</v-expansion-panel-header
            >
            <v-expansion-panel-content>
              <v-radio-group column>
                <v-radio
                  v-on:change="fire = false"
                  label="Character"
                  value="radio-1"
                />
                <v-radio
                  v-on:change="fire = true"
                  label="Annotation"
                  value="radio-2"
                />
              </v-radio-group>
              <div>
                <p>
                  The Odyssey - BookDoc: ZsZR1rFb7Vh9iRAxXFvx CharDoc:
                  KeJSIOyk8QJxTduftxgB
                </p>
                <p>
                  1984 - BookDoc: eUTa0NvdkgWK9i9kN0RE CharDoc:
                  bfKRVdlHmIFq5HnuknUq
                </p>
                <p>
                  Adventures of Tom Sawyer - BookDoc: Ay5xq0VnuBirb1OAZuc9
                  CharDoc: pLq9LQklnGxJhCebfvdz
                </p>
              </div>
              <transition name="fade" mode="out-in">
                <form
                  v-if="fire == false"
                  key="firstDiv"
                  @submit.prevent="characterCollection"
                >
                  <v-text-field label="Document" v-model="docName">
                  </v-text-field>
                  <v-text-field label="Name" v-model="name"> </v-text-field>
                  <v-text-field label="Bio" v-model="bio"> </v-text-field>
                  <v-btn type="submit">Click</v-btn>
                </form>
                <form
                  v-else
                  key="seconDiv"
                  @submit.prevent="bookAnnoCollection"
                >
                  <v-text-field label="Collection" v-model="collectionName">
                  </v-text-field>
                  <v-text-field label="Document" v-model="docName">
                  </v-text-field>
                  <v-text-field label="Page" v-model="pageNew"> </v-text-field>
                  <v-text-field label="Quote" v-model="quoteSend">
                  </v-text-field>
                  <v-text-field label="Annotation" v-model="annoSend">
                  </v-text-field>
                  <v-btn type="submit">Click</v-btn>
                </form>
              </transition>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import PDF from "./PDF.vue";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import { db } from "@/firebase.js";

export default {
  components: {
    PDF,
    VueSlickCarousel,
  },
  data() {
    return {
      id: this.$route.params.id,
      book: {},
      theChapters: [
        { chapter: "Chapter 1", list: this.sendChapter1 },
        { chapter: "Chapter 2", list: this.sendChapter2 },
        { chapter: "Chapter 3", list: this.sendChapter3 },
        { chapter: "Chapter 4", list: this.sendChapter4 },
        { chapter: "Chapter 5", list: this.sendChapter5 },
        { chapter: "Chapter 6", list: this.sendChapter6 },
      ],
      helloAnno: {},
      callAnno: [],
      page: this.$store.getters.getPage,
      img: this.$route.params.imgFile,
      pdf: this.$route.params.pdf,
      title: this.$route.params.name,
      annotationsAnalysis: [],
      chapterSummary: [],
      charID: {},
      firstCharArray: [],
      secondCharArray: [],
      firstChar: true,
      docName: "",
      bio: "",
      annoSend: "",
      fire: false,
      quoteSend: "",
      pageNew: 0,
      collectionName: "",
      subcollection: "",
      name: "",
      settings: {
        centerMode: true,
        centerPadding: "20px",
        focusOnSelect: true,
        infinite: true,
        slidesToShow: 1,
        speed: 500,
      },
    };
  },
  computed: {
    pageNum() {
      return this.$store.state.page;
    },
  },
  methods: {
    checkID(char) {
      var arr = this.annotationsAnalysis;
      arr = arr.filter(function (e) {
        if (char.annotationID) {
          return char.annotationID.includes(e.id);
        }
      });
      console.log(arr[0]);
      return arr;
    },
    async wait() {
      await db
        .collection("books")
        .doc(this.id)
        .get()
        .then((snapshot) => {
          this.book = snapshot.data();
        });
      await db
        .collection("books")
        .doc(this.id)
        .collection("annotations")
        .get()
        .then((snapshot) => {
          snapshot.forEach((doc) => {
            var d = doc.data();
            d.id = doc.id;
            this.annotationsAnalysis.push(d);
          });
        });
      await db
        .collection("characters")
        .where("bookTitle", "==", this.book.name)
        .get()
        .then((snapshot) => {
          snapshot.forEach((doc) => {
            this.firstCharArray.push(doc.data());
          });
        });
      await db
        .collection("characters")
        .where("numInPage", "array-contains", this.page)
        .get()
        .then((snapshot) => {
          snapshot.forEach((doc) => {
            this.secondCharArray.push(doc.data());
          });
        });
      await db
        .collection("books")
        .doc(this.id)
        .collection("chapters")
        .get()
        .then((snapshot) => {
          snapshot.forEach((doc) => {
            this.chapterSummary.push(doc.data());
          });
        });
    },
    getNothing() {
      this.bookAnno.quote = this.$store.getters.getQuote;
    },
    getSymbolism() {
      this.$store.commit("changeQuote", this.helloAnno.quote);
      if (this.$store.getters.getPage > this.book.annoStart) {
        if (this.callAnno.symbolism != "N/A") {
          this.bookAnno.quote = "hello";
        } else {
          this.bookAnno.quote = "No symbolism detected!";
        }
      } else {
        this.bookAnno.quote = "N/A";
      }
    },
    getMetaphor() {
      this.$store.commit("changeQuote", this.helloAnno.quote);
      if (this.$store.getters.getPage > this.book.annoStart) {
        if (this.callAnno.symbolism != "N/A") {
          this.bookAnno.quote = "hi";
        } else {
          this.bookAnno.quote = "No metaphors detected!";
        }
      } else {
        this.bookAnno.quote = "N/A";
      }
    },
    sendChapter1() {
      switch (this.book.name) {
        case "The Odyssey":
          this.$store.commit("changePage", 13);
          break;
        case "The Adventures of Tom Sawyer":
          this.$store.commit("changePage", 3);
          break;
        case "1984":
          this.$store.commit("changePage", 3);
          break;
        case "Great Expectations":
          this.$store.commit("changePage", 2);
          break;
        default:
          this.$store.commit("changePage", 1);
      }
    },
    sendChapter2() {
      switch (this.book.name) {
        case "The Odyssey":
          this.$store.commit("changePage", 27);
          break;
        case "1984":
          this.$store.commit("changePage", 26);
          break;
        case "The Adventures of Tom Sawyer":
          this.$store.commit("changePage", 13);
          break;
        case "Great Expectations":
          this.$store.commit("changePage", 9);
          break;
        default:
          this.$store.commit("changePage", 10);
      }
    },
    sendChapter3() {
      switch (this.book.name) {
        case "The Odyssey":
          this.$store.commit("changePage", 41);
          break;
        case "1984":
          this.$store.commit("changePage", 37);
          break;
        case "Great Expectations":
          this.$store.commit("changePage", 21);
          break;
        case "The Adventures of Tom Sawyer":
          this.$store.commit("changePage", 21);
          break;
        default:
          this.$store.commit("changePage", 21);
      }
    },
    sendChapter4() {
      switch (this.book.name) {
        case "The Odyssey":
          this.$store.commit("changePage", 57);
          break;
        case "1984":
          this.$store.commit("changePage", 48);
          break;
        case "Great Expectations":
          this.$store.commit("changePage", 28);
          break;
        case "The Adventures of Tom Sawyer":
          this.$store.commit("changePage", 29);
          break;
        default:
          this.$store.commit("changePage", 40);
      }
    },
    sendChapter5() {
      switch (this.book.name) {
        case "The Odyssey":
          this.$store.commit("changePage", 84);
          break;
        case "1984":
          this.$store.commit("changePage", 62);
          break;
        case "Great Expectations":
          this.$store.commit("changePage", 41);
          break;
        case "The Adventures of Tom Sawyer":
          this.$store.commit("changePage", 42);
          break;
        default:
          this.$store.commit("changePage", 50);
      }
    },
    sendChapter6() {
      switch (this.book.name) {
        case "The Odyssey":
          this.$store.commit("changePage", 99);
          break;
        case "1984":
          this.$store.commit("changePage", 81);
          break;
        case "Great Expectations":
          this.$store.commit("changePage", 56);
          break;
        case "The Adventures of Tom Sawyer":
          this.$store.commit("changePage", 49);
          break;
        default:
          this.$store.commit("changePage", 50);
      }
    },
    characterCollection() {
      db.collection("characters")
        .doc(this.docName)
        .collection("characterBio")
        .doc()
        .set({
          bio: this.bio,
          name: this.name,
        })
        .catch(function (error) {
          console.error("Error writing document: ", error);
        });
    },
    bookAnnoCollection() {
      db.collection(this.collectionName)
        .doc(this.docName)
        .collection("annotations")
        .doc()
        .set({
          anno: this.annoSend,
          pageNumber: this.pageNew,
          quote: this.quoteSend,
        })
        .catch(function (error) {
          console.error("Error writing document: ", error);
        });
    },
  },
  watch: {
    pageNum: function (ev) {
      this.page = ev;
    },
  },
  mounted() {
    this.page = 1;
    this.wait();
  },
};
</script>

<style scoped>
.truncate {
  width: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
}
p {
  font-family: Open sans-serif;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease-in-out;
}
.fade-enter {
  opacity: 0;
}
.fade-leave-to {
  opacity: 0;
}
</style>