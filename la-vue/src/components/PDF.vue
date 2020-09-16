<template>
    <div class="PDF">
        <div class="d-flex flex-row">
            <v-text-field :rules="rules" class="" dark v-model.number="page" type="number" style="max-width: 80px"></v-text-field>
            <p class="ma-0 d-flex align-center mr-2">/{{numPages}}</p>
            <button class="mr-2" @click="rotate += 90">&#x27F3;</button>
            <button @click="rotate -= 90">&#x27F2;</button>
        </div>
        <div style="width: 50%">
            <div v-if="loadedRatio > 0 && loadedRatio < 1" style="background-color: green; color: white; text-align: center" :style="{ width: loadedRatio * 100 + '%' }">{{ Math.floor(loadedRatio * 100) }}%</div>
            <pdf v-if="show" ref="pdf" :src="book.pdfLink" :page="page" :rotate="rotate" @progress="loadedRatio = $event"></pdf>
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
        book: String
    },
    data () {
        return {
            show: true,
            pdfList: [
                '',
                'https://cdn.mozilla.net/pdfjs/tracemonkey.pdf',
                'https://cdn.rawgit.com/mozilla/pdf.js/c6e8ca86/test/pdfs/freeculture.pdf',
                'https://cdn.rawgit.com/mozilla/pdf.js/c6e8ca86/test/pdfs/annotation-link-text-popup.pdf',
                'https://cdn.rawgit.com/mozilla/pdf.js/c6e8ca86/test/pdfs/calrgb.pdf',
                'https://cdn.rawgit.com/sayanee/angularjs-pdf/68066e85/example/pdf/relativity.protected.pdf',
                'data:application/pdf;base64,JVBERi0xLjUKJbXtrvsKMyAwIG9iago8PCAvTGVuZ3RoIDQgMCBSCiAgIC9GaWx0ZXIgL0ZsYXRlRGVjb2RlCj4+CnN0cmVhbQp4nE2NuwoCQQxF+/mK+wMbk5lkHl+wIFislmIhPhYEi10Lf9/MVgZCAufmZAkMppJ6+ZLUuFWsM3ZXxvzpFNaMYjEriqpCtbZSBOsDzw0zjqPHZYtTrEmz4eto7/0K54t7GfegOGCBbBdDH3+y2zsMsVERc9SoRkXORqKGJupS6/9OmMIUfgypJL4KZW5kc3RyZWFtCmVuZG9iago0IDAgb2JqCiAgIDEzOAplbmRvYmoKMiAwIG9iago8PAogICAvRXh0R1N0YXRlIDw8CiAgICAgIC9hMCA8PCAvQ0EgMC42MTE5ODcgL2NhIDAuNjExOTg3ID4+CiAgICAgIC9hMSA8PCAvQ0EgMSAvY2EgMSA+PgogICA+Pgo+PgplbmRvYmoKNSAwIG9iago8PCAvVHlwZSAvUGFnZQogICAvUGFyZW50IDEgMCBSCiAgIC9NZWRpYUJveCBbIDAgMCA1OTUuMjc1NTc0IDg0MS44ODk3NzEgXQogICAvQ29udGVudHMgMyAwIFIKICAgL0dyb3VwIDw8CiAgICAgIC9UeXBlIC9Hcm91cAogICAgICAvUyAvVHJhbnNwYXJlbmN5CiAgICAgIC9DUyAvRGV2aWNlUkdCCiAgID4+CiAgIC9SZXNvdXJjZXMgMiAwIFIKPj4KZW5kb2JqCjEgMCBvYmoKPDwgL1R5cGUgL1BhZ2VzCiAgIC9LaWRzIFsgNSAwIFIgXQogICAvQ291bnQgMQo+PgplbmRvYmoKNiAwIG9iago8PCAvQ3JlYXRvciAoY2Fpcm8gMS4xMS4yIChodHRwOi8vY2Fpcm9ncmFwaGljcy5vcmcpKQogICAvUHJvZHVjZXIgKGNhaXJvIDEuMTEuMiAoaHR0cDovL2NhaXJvZ3JhcGhpY3Mub3JnKSkKPj4KZW5kb2JqCjcgMCBvYmoKPDwgL1R5cGUgL0NhdGFsb2cKICAgL1BhZ2VzIDEgMCBSCj4+CmVuZG9iagp4cmVmCjAgOAowMDAwMDAwMDAwIDY1NTM1IGYgCjAwMDAwMDA1ODAgMDAwMDAgbiAKMDAwMDAwMDI1MiAwMDAwMCBuIAowMDAwMDAwMDE1IDAwMDAwIG4gCjAwMDAwMDAyMzAgMDAwMDAgbiAKMDAwMDAwMDM2NiAwMDAwMCBuIAowMDAwMDAwNjQ1IDAwMDAwIG4gCjAwMDAwMDA3NzIgMDAwMDAgbiAKdHJhaWxlcgo8PCAvU2l6ZSA4CiAgIC9Sb290IDcgMCBSCiAgIC9JbmZvIDYgMCBSCj4+CnN0YXJ0eHJlZgo4MjQKJSVFT0YK',
            ],
            loadedRatio: 0,
            page: 1,
            numPages: 0,
            rotate: 0,
            rules: [
                page => !!page || 'Enter a page number.',
                page => page >= 1 || 'Enter a page number greater than or equal to 1',                
            ],
        }
    },
    watch: {
        page: function (page) {
            var hi = "No summary available";
            if(this.book.name == "The Odyssey") {
                if (page >= 13 && page <= 26) {
                    this.$emit('page', this.book.chapter1, page);
                }else if (page >= 27 && page <=40) {
                    this.$emit('page', this.book.chapter2, page);
                }else {
                    this.$emit('page', hi, page);
                }
            }else if(this.book.name == "Romeo and Juliet") {
                this.$emit('page', this.book.name, page);
            }else if(this.book.name == "1984") {
                if(page >=3 && page <=25 ){
                    this.$emit('page', this.book.chapter1);
                }else{
                    this.$emit('page', hi);
                }
            }else if(this.book.name == "Great Expectations") {
                if(page >=2 && page <=8) {
                    this.$emit('page', this.book.chapter1);
                }else if(page >=9 && page <=20) {
                    this.$emit('page', this.book.chapter2);
                }
                else{
                    this.$emit('page', hi);
                }
            }
        }
    },
}
</script>