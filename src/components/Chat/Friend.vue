<template>

 <v-card
  max-width="768"
  style="height: 100vh; width: 100vw"
  class="mx-auto text-center"
  >

  <v-toolbar color="white" class="pt-2">
    <v-app-bar-nav-icon to="/singlemsg"><v-icon>mdi-arrow-left</v-icon></v-app-bar-nav-icon>
    <v-avatar size="40" class="mr-3">
      <v-img src="https://cdn.vuetifyjs.com/images/lists/2.jpg"></v-img>
    </v-avatar>

    <v-toolbar-title>Joe Cooper</v-toolbar-title>
    <v-spacer></v-spacer>
    <a to="/chat" class="herf--text text-decoration-none">確定</a>
  </v-toolbar>



     
    <div  class="d-flex my-10 justify-center align-center ">
      <div class="" style="width:40%"> 
        <v-avatar size="100" >
          <v-img src="https://cdn.vuetifyjs.com/images/lists/2.jpg"></v-img>
        </v-avatar>
      </div>

     <div class="d-flex flex-column" style="width:60%"> 
        <div class="text-body-1 mx-6 black--text d-flex justify-space-between text-left mb-3">
          本人暱稱<v-icon class="text-h5 grey--text ">mdi-pencil</v-icon>
        </div>

        <div class="text-body-2 mx-6 black--text text-center mb-3 mr-3 d-flex  align-center">
          忙碌中    
          <v-icon size="4" color="red">mdi-circle</v-icon>
        </div>
      </div>
    </div>

     <div class="text-center mb-7" style="height:80px;">
      <v-list-item class="d-flex justify-center pb-10 pt-3">
        <div class="mx-4 flex-column d-flex">
          <v-btn style="box-shadow:none;background: transparent">
            <img class="profileIcon filter" src="@/assets/svg/ic_g_addfriend.svg" alt="">
          </v-btn>
          <span class="body-2 black--text mt-1">邀請</span>
        </div>
        <div class="mx-4 flex-column d-flex">
          <v-btn style="box-shadow:none;background: transparent">
            <img class="profileIcon" src="@/assets/svg/ic_bk_mute.svg" alt="">
          </v-btn>
          <span class="body-2 black--text mt-1">編輯聯絡人</span>
        </div>
        <div class="mx-4 flex-column d-flex">
          <v-btn style="box-shadow:none;background: transparent"  >
            <img class="profileIcon" src="@/assets/svg/ic_bk_del.svg" alt="">
            <!-- <v-img :src="require('@/assets/svg/ic_g_del.svg')" size="15px"></v-img> -->
          </v-btn>
          <span class="body-2 black--text mt-1">刪除聯絡人</span>
        </div>
      </v-list-item>

    </div>


    <v-list one-line class="text-left bg" style="height: 60vh;">
      <v-list-item>
        <v-col cols="4">
          <v-list-item-content>
          <v-list-item-title >暱稱</v-list-item-title>
          </v-list-item-content>
        </v-col>
        <v-list-item-content >
          <v-list-item-subtitle>Joe Cooper</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list-item>
        <v-col cols="4">
          <v-list-item-content>
          <v-list-item-title>帳號</v-list-item-title>
          </v-list-item-content>
        </v-col>
          <v-list-item-content>
          <v-list-item-subtitle>Joecooper</v-list-item-subtitle>
          </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list-item>
        <v-col cols="4">
          <v-list-item-content >
            <v-list-item-title>信箱</v-list-item-title>
          </v-list-item-content>
        </v-col>

        <v-list-item-content>
          <v-list-item-subtitle>aloha@mail.com</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list-item>
        <v-col cols="4">
          <v-list-item-content>
            <v-list-item-title>電話號碼1</v-list-item-title>
          </v-list-item-content>
        </v-col>
        <v-list-item-content>
          <v-list-item-subtitle>01-2345678</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list-item>
        <v-col cols="4">
          <v-list-item-content>
            <v-list-item-title>電話號碼2</v-list-item-title>
          </v-list-item-content>
        </v-col>
        <v-list-item-content >
        <v-list-item-subtitle>01-2345678</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

    </v-list>

  </v-card>



</template>

<script>
export default {
  name: "Friend",

  data: () => ({
   
  }),
};
</script>
