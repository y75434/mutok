<template>
  

  <div>      
    <v-container class="" style="height: 100vh;" fluid permanent>
      <v-row>  
        <v-toolbar class="bar py-2 mb-2">
          <v-img class="mx-2" :src="require('@/assets/img/img_mutok_white@2x.png')" size="36px" max-width="50" alt=""></v-img>
          <v-toolbar-title class="white--text">網路電話</v-toolbar-title>

          <v-spacer></v-spacer>

          <v-btn icon>
            <v-icon style="color:#fff;">mdi-magnify</v-icon>
          </v-btn>

          <v-menu bottom left>
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon v-bind="attrs" v-on="on">
                <v-icon style="color:#fff;">mdi-dots-vertical</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item to="/selfsetting">
                <v-list-item-title class="d-flex align-center" >
                  <img class="menuIcon" src="@/assets/svg/ic_user_setting.png" alt="">
                  個人設定
                </v-list-item-title>
              </v-list-item>
              <v-list-item to="/phonesetting">
                <v-list-item-title class="d-flex align-center">
                  <img class="menuIcon" src="@/assets/svg/ic_im_setting.svg" alt="">
                  電話設定
                </v-list-item-title>
              </v-list-item>
              <v-list-item >
                <v-list-item-title class="d-flex align-center">
                  <img class="menuIcon" src="@/assets/svg/ic_g_voicemail.svg" alt="">
                  語音信箱
                </v-list-item-title>
              </v-list-item>
              <v-list-item  >
                <v-list-item-title class="d-flex align-center">
                  <img class="menuIcon" src="@/assets/svg/ic_g_delmsg.svg" alt="">
                  刪除通話紀錄
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-toolbar>

       

        <router-view />



        
    

      

        <v-bottom-navigation>
          <v-btn to="/chat">
            <span class="active">訊息</span>
            <v-icon style="color:#0EA5B0;">mdi-android-messages</v-icon>
          </v-btn>
          <v-btn to="/call">
            <span class="active">電話</span>
            <v-icon style="color:#0EA5B0;">mdi-phone</v-icon>
          </v-btn>
          <v-btn>
            <span class="active">會議</span>
            <v-icon class="" style="color:#0EA5B0;">mdi-video</v-icon>
          </v-btn>
        </v-bottom-navigation>

      </v-row>
    </v-container>
  </div>

</template>

<script>


export default {
  name: "Directory",
  components: { 
  }
};
</script>



