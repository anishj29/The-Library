<template>
    <div class="PDF">
        <div class="d-flex flex-row">
            <p class="ma-0 d-flex align-center mr-2">
            <v-text-field :rules="rules" dark v-model.number="page" type="number" style="max-width: 80px"></v-text-field>/{{book.maxPage}}</p>
            <button class="mr-2" @click="rotate += 90">&#x27F3;</button>
            <button @click="rotate -= 90">&#x27F2;</button>
        </div>
        <div style="width: 50%">
            <div v-if="loadedRatio > 0 && loadedRatio < 1" style="background-color: green; color: white; text-align: center" :style="{ width: loadedRatio * 100 + '%' }">{{ Math.floor(loadedRatio * 100) }}%</div>
            <pdf v-if="show" ref="pdf" :src="book.pdfLink" :page="this.$store.getters.getPage" :rotate="rotate" @progress="loadedRatio = $event"></pdf>
        </div>
        </div>
    </template>

<script>
import pdf from 'vue-pdf'
export default {
    components: {
        pdf
    },
    props:{
        book: Object,
    },
    data () {
        return {
            show: true,
            page: this.$store.getters.getPage,
            loadedRatio: 0,
            rotate: 0,
            rules: [
                page => !!page || 'Enter a page number.',
                page => page >= 1 || 'Enter a page number greater than or equal to 1',              
            ],
        }
    },
    methods: {
    },
    watch: {
        page: function () {
            var hi = "No summary available";
            switch(this.book.name) {
                case "The Odyssey":
                    if (this.page >= 13 && this.page <= 26) {
                        this.$store.commit('changePage', this.page);
                        this.$store.commit('changeSummary', this.book.chapter1);
                    }else if (this.page >= 27 && this.page <=40) {
                        this.$store.commit('changePage', this.page);
                        this.$store.commit('changeSummary', this.book.chapter2);
                    }else {
                        this.$store.commit('changePage', this.page);
                        this.$store.commit('changeSummary', hi);
                    }
                    break;
                case "1984":
                    if(this.page >=3 && this.page <=25 ){
                        this.$store.commit('changePage', this.page);
                        this.$store.commit('changeSummary', this.book.chapter1);
                    }else{
                        this.$store.commit('changePage', this.page);
                        this.$store.commit('changeSummary', hi);
                    }                    
                    break;
                case "Great Expectations":
                    if(this.page >=2 && this.page <=8) {
                        this.$store.commit('changePage', this.page);
                        this.$store.commit('changeSummary', this.book.chapter1);
                    }else if(this.page >=9 && this.page <=20) {
                        this.$store.commit('changePage', this.page);
                        this.$store.commit('changeSummary', this.book.chapter2);
                    }else{
                        this.$store.commit('changePage', this.page);
                        this.$store.commit('changeSummary', hi);
                    }                   
                    break;
                default:
                    this.$store.commit('changeSummary', hi);
            }
        }
    },
}
</script>