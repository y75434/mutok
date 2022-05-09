<template>
 <div class="">  

   <v-container color="bg" class="rounded-lg alert">
      <v-row no-gutters>
        <v-col cols="12" class="rounded-lg">
          <v-card
            class="pa-2 pa-4 rounded-t-xl"
            outlined
            
          >
            Mutok 電話
          </v-card>
        </v-col>
        <v-col cols="12">
          <v-card
            class="px-6 py-7"
            outlined
            tile
          >       
            <div class="text-h4 text-left lightblack--text">David</div>
          </v-card>
        </v-col>

        <v-col
          cols="6"
        >
          <v-btn
            class="pa-7 rounded-t-0 rounded-bl-xl"
            block
            style="background: #DDD2CC;"
          >
            <div class="text-body-2 rounded-bl-xl text-center lightblack--text">忽略</div>

          </v-btn>

        </v-col>
        <v-col cols="6">
          <v-btn class="pa-7 rounded-br-xl rounded-t-0" block style="background: #05B2DC">
            <div class="text-body-2 text-center white--text">接聽</div>
          </v-btn>

          
        </v-col>

      </v-row>
    </v-container>

    <v-container color="bg" class="rounded-lg alert">
      <v-row no-gutters>
        <v-col cols="12">
          <v-card
            class="pa-2 pa-4 rounded-t-xl"
            outlined
          >
            Mutok 電話
          </v-card>
        </v-col>
        <v-col cols="12">
          <v-card
            class="px-6 py-7"
            outlined
            tile
          >       
          <div class="d-flex align-center">
            <v-avatar size="50" class="my-6 mr-5">
              <v-img src="https://cdn.vuetifyjs.com/images/lists/2.jpg"></v-img>
            </v-avatar>
            <div class="">
              <div class="text-body text-left lightblack--text">David</div>
              <div class="text-h4 text-left lightblack--text">0988333777</div>
            </div>
          </div>
          </v-card>
        </v-col>

        <v-col
          cols="6"
        >
          <v-btn
            class="pa-7 rounded-bl-xl rounded-t-0 "
            block
            style="background: #DDD2CC;"
          >
            <div class="text-body-2 text-center lightblack--text">忽略</div>

          </v-btn>

        </v-col>
        <v-col cols="6">
          <v-btn class="rounded-br-xl rounded-t-0 rounded-t-0 pa-7" block style="background: #05B2DC">
            <div class="text-body-2 rounded-br-xl text-center white--text ">接聽</div>
          </v-btn>

          
        </v-col>

      </v-row>
    </v-container>

  

  <v-container color="bg" class="rounded-lg alert">
      <v-row no-gutters>
        <v-col cols="12">
          <v-card
            class="pa-4 rounded-t-xl"
            outlined
          >
            Mutok 電話
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-btn
            class="pa-7 rounded-t-0 rounded-bl-xl"
            block
            style="background: #DDD2CC;"
          >
            <div class="text-body-2 text-center lightblack--text">忽略</div>

          </v-btn>

        </v-col>
        <v-col cols="6">
          <v-btn class="rounded-t-0 rounded-br-xl pa-7" block style="background: #05B2DC">
            <div class="text-body-2 rounded-br-xl text-center white--text ">接聽</div>
          </v-btn>

          
        </v-col>

      </v-row>
    </v-container>

  

  </div>
</template>

<script>


  export default {
    name: 'no',

    data: () => ({
     
    }),
    methods: {
      
    }
  }
</script>

<style>
/* This is for documentation purposes and will not be needed in your application */
/* #create .v-speed-dial {
  position: absolute;
}

#create .v-btn--floating {
  position: relative;
} */
</style>
