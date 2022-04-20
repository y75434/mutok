<template>

 <v-card
  max-width="768"
  style="height: 100vh; width: 100vw"
  class="mx-auto text-center d-flex flex-column justify-center secondary" 
  >

   
    <img src="@/assets/img/img_mail note@2x.png" class="mx-auto" alt="" style="width:300px;">

    
    
    
    <div class="text-body-1 black--text my-5">請至信箱收取通知， 點選信件內連結設定新密碼。</div>



  </v-card>



</template>

<script>
export default {
  name: "ForgotPW",

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

