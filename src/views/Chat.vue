<template>

  <div>      
    <v-container class="" style="height: 100vh;" fluid permanent>
      <v-row>  


        <v-toolbar class="msbar py-2 mb-2">
          <v-img :src="require('@/assets/img/img_mutok_color@2x.png')" size="36px" max-width="50" alt=""></v-img>

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
                <v-list-item-title>
                  <img class="menuIcon" src="" alt="">
                  <!-- @/assets/svg/ic_g_contactlist.svg -->

                  通訊錄
                </v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>
                  <img class="menuIcon" src="@/assets/svg/ic_user_setting.png" alt="">
                  訊息設定
                </v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>
                  <img class="menuIcon" src="@/assets/svg/ic_user_setting.png" alt="">
                  帳號設定
                </v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>
                  <img class="menuIcon" src="@/assets/svg/ic_g_delmsg.png" alt="">
                  清除所有訊息
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-toolbar>

        <router-view />

        <v-bottom-navigation v-model="value">
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

        <!-- <Chat /> -->
      </v-row>
    </v-container>
  </div>


  

</template>
<script>
//  import Chat from "../components/voip/Chat.vue";


export default {
  name: "Chat",
  components: { 
    // Chat 
  },
  data: () => ({
    items: [
      { header: "Today" },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        title: "Brunch this weekend?",
        subtitle: `012-12345678`,
      },
      { divider: true, inset: true },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
        title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
        subtitle: `012-12345678`,

      },
      { divider: true, inset: true },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
        title: "Oui oui",
        subtitle: `012-12345678`,

      },
      { divider: true, inset: true },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
        title: "Birthday gift",
        subtitle: `012-12345678`,

      },
      { divider: true, inset: true },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
        title: "Recipe to try",
        subtitle: `012-12345678`,

      },
    ],
  }),
};
</script>

<style scoped>
.sidebar {
  display: block;
  height: 100%;
}
</style>
