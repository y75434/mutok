<template>

 <v-card
  max-width="768"
  style="height: 100vh; width: 100vw"
  class="mx-auto text-center"
  >

  <v-toolbar color="white" >
    <v-app-bar-nav-icon to="/chat"><v-icon>mdi-arrow-left</v-icon></v-app-bar-nav-icon>
    <v-toolbar-title>帳號設定</v-toolbar-title>
    <v-spacer></v-spacer>
  </v-toolbar>

    <v-row  class="d-flex pt-6 justify-center align-center text-left bg"> 
      <div style="width:400px" class="d-flex mt-5 justify-center align-center ">
        <div class="" style="width:40%"> 
          <v-badge
            bordered
            bottom
            color="darkgrey"
            offset-x="47"
            offset-y="20"
            icon="mdi-camera"
            class="d-flex justify-center mb-6"
          >
            <v-avatar size="100" >
              <v-img src="https://cdn.vuetifyjs.com/images/lists/2.jpg"></v-img>
            </v-avatar>
          </v-badge>

        </div>

      <div class="d-flex flex-column" style="width:60%"> 
          <div class="text-body-1 mx-6 black--text d-flex justify-space-between text-left mb-3">
            本人暱稱

            <v-menu offset-y>
              <template v-slot:activator="{ on }">
                <a v-on="on" class="grey--text justify-end d-flex align-center">
                  <v-icon class="text-h5 grey--text">mdi-pencil</v-icon>
                </a>
              </template>
              <v-list>
                <v-list-item >
                  <v-list-item-title class="align-center d-flex">
                    <v-icon class="pr-2" size="4" color="grey">mdi-circle</v-icon>
                    未上線
                  </v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title class="align-center d-flex">
                    <v-icon class="pr-2" size="4" color="red">mdi-circle</v-icon>
                    忙碌中
                  </v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title class="align-center d-flex">
                    <v-icon class="pr-2" size="4" color="green">mdi-circle</v-icon>
                    有空
                  </v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title class="align-center d-flex">
                    <v-icon class="pr-2" size="4" color="orange">mdi-circle</v-icon>
                    電話中
                  </v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title class="align-center d-flex">
                    <v-icon class="pr-2" size="4" color="deep-purple">mdi-circle</v-icon>
                    勿打擾
                  </v-list-item-title>
                </v-list-item>

              </v-list>
            </v-menu>

            
          </div>
          <div class="text-body-2 mx-6 black--text text-center mb-3 mr-3 d-flex  align-center">
            忙碌中    
            <v-icon size="4" color="red">mdi-circle</v-icon>
          </div>
        </div>
      </div>
      
      
      
      
    </v-row>


    <v-list two-line class="text-left bg">
      <v-list-item class="p0">
        <v-col cols="4" >
          <v-list-item-content >
          <v-list-item-title >帳號</v-list-item-title>
          </v-list-item-content>
        </v-col>
        <v-list-item-content >
          <v-list-item-subtitle>aloha</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list-item class="p0">
        <v-col cols="4">
          <v-list-item-content>
          <v-list-item-title>號碼</v-list-item-title>
          </v-list-item-content>
        </v-col>
          <v-list-item-content>
          <v-list-item-subtitle>021-12345678</v-list-item-subtitle>
          </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list-item class="p0">
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

      <v-list-item class="p0">
        <v-col cols="4">
          <v-list-item-content>
            <v-list-item-title>密碼</v-list-item-title>
          </v-list-item-content>
        </v-col>
        <v-list-item-content>
          <v-list-item-subtitle>**********</v-list-item-subtitle>
        </v-list-item-content>
        <a href="" class="herf--text">更改密碼</a>
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
        <v-switch color="#05B2DC"  label="公開" ></v-switch>
  
      </v-list-item>


    </v-list>

    <v-text class="text-body-2 grey--text mt-3 ml-2 d-flex justify-start">系統設定</v-text>
    <v-expansion-panels class="bg">
      <v-list-item>
        <v-col cols="4">
          <v-list-item-content>
            <v-list-item-title>通知</v-list-item-title>
          </v-list-item-content>
        </v-col>
        <v-list-item-content >
          <v-menu offset-y>
            <template v-slot:activator="{ on }">
              <a v-on="on" class="grey--text justify-end d-flex align-center">
                <img class="chatIcon" src="@/assets/svg/ic_bk_mute.svg" alt="">
                <!-- <v-img :src="require('@/assets/svg/ic_bk_mute.svg')" size="15px"></v-img> -->
                震動
              </a>
            </template>
            <v-list>
              <v-list-item >
                <v-list-item-title class="align-center d-flex">
                  <img class="chatIcon" src="@/assets/svg/ic_g_ring.svg" alt="">
                  鈴聲
                </v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title class="align-center d-flex">
                  <img class="chatIcon" src="@/assets/svg/ic_bk_vibe.svg" alt="">
                  震動
                </v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title class="align-center d-flex">
                  <img class="chatIcon" src="@/assets/svg/ic_bk_mute.svg" alt="">
                  靜音
                </v-list-item-title>
              </v-list-item>
              

            </v-list>
          </v-menu>

        </v-list-item-content>
      </v-list-item>

      <v-expansion-panel class="bg">
        <v-expansion-panel-header>
          通訊協定
        </v-expansion-panel-header>
        <v-expansion-panel-content>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel class="bg">
        <v-expansion-panel-header>
          通訊協定
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          Lorem ipsum dolor sit amet, 
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel class="bg">
        <v-expansion-panel-header>
          通訊協定
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          Lorem ipsum dolor sit amet, 
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel class="bg">
        <v-expansion-panel-header>
          伺服器設定
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          Lorem ipsum dolor sit amet, 
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel class="bg">
        <v-expansion-panel-header>
          安全設定
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          Lorem ipsum dolor sit amet, 
        </v-expansion-panel-content>
      </v-expansion-panel>


    </v-expansion-panels>


  </v-card>



</template>

<script>
export default {
  name: "SelfSetting",

  data: () => ({
    
    items: [
      { header: "Today" },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        title: "Brunch this weekend?",
        subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
      },
      { divider: true, inset: true },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
        title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
        subtitle: `<span class="text--primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
      },
      { divider: true, inset: true },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
        title: "Oui oui",
        subtitle:
          '<span class="text--primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
      },
      { divider: true, inset: true },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
        title: "Birthday gift",
        subtitle:
          '<span class="text--primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
      },
      { divider: true, inset: true },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
        title: "Recipe to try",
        subtitle:
          '<span class="text--primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
      },
    ],
  }),
};
</script>

<style scoped>
.v-list-item__content {   
  padding: 0 !important;
}

</style>
