<template>

 <v-card
  max-width="768"
  style="height: 100vh; width: 100vw"
  class="mx-auto text-center d-flex flex-column justify-center" 
  >

   
      <!-- <div class=" m-5"> -->
      <v-list one-line>
        <v-list-item class="text-left justify-center d-flex">
          <img src="@/assets/img/img_mutok_color@2x.png" class="mx-auto" alt="" style="width:240px;height:120px;">
        </v-list-item>

        <v-list-item class="text-left justify-center d-flex">
          <v-col cols="12" class="p0">
            <v-list-item-title class="mb-1">帳號</v-list-item-title>
            <v-text-field label="請輸入帳號" solo ></v-text-field>
          </v-col>
        </v-list-item>
        <v-list-item class="text-left justify-center d-flex">
          <v-col cols="12" class="p0">
            <v-list-item-title class="mb-1">帳號</v-list-item-title>
            <v-text-field label="聯絡名稱" solo ></v-text-field>
          </v-col>
        </v-list-item>
        <router-link to="/forgotpw" class="text-decoration-none herf--text text-right justify-end mr-5 d-flex">忘記密碼</router-link>          

        <v-list-item class="justify-center d-flex ">
          <v-col cols="12" class="p0">
            <v-btn to="/voipchat" x-large class="col-11 mt-6 text-center text-no-wrap rounded-pill" style="background: linear-gradient(92.37deg, #29BCD0 6.91%, #1A73E9 94%);">
              <div class="text-body-1 white--text">登入</div>
            </v-btn>
          

          </v-col>
          

        </v-list-item>
        <v-list-item class="justify-center d-flex ">
          <router-link
            to="/enroll"
            class="text-decoration-none herf--text text-center"
          >
          開設新帳號
          </router-link>

        </v-list-item>

    </v-list>

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

