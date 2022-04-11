<template>

  <v-card max-width="450"  style="height: 100vh;" class="mx-auto text-center">
    <v-toolbar color="white">
      <v-app-bar-nav-icon><v-icon>mdi-arrow-left</v-icon></v-app-bar-nav-icon>
      <v-toolbar-title>Joe Cooper</v-toolbar-title>
      <v-spacer></v-spacer>   
    </v-toolbar>

    <v-avatar size="70" class="my-6">
      <v-img src="https://cdn.vuetifyjs.com/images/lists/2.jpg"></v-img>
    </v-avatar>


    <v-spacer></v-spacer>

    <div class="text-body-1 black--text mb-5">Joe Cooper</div>

    <div class="text-h5 lightblack--text mb-4">0225632563#1</div>

    

    <v-col cols="8" class="mx-auto" >

      <v-btn large block class=" text-no-wrap rounded-pill" style="background: linear-gradient(92.37deg, #29BCD0 6.91%, #1A73E9 94%);">
        <div class="text-body-1 white--text"><v-icon class="">mdi-phone-remove-outline</v-icon>結束通話</div>
      </v-btn>
    </v-col>

    
    <div class="text-body-1 black--text mb-3"> <v-icon class="text-h5 grey--text">mdi-phone-outgoing-outline</v-icon>通話中....</div>


    <v-list color="secondary" class="rounded-xl py-8 text-center">
        
        <v-list-item class="d-flex justify-center mb-9">
          <div class="mx-2 flex-column d-flex">
            <v-btn
              color="success"
              fab
            ><v-icon class="text-h5 grey--text">mdi-bullhorn-variant-outline</v-icon>
            </v-btn>
            <span class="body-2 black--text mt-1">靜音</span>
          </div>
          <div class="mx-2 flex-column d-flex">
            <v-btn
              color="success"
              fab
              dark
            ><v-icon class="text-h5 grey--text">mdi-microphone-off</v-icon>
            </v-btn>
            <span class="body-2 black--text mt-1">擴音</span>
          </div>
          <div class="mx-2 flex-column d-flex">
            <v-btn
              color="success"
              fab
              dark
            ><v-icon class="text-h5 grey--text">mdi-dialpad</v-icon>
            </v-btn>
            <span class="body-2 black--text mt-1">鍵盤</span>
          </div>
        </v-list-item>

        <v-list-item class="d-flex justify-center mb-15 ">
          <div class="mx-2 flex-column d-flex">
            <v-btn
              color="success"
              fab
            ><v-icon class="text-h5 grey--text">mdi-pause-circle-outline</v-icon>
            </v-btn>
            <span class="body-2 black--text mt-1">保留</span>
          </div>
          <div class="mx-2 flex-column d-flex">
            <v-btn
              color="success"
              fab
              dark
            ><v-icon class="text-h5 grey--text">mdi-microphone-off</v-icon>
            </v-btn>
            <span class="body-2 black--text mt-1">三方通話</span>
          </div>
          <div class="mx-2 flex-column d-flex">
            <v-btn
              color="success"
              fab
              dark
            ><v-icon class="text-h5 grey--text">mdi-video-minus-outline</v-icon>
            </v-btn>
            <span class="body-2 black--text mt-1">Face Time</span>
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


</template>

<script>
export default {
  name: "friend",

  data: () => ({
    
  }),
};
</script>
