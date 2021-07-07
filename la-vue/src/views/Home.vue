<template>
  <div id="home" class="home">
    <div class="black header">
      <v-container class="white--text">
        <h1 class="mb-2">The LA Catalog</h1>
        <v-btn color="blue-grey darken-4 white--text" rounded to="/Library"
          >Start Reading Today</v-btn
        >
      </v-container>
    </div>
    <div class="teal accent-3 pb-10 pt-10">
      <div class="about">
        <v-item-group>
          <v-container>
            <v-row>
              <v-col v-for="n in cards" :key="n" style="max-width: 300px">
                <v-item v-slot="{ active, toggle }">
                  <v-img
                    :color="active ? 'primary' : ''"
                    class="d-flex align-center"
                    :src="n.url"
                    height="350"
                    @click="toggle"
                  >
                    <v-scroll-y-transition>
                      <div
                        v-if="active"
                        class="text-h2 flex-grow-1 text-center"
                      >
                        <v-card flat>
                          <v-card-text color="black">
                            <v-row class="mb-4" align="center">
                              <strong class="text-h6">{{n.title}}</strong>
                              <v-spacer></v-spacer>
                            </v-row>
                            <p>
                              {{n.info}}
                            </p>
                          </v-card-text>
                        </v-card>
                      </div>
                    </v-scroll-y-transition>
                  </v-img>
                </v-item>
              </v-col>
            </v-row>
          </v-container>
        </v-item-group>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    cards: [
      {
        title: "Helping Students Read ELA Novels",
        info:
          "Help in high school with understanding core ideas behind the books of authors that have been written for more mature audiences." +
          " It can be used to prepare for in-school test for LA classes and also to assist during the reading of more complex texts as a hobby.",
        show: false,
        url: "https://www.stylist.co.uk/images/app/uploads/2019/12/17162852/the-end-of-a-book-1268x845.jpeg?w=1200&h=1&fit=max&auto=format%2Ccompress",
      },
      {
        title: "Check Out Our Reading Catalog",
        info:
          "Contains a catalog of books written by extremely famous authors" +
          "including Shakespeare, Homer, Charles Dickens, and George Orwell",
        show: false,
        url: "https://media.glamour.com/photos/5e13b3afe07874000886ecfe/16:9/w_1600,c_limit/books_lede_social_river.jpg",
      },
      {
        title: "Check Out Our Reading Catalog",
        info:
          "Contains a catalog of books written by extremely famous authors" +
          "including Shakespeare, Homer, Charles Dickens, and George Orwell",
        show: false,
        url: "https://media.glamour.com/photos/5e13b3afe07874000886ecfe/16:9/w_1600,c_limit/books_lede_social_river.jpg",
      },
    ],
  }),
};
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
  max-width: 900px;
  height: 450px;
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
