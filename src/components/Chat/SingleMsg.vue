<template>

  <v-card max-width="768" style="height: 100vh;" class="mx-auto">

    <v-toolbar class=" py-2 mb-2">
      <v-list-item-avatar>
        <v-img src="https://cdn.vuetifyjs.com/images/lists/1.jpg"></v-img>
      </v-list-item-avatar>
      <v-list-item-content class="col-4 p0">
        <v-text class="text-left" v-text="'開發部'"></v-text>
        <v-text class="text-left body-2 black--text" v-text="'5位參與者'"></v-text>
        <!-- <span>5位參與者</span> -->
      </v-list-item-content>


      <v-toolbar-title class="white--text">網路電話</v-toolbar-title>

      <v-spacer></v-spacer>

      

      <v-menu bottom left >
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
          <v-icon class="chatActive">mdi-dots-vertical</v-icon>
        </v-btn>

          
        <v-btn icon>
          <v-icon class="chatActive">mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon v-bind="attrs" v-on="on">
          <v-icon class="chatActive">mdi-phone</v-icon>
        </v-btn>
        



      

        </template>
        <v-list>
          <v-list-item to="/profile">
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
            <img class="chatIcon" src="@/assets/svg/ic_g_exit.svg" alt="">
            <v-list-item-title>離開群組</v-list-item-title>
          </v-list-item>

        </v-list>
      </v-menu>
    </v-toolbar>
    
    <div class="bg" style="height: 80vh;">

      <v-col cols="12">
        <div class=" secondary rounded-lg" >
          <div class="text-body-2 grey--text text-center">昨天</div>
        </div>
      </v-col>

      <div class="justify-end d-flex mb-5">
        <div class="rounded-tr-0 selfchat rounded mx-6 px-3 py-3" v-text="`沒人在，沒人在，看不到喔~`"></div>
      </div>

      <div class="justify-start d-flex mb-5">
        <v-list-item-avatar class="m-0">
          <v-img src="https://cdn.vuetifyjs.com/images/lists/5.jpg"></v-img>
        </v-list-item-avatar>

        <div class="rounded-tr-0 rounded px-3 py-3 bgwhite" v-text="`有人在家嗎??最多幾個字，到第二行要多高呢?`"></div>
      </div>

    </div>

    <v-col cols="12" class="p0">
      <v-bottom-navigation v-model="value">
          <v-btn class="p0">
            <img class="chatActive" src="@/assets/svg/ic_g_image.svg" alt="">

            <!-- <v-icon class="chatActive">mdi-android-messages</v-icon> -->
          </v-btn>
          <v-btn class="p0" to="keyboard">
            <v-icon class="chatActive p0">mdi-paperclip</v-icon>
          </v-btn>
          <v-text-field
            outlined
            rounded
            label=""
            v-model="inputBox"
            hide-details
            style="border-color:#4E9EAC"  
            class="align-center col-7"        
          ></v-text-field>

          <v-btn>
            <v-icon class="chatActive">mdi-send</v-icon>
          </v-btn>
        </v-bottom-navigation>
    </v-col>

  </v-card>


   
</template>

<script>


  export default {
    name: 'Chat',

    data: () => ({
     tab: null,
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
  }
</script>

<style>
.v-application--is-ltr 
.v-list-item__avatar:first-child { 
  margin-right: 6px; 
}

/* .v-text-field.v-text-field--enclosed {
    margin-top: 16px !important;
    margin-bottom: 16px !important;
    padding: 0;
} */

.v-text-field fieldset, .v-text-field .v-input__control, .v-text-field
.v-input__slot { border-color: #4E9EAC; }

.v-input__slot { min-height: 43px !important; }



</style>
