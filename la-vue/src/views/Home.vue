<template>
  <div id="home" class="home">
    <v-img class="header" max-height="320"
    src="https://firebasestorage.googleapis.com/v0/b/la-project-3fd8e.appspot.com/o/fantasylibraryart-1639629358259-4045.jpg?alt=media&token=d545310a-09bb-4a99-ae0b-0902eac84043">
      <v-container class="white--text" style="filter: brightness(100%)">
        <h1 class="mb-2">The LA Catalog</h1>
        <v-btn color="blue-grey darken-4 white--text" rounded to="/Library"
          >Start Reading Today</v-btn
        >
      </v-container>
    </v-img>
    <div class="red lighten-1 pb-10 pt-10">
      <div class="about">
        <v-item-group>
          <v-container>
            <v-row>
              <v-col v-for="n in cards" :key="n" style="max-width: 300px">
                <v-item v-slot="{ active, toggle }">
                  <v-img
                    :color="active ? 'primary' : ''"
                    class="d-flex align-center card"
                    :src="n.url"
                    height="350"
                    @mouseenter="toggle"
                    @mouseleave="toggle"
                  >
                    <v-scroll-y-transition>
                      <div
                        v-if="active"
                        class="text-h2 flex-grow-1 text-center"
                      >
                        <v-card flat>
                          <v-card-text>
                            <v-row class="mb-4" align="center">
                              <strong class="text-h6">{{n.title}}</strong>
                              <v-spacer></v-spacer>
                            </v-row>
                            <p class="op" color="white">
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
        url: "https://www.teahub.io/photos/full/190-1905529_cool-book-computer-wallpapers-desktop-backgrounds.jpg",
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.header {
  padding-top: 100px;
  filter: brightness(50%);
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
.card {
  width: 300px;
  height: 300px;
  float: left;
  box-sizing: border-box;
  padding: 30px;
  font-family: sans-serif;
  font-size: 18px;
  border-radius: 10px;
}
.op {
  opacity: 1;
}
.card:hover {
  box-shadow: 0 10px 50px 0 rgba(0, 0, 0, 0.5);
  opacity: 0.8;
  transition: box-shadow 0.4s ease-in-out;
}
</style>
