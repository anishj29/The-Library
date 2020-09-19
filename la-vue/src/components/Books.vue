<template>
	<div id="books">
			<v-hover>
				<template v-slot:default="{ hover }">
					<v-card class="mx-auto" max-width="220" max-height="300">
						<v-img max-width="220" max-height="300" :src="img"></v-img>
						<v-fade-transition>
							<v-overlay v-if="hover" absolute color="#036358">
								<v-btn :to="`/BookPage/${id}`">Go to book</v-btn>
							</v-overlay>
						</v-fade-transition>
					</v-card>
				</template>
			</v-hover>
	</div>	
</template>

<script>
export default {
	name: 'Books',
	props: {
		bookTitle: String,
		img: String,
		id: String,
		pdf1: String, 
	},
	data: () => ({
	
	}),
	methods: {
	
	}

}
</script>
