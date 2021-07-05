<template>
  <div id="home" class="home">
    <v-row class="black header">
      <v-container class="white--text">
        <h1>The Book Guide</h1>
        <v-btn color="blue-grey darken-4 white--text" rounded to="/Library"
          >Start Reading Today</v-btn
        >
      </v-container>
    </v-row>
    <v-row class="teal accent-3 pb-10">
      <v-spacer></v-spacer>
      <v-col class="text-center about" cols="9">
        <h1 class="mt-8 mb-4">About Us</h1>
        <v-row>
          <v-card
            class="mx-auto"
            max-width="344"
            v-for="i in cards"
            :key="i"
          >
            <v-img
              :src="i.url"
              height="250px"
            ></v-img>

            <h3 class="mt-2">
              Helping students read complex ELA novels 
            </h3>

            <v-card-actions>
              <v-btn
                color="orange lighten-2"
                text
                @click="i.show = !i.show"
              >
                How We Help
              </v-btn>

              <v-spacer></v-spacer>

              <v-btn
                icon
                @click="i.show = !i.show"
              >
                <v-icon>{{ i.show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="i.show">
                <v-divider></v-divider>
                <v-card-text>
                  {{i.info}}
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-row>  
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
    <v-spacer></v-spacer>
  </div>
</template>

<script>

  export default {
    data: () => ({
      cards: [
        {info: 'Help in high school with understanding core ideas behind the books of authors that have been written for more mature audiences. It can be used to prepare for in-school test for LA classes and also to assist during the reading of more complex texts as a hobby.',
        show: false, url: 'https://www.stylist.co.uk/images/app/uploads/2019/12/17162852/the-end-of-a-book-1268x845.jpeg?w=1200&h=1&fit=max&auto=format%2Ccompress'}, {info: 'asdsad', show: false, url: 'https://media.glamour.com/photos/5e13b3afe07874000886ecfe/16:9/w_1600,c_limit/books_lede_social_river.jpg'}
      ]
    }),
  }
</script>

<style lang="scss" scoped>
.header {
  padding-top: 100px;
  padding-bottom: 70px;
  text-align: center;
}
.divider {
  height: 2px;
  border-width: 0;
  color: rgb(0, 0, 0);
  margin-left: auto;
  margin-right: auto;
  background: rgb(0, 0, 0);
}
.about {
  margin-left: auto;
  margin-right: auto;
  max-width: 800px;
}
.testimonials {
  margin-left: auto;
  margin-right: auto;
  max-width: 1300px;
}
.card:hover {
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12),
    0 4px 4px rgba(0, 0, 0, 0.2), 0 8px 8px rgba(0, 0, 0, 0.3),
    0 16px 16px rgba(0, 0, 0, 0.3);
  transition: box-shadow 0.3s ease-in-out;
}
</style>
