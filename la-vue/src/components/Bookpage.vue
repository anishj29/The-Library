<template>
<v-container fluid class="px-12">
	<v-row class="pt-8">
		<v-col cols="1">
			<v-img max-width="100%" :src="require(`@/assets/images/${img}`)"></v-img>
		</v-col>
		<v-col>
			<h1 class="text-center">{{title}}</h1>
		</v-col>
	</v-row>
	<v-row>
		<v-spacer></v-spacer>
		<v-col cols="4">
			<v-text-field outlined dense label="Solo" placeholder="Search Bar" solo ></v-text-field>
		</v-col>
	</v-row>
	<v-row class="pt-5">
		<v-col cols="7"  class="blue-grey darken-4 white--text">
			<div height="700">
				<PDF1984></PDF1984>
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
						<v-btn class="mr-1">Tags</v-btn>
						<v-btn>Characters</v-btn>
						<p class="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit
						, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
						, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
					</v-expansion-panel-content>
				</v-expansion-panel>
			</v-expansion-panels>
		</v-col>
	</v-row>
</v-container>
</template>

<script>
import PDF1984 from '@/components/1984pdf.vue'; 
export default {
	components:{
		PDF1984
	},
	props:{
		bookObj: Object
	},
	data: () => ({
		img:"OdysseyCover.jpg",
		title: "The Odyssey",
		description: "The Odyssey is Homer's epic of Odysseus' 10-year struggle to return home after the Trojan War. While Odysseus battles mystical creatures and faces the wrath of the gods, his wife Penelope and his son Telemachus stave off suitors vying for Penelope's hand and Ithaca's throne long enough for Odysseus to return."
	})
}
</script>
