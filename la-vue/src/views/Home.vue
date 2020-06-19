<template>
  <div id="home">
    <div class= "homeheader">
        <v-container class = "text-center">
            <div>
                <v-col style = "padding-top: 100px; padding-bottom: 100px;">
                    <h1 class = "text-white">THE BOOK GUIDE</h1>
                    <v-btn rounded to="/Library">Start Reading Today</v-btn>
                </v-col>
            </div>
        </v-container>
    </div>
    <div class = "homebg">
        <v-container>
                <v-row>
                    <v-col class = "text-center">
                        <div>
                            <br>
                            <h1>About Us</h1>
                            <h5><i>"helping students survive ELA classes and help them thrive while reading complex books" </i></h5>
                            <br><br>
                            <p class=""><br><p><b>Used By Students For </b></p>
                                <p>Help in high school with understanding core ideas behind the books of authors<br>
                                    that have been written for more mature audiences.<br>
                                    It can be used to prepare for in-school test for LA classes and also <br>
                                    to assist during the reading of more complex texts as a hobby.  
                                </p>
                            <br><br>
                            <p> Contains a catalog of books written by extremely famous authors including Shakespeare,
                            <br>Charles Dickens, and George Orwell 
                            </p>
                                
                        </div>
                    </v-col>
                </v-row>
                <br><br>
                <v-row>
                    <v-col class="text-center ">
                        
                        <div class = "solid">
                        <h1>Testimonials</h1>
                        <h5><i>"This is an AMAZING Product!"</i></h5>
                            <v-row>
                                <v-col>
                                     <v-card class="mx-auto" max-width="400">
                                        <v-img
                                            class="white--text align-end"
                                            height="200px"
                                            src="@/assets/images/funnyimage1.webp"
                                        >
                                        </v-img>
                                
                                        <v-card-text class="text--primary">
                                            <div>Whitehaven Beach</div>
                                    
                                            <div>Sample-The website allowed me to </div>
                                        </v-card-text>
                                        </v-card>
                                </v-col>
                                <v-col>
                                     <v-card class="mx-auto" max-width="400">
                                        <v-img
                                            class="white--text align-end"
                                            height="200px"
                                            src="@/assets/images/funnymeme2.jpg"
                                        >
                                        </v-img>
                                
                                        <v-card-text class="text--primary">
                                            <div>Whitehaven Beach</div>
                                    
                                            <div>Sample-The website allowed me to </div>
                                        </v-card-text>
                                        </v-card>
                                </v-col>
                            </v-row>
                        </div>
                    </v-col>
                </v-row>
        <br><br><br> 
        </v-container>
    </div>
   </div>
</template>
<style lang="stylus" scoped>
      
    body,h1,h2,h3,h4,h5,h6 {font-family: "Lato", sans-serif}
    .w3-bar,h1,button {font-family: "Montserrat", sans-serif}
    .fa-anchor,.fa-coffee {font-size:200px}
    .homeheader{
        background-color: #993399;
    }
    .homebg {
        background-color: #14ade0;
    }
    .libraryheader{
        background-color: #993399;
    }
    .librarybg {
        background-color: #84df53;
    }
    .solid {
        border-style: solid;
    }


    body,h1,h2,h3,h4,h5,h6 {font-family: "Raleway", sans-serif}
</style>