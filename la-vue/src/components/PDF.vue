<template>
  <v-container class="pdf">
    <div class="d-flex flex-row">
      <p class="ma-0 d-flex align-center mr-2">
        <v-text-field
          :rules="rules"
          dark
          v-model.number="page"
          type="number"
          style="max-width: 80px"
        ></v-text-field
        >/{{ book.maxPage }}
        <!-- <button @click="logContent">log content</button> -->
      </p>
    </div>
    <div>
      <div
        v-if="loadedRatio > 0 && loadedRatio < 1"
        style="background-color: #FFD54F; color: white; text-align: center"
        :style="{ width: loadedRatio * 100 + '%' }"
      >
        {{ Math.floor(loadedRatio * 100) }}%
      </div>
      <pdf
        v-if="show"
        ref="pdf"
        style="width:50%"
        :src="book.pdfLink"
        :page="this.$store.getters.getPage"
        @progress="loadedRatio = $event"
      ></pdf>
    </div>
  </v-container>
</template>

<script>
import pdf from 'vue-pdf';

export default {
  components: {
    pdf,
  },
  props: {
    book: Object,
  },
  data() {
    return {
      page: 1,
      show: true,
      loadedRatio: 0,
      rotate: 0,
      rules: [
        (page) => !!page || "Enter a page number.",
        (page) => page >= 1 || "Enter a page number greater than or equal to 1",
      ],
    };
  },
  computed: {
    pageNum() {
      return this.$store.state.page;
    },
  },
  methods: {
    logContent() {
      this.$refs.pdf.pdf.forEachPage(function (page) {
        return page.getTextContent().then(function (content) {
          var text = content.items.map((item) => item.str);
          console.log(text);
        });
      });
    },
  },
  mounted() {
    this.page = 1;
    this.$store.commit("changePage", 1);
  },
  watch: {
    pageNum: function (ev) {
      console.log("in page watcher");
      this.page = ev;
    },
    page: function () {
      var hi = "No summary available";
      switch (this.book.name) {
        case "The Odyssey":
          // db.collection('users').doc("87vkfAFz6ygldRmR8fdU").update({
          //     odysseyPage: this.page
          // })
          if (this.page >= 13 && this.page <= 26) {
            this.$store.commit("changePage", this.page);
            this.$store.commit("changeSummary", this.book.chapter1);
          } else if (this.page >= 27 && this.page <= 40) {
            this.$store.commit("changePage", this.page);
            this.$store.commit("changeSummary", this.book.chapter2);
          } else {
            this.$store.commit("changePage", this.page);
            this.$store.commit("changeSummary", hi);
          }
          break;
        case "The Adventures of Tom Sawyer":
          // db.collection('users').doc("87vkfAFz6ygldRmR8fdU").update({
          //     adventuresPage: this.page
          // })
          if (this.page >= 3 && this.page <= 13) {
            this.$store.commit("changePage", this.page);
            this.$store.commit("changeSummary", hi);
          } else if (this.page >= 13 && this.page <= 40) {
            this.$store.commit("changePage", this.page);
            this.$store.commit("changeSummary", hi);
          } else {
            this.$store.commit("changePage", this.page);
            this.$store.commit("changeSummary", hi);
          }
          break;
        case "1984":
          // db.collection('users').doc("87vkfAFz6ygldRmR8fdU").update({
          //     nineFourPage: this.page
          // })
          if (this.page >= 3 && this.page <= 25) {
            this.$store.commit("changePage", this.page);
            this.$store.commit("changeSummary", this.book.chapter1);
          } else {
            this.$store.commit("changePage", this.page);
            this.$store.commit("changeSummary", hi);
          }
          break;
        case "Great Expectations":
          if (this.page >= 2 && this.page <= 8) {
            this.$store.commit("changePage", this.page);
            this.$store.commit("changeSummary", this.book.chapter1);
          } else if (this.page >= 9 && this.page <= 20) {
            this.$store.commit("changePage", this.page);
            this.$store.commit("changeSummary", this.book.chapter2);
          } else {
            this.$store.commit("changePage", this.page);
            this.$store.commit("changeSummary", hi);
          }
          break;
        default:
          this.$store.commit("changeSummary", hi);
      }
    },
  },
};
</script>

<style scoped>
</style>