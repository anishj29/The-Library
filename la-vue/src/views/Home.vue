<template>
<div id="home" class="home">
   <v-row class="purple darken-1 header">
      <v-container class="white--text">
         <h1>THE BOOK GUIDE</h1>
         <v-btn color="blue-grey darken-4 white--text" rounded to="/Library">Start Reading Today</v-btn> 
      </v-container>
   </v-row>
   <v-row class="cyan accent-2">
      <v-spacer></v-spacer>
      <v-col class="text-center about" cols="9">
         <h1>About Us</h1>
         <h5 class="subtitle-1 font-italic">"helping students survive ELA classes and help them thrive while reading complex books"</h5>
         <p class="pt-7 font-weight-bold">Used By Students For</p>
         <p>Help in high school with understanding core ideas behind the books of authors that have been written for more mature audiences. It can be used to prepare for in-school test for LA classes and also to assist during the reading of more complex texts as a hobby.</p>

         <p class="pt-8 subtitle-2 font-italic"> Contains a catalog of books written by extremely famous authors including Shakespeare, Homer, 
         <br>Charles Dickens, and George Orwell 
         </p>
      </v-col>
      <v-spacer></v-spacer>
   </v-row>
   <hr class="divider">
   <v-row class="cyan accent-2"> 
      <v-col class="text-center testimonials">
         <h1>Testimonials</h1>
         <h5 class="font-italic">"This is an AMAZING Product!"</h5>
         <v-row>
            <v-col>
               <v-card class="mx-auto card" max-width="400">
                  <v-img height="200px" src="@/assets/images/funnyimage1.webp"></v-img>
                  <v-card-text class="text--primary">
                     <div>Person 1</div>
                     <div>Sample-The website allowed me to </div>
                  </v-card-text>
               </v-card>
            </v-col>
            <v-col>
               <v-card class="mx-auto card" max-width="400">
                  <v-img height="200px" src="@/assets/images/funnyimage1.webp"></v-img>
                  <v-card-text class="text--primary">
                     <div>Person 1</div>
                     <div>Sample-The website allowed me to </div>
                  </v-card-text>
               </v-card>
            </v-col>
            <v-col>
               <v-card class="mx-auto card" max-width="400">
               <v-img height="200px" src="@/assets/images/funnymeme2.jpg"></v-img>
               <v-card-text class="text--primary">
                  <div>Person 2</div>
                  <div>Sample-The website allowed me to </div>
               </v-card-text>
               </v-card>
            </v-col>
         </v-row>
      </v-col>
   </v-row>
</div>
</template>

<style lang="scss" scoped>
.header{
   padding-top: 100px; 
   padding-bottom: 70px;
   text-align: center;
}
.divider{
   height: 2px;
   border-width:0;
   color:rgb(0, 0, 0);
   margin-left: auto;
   margin-right: auto;
   background:rgb(0, 0, 0);
}
.about{
   margin-left: auto;
   margin-right: auto;
   max-width: 800px;
}
.testimonials{
   margin-left: auto;
   margin-right: auto;
   max-width: 1300px;
}
.card:hover{
   box-shadow: 0 1px 1px rgba(0,0,0,.12), 0 2px 2px rgba(0,0,0,.12), 0 4px 4px rgba(0,0,0,.2), 0 8px 8px rgba(0,0,0,.3), 0 16px 16px rgba(0,0,0,.3);
   transition: box-shadow .3s ease-in-out;
}
</style>