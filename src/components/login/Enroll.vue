<template>

 <v-card
  max-width="768"
  style="height: 100vh; width: 100vw"
  class="mx-auto text-center" 
  color="secondary"
  >

    <v-toolbar color="white" >
      <v-app-bar-nav-icon to="/login"><v-icon>mdi-arrow-left</v-icon></v-app-bar-nav-icon>
      <v-toolbar-title>開設新帳號</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

    <v-stepper v-model="e1" class="secondary">
    <v-stepper-header cols="12" class=" d-sm-flex d-md-flex">
      <v-stepper-step
        :complete="e1 > 1"
        step="1"
      >
        填寫基本資料
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step
        :complete="e1 > 2"
        step="2"
      >
        通訊設定
      </v-stepper-step>
      
    </v-stepper-header>

    <v-stepper-items style="height: 100vh;">
      <v-stepper-content step="1"  >
        <v-list-item class="text-left justify-center d-flex">
          <v-col cols="12" class="p0">
            <v-list-item-title class="mb-1">帳號</v-list-item-title>
            <v-text-field label="聯絡信箱" solo ></v-text-field>
          </v-col>
        </v-list-item>
        <v-list-item class="text-left justify-center d-flex">
          <v-col cols="12" class="p0">
            <v-list-item-title class="mb-1">暱稱</v-list-item-title>
            <v-text-field label="聯絡名稱" solo ></v-text-field>
          </v-col>
        </v-list-item>
        <v-list-item class="text-left justify-center d-flex">
          <v-col cols="12" class="p0">
            <v-list-item-title class="mb-1">電話</v-list-item-title>
            <v-text-field label="電話號碼" solo ></v-text-field>
          </v-col>
        </v-list-item>
        <v-list-item class="text-left justify-center d-flex">
          <v-col cols="12" class="p0">
            <v-list-item-title class="mb-1">輸入密碼</v-list-item-title>
            <v-text-field label="請輸入英文+數字共8位數密碼" solo ></v-text-field>
          </v-col>
        </v-list-item>
        <v-list-item class="text-left justify-center d-flex">
          <v-col cols="12" class="p0">
            <v-list-item-title class="mb-1">密碼再確認</v-list-item-title>
            <v-text-field label="再次輸入密碼做確認" solo ></v-text-field>
          </v-col>
        </v-list-item>

        <v-btn @click="e1 = 2" x-large class="col col-11 mt-6 text-no-wrap rounded-pill" style="background: linear-gradient(92.37deg, #29BCD0 6.91%, #1A73E9 94%);">
          <div class="text-body-1 white--text">下一步</div>
        </v-btn>
      </v-stepper-content>

      <v-stepper-content step="2">

        <v-list-item class="text-left justify-center d-flex">
          <v-col cols="12" class="p0">
            <v-list-item-title class="mb-1">SIP Server</v-list-item-title>
            <v-text-field label="SIP伺服器" solo ></v-text-field>
          </v-col>
        </v-list-item>
        <v-list-item class="text-left justify-center d-flex ">
          <v-col cols="12" class="p0" >
            <v-list-item-title class="mb-1">Proxy Server</v-list-item-title>
            <v-text-field label="代理伺服器" solo ></v-text-field>
          </v-col>
        </v-list-item>
        <v-list-item class="text-left justify-center d-flex">
          <v-col cols="12" class="p0" >
            <v-list-item-title class="mb-1">Realm</v-list-item-title>
            <v-text-field label="領域?" solo ></v-text-field>
          </v-col>
        </v-list-item>


         <v-btn @click="e1 = 1" x-large class="col col-11 mb-4 text-no-wrap rounded-pill" style="background: linear-gradient(92.37deg, #29BCD0 6.91%, #1A73E9 94%);">
          <div class="text-body-1 white--text">上一步</div>
        </v-btn>

        <v-btn to="/success" x-large class="col col-11 x-large text-no-wrap rounded-pill" style="background: linear-gradient(92.37deg, #29BCD0 6.91%, #1A73E9 94%);">
          <div class="text-body-1 white--text">註冊</div>
        </v-btn>
        
      </v-stepper-content>

     
    </v-stepper-items>
  </v-stepper>


  </v-card>



</template>

<script>
export default {
  name: "Enroll",

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

