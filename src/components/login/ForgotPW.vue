<template>

 <v-card
  max-width="768"
  style="height: 100vh; width: 100vw"
  class="mx-auto text-center " 

  >
    <v-toolbar color="white">
      <v-app-bar-nav-icon to="/login"><v-icon>mdi-arrow-left</v-icon></v-app-bar-nav-icon>
      <v-toolbar-title>忘記密碼</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>


      <!-- <div class="d-flex flex-column justify-center m-5 "> -->
        <v-list one-line class="secondary" style="height: 100vh;">
          <v-list-item class="text-left justify-center d-flex my-10">
            <img src="@/assets/img/img_forget pw@2x.png" class="mx-auto" alt="" style="width:250px;height:170px;">
          </v-list-item>

          <div class="text-body-1 black--text my-5">輸入您的信箱，我們會將連結寄到您的信箱</div>


        
          <v-list-item class="text-left justify-center d-flex">
            <v-col cols="12" class="p0">
              <v-list-item-title class="mb-1">輸入信箱</v-list-item-title>
              <v-text-field label="請輸入信箱" solo ></v-text-field>
            </v-col>
          </v-list-item>


          <v-list-item class="text-left justify-center d-flex">
            <v-col cols="12" class="p0">
              <v-btn to="/notice" @click="e1 = 2" x-large class="col-11 mt-6 text-center text-no-wrap rounded-pill" style="background: linear-gradient(92.37deg, #29BCD0 6.91%, #1A73E9 94%);">
                <div class="text-body-1 white--text">密碼重設</div>
              </v-btn>
            </v-col>
          </v-list-item>
        </v-list>
      <!-- </div> -->
  </v-card>



</template>

<script>
export default {
  name: "SelfSetting",

  data: () => ({
    e1: 1,
    
  }),
};
</script>

<style  scope>

.v-text-field__details{
  display: none !important;
}

.v-stepper__label{
  display: flex !important;
}

.v-application .primary {
    background-color: #05B2DC !important;
    border-color: #05B2DC !important;
}

.v-stepper__header{
  box-shadow: none !important;
}

.v-text-field.v-text-field--solo:not(.v-text-field--solo-flat) >
.v-input__control > .v-input__slot
{
  box-shadow: none !important;
  border: 1px solid #DDDDDD !important;

}
</style>

