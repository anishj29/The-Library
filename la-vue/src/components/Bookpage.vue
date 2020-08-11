<template>

<v-container fluid class="px-12 light-blue lighten-3">
	<v-row class="pt-8">
		<v-col cols="1">
			<v-img max-width="100%" :src="require(`@/assets/images/${img}`)"></v-img>
		</v-col>
		<v-col>
			<h1 class="text-left mt-10" style="padding-left: 600px">{{title}}</h1>
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
				<OdysseyBook></OdysseyBook>
			</div>
			
		</v-col>
		<v-col>
			<v-expansion-panels>
				<v-expansion-panel class="blue-grey darken-4 white--text">
					<v-expansion-panel-header>Description</v-expansion-panel-header>
					<v-expansion-panel-content>
						{{description}}	
					</v-expansion-panel-content>
				</v-expansion-panel>
				<v-expansion-panel class="blue-grey darken-4 white--text">
					<v-expansion-panel-header>Filter</v-expansion-panel-header>
					<v-expansion-panel-content>
						<v-btn class="mr-1" v-on:click="filter = locations">Locations</v-btn>
						<v-btn v-on:click="filter = main_characters">Characters</v-btn>
						<p class="mt-5">{{filter}}</p>
					</v-expansion-panel-content>
				</v-expansion-panel>
			</v-expansion-panels>
		</v-col>
	</v-row>
</v-container>
</template>

<script>
import OdysseyBook from './OdysseyBook.vue'; 
export default {
	components:{
		OdysseyBook
	},
	// props:{
	// 	bookObj: Object
	// },
	data: () => ({
		img:"OdysseyCover.jpg",
		title: "The Odyssey",
		description: "The Odyssey is Homer's epic of Odysseus' 10-year struggle to return home after the Trojan War. While Odysseus battles mystical creatures and faces the wrath of the gods, his wife Penelope and his son Telemachus stave off suitors vying for Penelope's hand and Ithaca's throne long enough for Odysseus to return.",
		filter: "Please select a filter",
		main_characters: "Characters: Odysseus, Telemachus, Athena, Zeus, Circe, Calpyso, Poseidon...",
		locations: "Troy, Calypso's Island, Island of Scheria"
	
	})
}
</script>
