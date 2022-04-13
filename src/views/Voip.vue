<template>
  

  <div>      
    <v-container class="" style="height: 100vh;" fluid permanent>
      <v-row>  
        <v-toolbar class="bar py-2 mb-2">
          <v-img :src="require('@/assets/img/img_mutok_white@2x.png')" size="36px" max-width="50" alt=""></v-img>

          <v-toolbar-title class="white--text">網路電話</v-toolbar-title>

          <v-spacer></v-spacer>

          <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>

          <v-menu bottom left>
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon v-bind="attrs" v-on="on">
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item to="/selfsetting">
                <v-list-item-title class="d-flex align-center" >
                  <v-img width="5px" :src="require('@/assets/svg/ic_user_setting.png')"></v-img>
                  個人設定
                </v-list-item-title>
              </v-list-item>
              <v-list-item >
                <v-list-item-title class="d-flex align-center">
                  <v-img width="10px" :src="require('@/assets/svg/ic_im_setting.svg')"></v-img>
                  電話設定
                </v-list-item-title>
              </v-list-item>
              <v-list-item >
                <v-list-item-title class="d-flex align-center">
                  <v-img width="10px" :src="require('@/assets/svg/ic_g_voicemail.svg')"></v-img>
                  語音信箱
                </v-list-item-title>
              </v-list-item>
              <v-list-item  >
                <v-list-item-title class="d-flex align-center">
                  <v-img width="10px" :src="require('@/assets/svg/ic_g_delmsg.svg')"></v-img>
                  刪除通話紀錄
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-toolbar>

       

        <router-view />



        
    

      

        <v-bottom-navigation>
          <v-btn>
            <span>最近紀錄</span>

            <v-icon>mdi-android-messages</v-icon>
          </v-btn>

          <v-btn to="keyboard">
            <span>鍵盤</span>

            <v-icon>mdi-phone</v-icon>
          </v-btn>

          <v-btn>
            <span>通訊錄</span>

            <v-icon>mdi-video</v-icon>
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



