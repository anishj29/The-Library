<template>
<v-container fluid class="px-12 light-blue lighten-3">
	<v-row class="pt-8">
		<v-col cols="1">
			<v-img max-width="100%" :src="book.imgFile"></v-img>
		</v-col>
		<v-col>
			<h1 class="text-left mt-10" style="padding-left: 600px">{{book.name}}</h1>
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
					<v-expansion-panel-content>{{ summary }}</v-expansion-panel-content>
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
		summaryPage(value) {
			this.summary = value;
		}
	},
	mounted() {
		this.wait()
	},
}
</script>
