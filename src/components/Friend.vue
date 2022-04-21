<template>

  <v-card max-width="450"  style="height: 100vh;" class="mx-auto text-center">
    <v-toolbar color="white">
      <v-app-bar-nav-icon to="/directory"><v-icon>mdi-arrow-left</v-icon></v-app-bar-nav-icon>
      <v-toolbar-title>Joe Cooper</v-toolbar-title>
      <v-spacer></v-spacer>   
    </v-toolbar>

    <v-avatar size="70" class="my-6">
      <v-img src="https://cdn.vuetifyjs.com/images/lists/2.jpg"></v-img>
    </v-avatar>


    <v-spacer></v-spacer>

    <div class="text-body-1 black--text mb-5">Joe Cooper</div>

    <div class="text-h5 lightblack--text mb-4">0225632563#1</div>

    

    <v-col cols="8" class="mx-auto" >

      <v-btn to="/call" large block class=" text-no-wrap rounded-pill" style="background: linear-gradient(92.37deg, #29BCD0 6.91%, #1A73E9 94%);">
        <div class="text-body-1 white--text"><v-icon class="">mdi-phone-remove-outline</v-icon>撥話</div>
      </v-btn>
    </v-col>

    
    <div class="text-body-1 black--text mb-3"> <v-icon class="text-h5 grey--text">mdi-phone-outgoing-outline</v-icon>通話中....</div>

     <div  class=" text-center" style="height:80px;">
      <v-list-item class="d-flex justify-center mb-1 pt-3">
        <div class="mx-2 flex-column d-flex">
          <v-btn style="box-shadow:none;background: transparent">
            <v-img :src="require('@/assets/svg/ic_bk_mute.svg')" size="15px"></v-img>
          </v-btn>
          <span class="body-2 black--text mt-1">靜音</span>
        </div>
        <div class="mx-2 flex-column d-flex">
          <v-btn style="box-shadow:none;background: transparent">
            <v-img :src="require('@/assets/svg/ic_g_edit.svg')" size="15px"></v-img>
          </v-btn>
          <span class="body-2 black--text mt-1">編輯聯絡人</span>
        </div>
        <div class="mx-2 flex-column d-flex">
          <v-btn style="box-shadow:none;background: transparent"  >
            <v-img :src="require('@/assets/svg/ic_g_del.svg')" size="15px"></v-img>
          </v-btn>
          <span class="body-2 black--text mt-1">刪除聯絡人</span>
        </div>
      </v-list-item>

    </div>
    



    <v-list color="secondary" class="rounded-b-0 py-8 text-left">     
        <v-list-item >
          <v-col cols="4" >
            <v-list-item-content class="p0">
            <v-list-item-title >顯示名稱</v-list-item-title>
            </v-list-item-content>
          </v-col>
          <v-list-item-content >
            <v-list-item-subtitle>Joe Cooper</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item class="p0">
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

        <v-list-item class="p0">
          <v-col cols="4">
            <v-list-item-content >
              <v-list-item-title>聯絡電話1</v-list-item-title>
            </v-list-item-content>
          </v-col>

          <v-list-item-content>
            <v-list-item-subtitle>0225632563</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item class="p0">
          <v-col cols="4">
            <v-list-item-content>
              <v-list-item-title>聯絡電話2</v-list-item-title>
            </v-list-item-content>
          </v-col>
          <v-list-item-content>
            <v-list-item-subtitle>01-2345678</v-list-item-subtitle>
          </v-list-item-content>
          <a href="" class="redherf--text">刪除</a>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item class="p0">
          <v-col cols="4">
            <v-list-item-content>
              <v-list-item-title>聯絡電話2</v-list-item-title>
            </v-list-item-content>
          </v-col>
          <v-list-item-content>
            <v-list-item-subtitle>01-2345678</v-list-item-subtitle>
          </v-list-item-content>
          <a href="" class="herf--text">新增</a>
        </v-list-item>

<v-divider></v-divider>


        <v-list-item class="p0">
          <v-col cols="4">
            <v-list-item-content>
              <v-list-item-title>隱藏</v-list-item-title>
            </v-list-item-content>
          </v-col>
          <v-list-item-content >
          <v-list-item-subtitle>aloha me</v-list-item-subtitle>
          </v-list-item-content>
          <v-switch label="公開" ></v-switch>
        </v-list-item>

        <v-divider></v-divider>

    </v-list>
  



   
    
  </v-card>


</template>

<script>
export default {
  name: "friend",

  data: () => ({
    
  }),
};
</script>
