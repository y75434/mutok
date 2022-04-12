<template>
  <!-- <v-container>
    <v-row class="text-center"> -->
      <v-card max-width="450"  style="height: 100vh;" class="mx-auto text-center py-15">
        

        <div class="text-body-1 black--text my-5">Joe Cooper</div>

        <div class="text-h5 lightblack--text mb-6" >{{ inputBox }}</div>
        <div class="text-body-1 black--text mb-3"> <v-icon class="text-h5 grey--text">mdi-phone-outgoing-outline</v-icon>通話中....</div>


        <v-list color="secondary" class="rounded-xl py-8 mb-0">
           


            <v-list-item class="d-flex justify-center mb-6">
              <div class="mx-2">
                <v-btn
                  color="success"
                  fab
                  x-large
                  dark
                ><div class="text-h4 grey--text"  @click="type(1)">1</div>
                </v-btn>
              </div>
              <div class="mx-2">
                <v-btn
                  color="success"
                  fab
                  x-large
                  dark
                ><div class="text-h4 grey--text" @click="type(2)">2</div>
                </v-btn>
              </div>
              <div class="mx-2">
                <v-btn
                  color="success"
                  fab
                  x-large
                  dark
                >
                  <div class="text-h4 grey--text" @click="type(3)">3</div>
                </v-btn>
              </div>
            </v-list-item>

            <v-list-item class="d-flex justify-center mb-6">
              <div class="mx-2">
                <v-btn
                  color="success"
                  fab
                  x-large
                ><div class="text-h4 grey--text" @click="type(4)">4</div>
                </v-btn>
              </div>
              <div class="mx-2">
                <v-btn
                  color="success"
                  fab
                  x-large
                  dark
                ><div class="text-h4 grey--text" @click="type(5)">5</div>
                </v-btn>
              </div>
              <div class="mx-2">
                <v-btn
                  color="success"
                  fab
                  x-large
                  dark
                >
                  <div class="text-h4 grey--text" @click="type(6)">6</div>
                </v-btn>
              </div>
            </v-list-item>

            <v-list-item class="d-flex justify-center mb-6">
              <div class="mx-2">
                <v-btn
                  color="success"
                  fab
                  x-large
                ><div class="text-h4 grey--text" @click="type(7)">7</div>
                </v-btn>
              </div>
              <div class="mx-2">
                <v-btn
                  color="success"
                  fab
                  x-large
                  dark
                ><div class="text-h4 grey--text" @click="type(8)">8</div>
                </v-btn>
              </div>
              <div class="mx-2">
                <v-btn
                  color="success"
                  fab
                  x-large
                  dark
                >
                  <div class="text-h4 grey--text" @click="type(9)">9</div>
                </v-btn>
              </div>
            </v-list-item>

            <v-list-item class="d-flex justify-center mb-6">
              <div class="mx-2">
                <v-btn
                  color="success"
                  fab
                  x-large
                ><div class="text-h4 grey--text" >*</div>
                </v-btn>
              </div>
              <div class="mx-2">
                <v-btn
                  color="success"
                  fab
                  x-large
                  dark
                ><div class="text-h4 grey--text" @click="type(0)">0</div>
                </v-btn>
              </div>
              <div class="mx-2">
                <v-btn
                  color="success"
                  fab
                  x-large
                  dark
                >
                  <div class="text-h4 grey--text">#</div>
                </v-btn>
              </div>
            </v-list-item>


            <v-list-item class="d-flex justify-center mb-9">
              <div class="mx-2">
                <v-btn
                  color="success"
                  fab
                ><v-icon class="text-h5 grey--text">mdi-bullhorn-variant-outline</v-icon>
                </v-btn>
              </div>
              <div class="mx-2">
                <v-btn
                  color="success"
                  fab
                  dark
                ><v-icon class="text-h5 grey--text">mdi-microphone-off</v-icon>
                </v-btn>
              </div>
              <div class="mx-2">
                <v-btn
                  color="success"
                  fab
                  dark
                ><v-icon class="text-h5 grey--text">mdi-dialpad</v-icon>

                </v-btn>
              </div>
            </v-list-item>

            <v-list-item class="d-flex justify-center mb-6">

              <div class="mx-2">
                <v-btn
                  color="success"
                  fab
                  dark
                ><v-icon class="text-h5 grey--text">mdi-record-circle</v-icon>

                </v-btn>
              </div>
              <div class="mx-2">
                <v-btn class=" text-no-wrap rounded-pill" style="background: linear-gradient(92.37deg, #29BCD0 6.91%, #1A73E9 94%);">
                  <div class="text-body-1 white--text"><v-icon class="">mdi-phone-remove-outline</v-icon>結束通話</div>
                </v-btn>
              </div>

            </v-list-item>


          

        </v-list>
       
      </v-card>
    <!-- </v-row>
  </v-container> -->
</template>

<script>
export default {
  name: "call",

  data: () => ({
    inputBox: ""
    
  }),
  methods:{
    type(e){
      this.inputBox += e
      console.log(this.inputBox, e);  
    },
    call(){

    }
  }
};
</script>
