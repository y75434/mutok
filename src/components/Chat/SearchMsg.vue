<template>  
   <v-card>
    <v-toolbar flat>
      <v-app-bar-nav-icon to="/chat" ><v-icon>mdi-arrow-left</v-icon></v-app-bar-nav-icon>

      <v-list-item-avatar>
        <v-img src="https://cdn.vuetifyjs.com/images/lists/1.jpg"></v-img>
      </v-list-item-avatar>
      <v-toolbar-title class="ml-2" style="width: 400px !important">Joe Cooper</v-toolbar-title>

      <v-list-item-content style="width: 500px !important" class="col-4">

      </v-list-item-content>

      <v-toolbar-title class="white--text">網路電話</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-menu bottom left>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
          <v-icon class="chatActive">mdi-dots-vertical</v-icon>
        </v-btn>

          
        <v-btn icon>
          <v-icon class="chatActive">mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon @click="call = !call" >
          <v-icon class="chatActive">mdi-phone</v-icon>
        </v-btn>
        </template>
        <v-list>
          <v-list-item v-if="!this.$store.getters.group" to="/selfsetting">
            <img class="chatIcon" src="@/assets/svg/ic_g_info.svg" alt="">
            <v-list-item-title>個人資訊</v-list-item-title>
          </v-list-item>
          <v-list-item v-else  to="/selfsetting">
            <img class="chatIcon" src="@/assets/svg/ic_g_info.svg" alt="">
            <v-list-item-title>群組資訊</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <img class="chatIcon" src="@/assets/svg/ic_g_mute.svg" alt="">
            <v-list-item-title>關閉提醒</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <img class="chatIcon" src="@/assets/svg/ic_g_vibe.svg" alt="">
            <v-list-item-title>設為震動</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <img class="chatIcon" src="@/assets/svg/ic_g_del.svg" alt="">
            <v-list-item-title>刪除訊息</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <img class="chatIcon" src="@/assets/svg/ic_g_location.svg" alt="">
            <v-list-item-title>傳送目前位置</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <img class="chatIcon" src="@/assets/svg/ic_g_exit.svg" alt="">
            <v-list-item-title>離開群組</v-list-item-title>
          </v-list-item>

        </v-list>
      </v-menu>



    </v-toolbar>

    <v-col cols="12" class="secondary">
      <v-text-field
        outlined
        rounded
        label="輸入名稱、電話號碼或電子郵件"
        prepend-inner-icon="mdi-line-scan"
        hide-details
      ></v-text-field>
    </v-col>

    <v-text class="text-body-2 grey--text mt-3 ml-2 d-flex justify-start">訊息(8)</v-text>

    <v-list two-line class="bg">
      <template v-for="(item, index) in items" >
        <v-subheader
          v-if="item.header"
          :key="item.header"
          v-text="item.header"
        ></v-subheader>

        <v-divider
          v-else-if="item.divider"
          :key="index"
          :inset="item.inset"
        ></v-divider>

        <v-list-item
          v-else
          :key="item.title"
          class="d-flex justify-space-between mb-0"
        >
          <v-list-item-avatar>
            <v-img :src="item.avatar"></v-img>
          </v-list-item-avatar>

          <v-list-item-content class="p0">
            <v-list-item-title
              class="text-left"
              v-html="item.title"
            ></v-list-item-title>
            <v-list-item-subtitle
              class="text-left"
              v-html="item.subtitle"
            ></v-list-item-subtitle>
          </v-list-item-content>
          <v-text class="">20:08</v-text>

        </v-list-item>
        

      </template>
      <v-divider></v-divider>

      <v-list-item class="d-flex justify-center p0 mb-0">
         
        <a href="" class="text-decoration-none herf--text">顯示更多訊息</a>

          

      </v-list-item>

    </v-list>


    
    
  </v-card>

</template>

<script>
export default {
  name: "PhoneSetting",

  data: () => ({
    
    tabs: null,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    items: [
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: 'Joe Cooper',
          subtitle: `03-65428652`,
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          title: 'Joe Cooper',
          subtitle: `03-65428652`,
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          title: 'Oui oui',
          subtitle: '03-65428652',
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
          title: 'Joe Cooper',
          subtitle: '03-65428652',
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
          title: 'Joe Cooper',
          subtitle: '03-65428652',
        },
      ],
    
  }),
};
</script>

<style scoped>
.v-text-field--outlined > .v-input__control > .v-input__slot { 
  background: #fff !important; 
}

.v-text-field--outlined > .v-input__control > .v-input__slot {
    background: #fff;
}

.v-list-item__content{
  padding: 0;
}



.v-application .primary--text {
    color: #0EA5B0 !important;
    caret-color: #0EA5B0 !important;
}

.v-tabs-slider {
   color: #0EA5B0 !important;
}

.v-input__control{
  background: #fff !important;
}

</style>
