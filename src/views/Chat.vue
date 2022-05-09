<template>
<!-- @contextmenu="handler($event)"
 -->
  <div style=" width:100vw">      
    <v-container class="p0" style="height: 100vh;" fluid permanent >
      <v-row>  


        <v-toolbar class="msbar py-2 my-2">
          <v-img class="mx-2" :src="require('@/assets/img/img_mutok_white@2x.png')" size="36px" max-width="50" alt=""></v-img>

          <v-toolbar-title class="white--text">網路電話</v-toolbar-title>

          <v-spacer></v-spacer>

          <v-btn icon>
            <v-icon style="color:#fff;">mdi-magnify</v-icon>
          </v-btn>

          <v-menu  >
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon v-bind="attrs" v-on="on">
                <v-icon style="color:#fff;">mdi-dots-vertical</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item to="/selfsetting">
                <v-list-item-title class="d-flex align-center">
                  <img class="menuIcon" src="@/assets/svg/ic_g_contactlist.svg" alt="">
                  通訊錄
                </v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title class="d-flex align-center">
                  <img class="menuIcon" src="@/assets/svg/ic_im_setting.svg" alt="">
                  訊息設定
                </v-list-item-title>
              </v-list-item>
              <v-list-item to="/chatselfsetting">
                <v-list-item-title class="d-flex align-center">
                  <img class="menuIcon" src="@/assets/svg/ic_user_setting.png" alt="">
                  帳號設定
                </v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title class="d-flex align-center">
                  <img class="menuIcon" src="@/assets/svg/ic_g_delmsg.svg" alt="">
                  清除所有訊息
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-toolbar>


      <v-tabs  background-color="white" centered  icons-and-text v-model="tab">
        <v-col style="height:35px" cols="6" class="p0">
          <v-tab style="height:35px" class="text-body-1 grey--text ma-0 pa-0" href="#tab-1">
            好友
          </v-tab>
        </v-col>
        <v-tabs-slider style="height:35px"></v-tabs-slider>
        <v-col style="height:35px" cols="6" class="p0">
          <v-tab style="height:35px" class="text-body-1 grey--text ma-0 pa-0" href="#tab-2">
            公司部門
          </v-tab>
        </v-col>
      </v-tabs>
      <v-col cols="12" style="height: 75vh;">
        <v-tabs-items v-model="tab" >
          <v-tab-item value="tab-1" class="bg">

            <v-menu
              v-model="showMenu"
              absolute
              offset-y
              style="max-width: 600px"
            >
            <template v-slot:activator="{ on, attrs }">

              <v-card >
                <v-list class="bg" two-line>
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
                      @contextmenu="show" v-bind="attrs" v-on="on" flat
                      v-else
                      :key="item.title"
                      class="d-flex justify-space-between mb-0"                    
                    >
                    <!-- to="/singlemsg" @click="set" -->

                    <v-badge
                      bordered
                      bottom
                      color="red"
                      dot
                      offset-x="20"
                      offset-y="27"
                    >
                      <v-list-item-avatar>
                        <v-img :src="item.avatar"></v-img>
                      </v-list-item-avatar>

                    </v-badge>

                      <v-list-item-content>
                        <v-list-item-title
                          class="text-left"
                          v-html="item.title"
                        ></v-list-item-title>
                        <v-list-item-subtitle
                          class="text-left"
                          v-html="item.subtitle"
                        ></v-list-item-subtitle>
                      </v-list-item-content>
                      <div style="height:100%" class="d-flex  flex-column">
                        <span class="grey--text text-body-2">20:08</span>
                        <v-badge
                          color="green"
                          style="inset: auto auto calc(100% - 5px) calc(100% - -1px)"
                          content="6"
                        ></v-badge>

                        <div class="text-right">
                          <v-badge color="green" style="inset: auto auto calc(100% - 5px) calc(100% - -1px);" content="6"></v-badge>
                        </div>
                      </div>

                    </v-list-item>

                  </template>

                  <v-list-item to="/singlemsg" @click="setGroup" class="d-flex justify-space-between mb-0">
                    <v-list-item-avatar>
                      <v-img src="https://cdn.vuetifyjs.com/images/lists/1.jpg"></v-img>
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title  class="text-left">group</v-list-item-title>
                      <v-list-item-subtitle class="text-left">group</v-list-item-subtitle>
                    </v-list-item-content>
                    <v-text class="">20:08</v-text>
                  </v-list-item>

                </v-list>


              

              </v-card>
            </template>

             <v-list>
                <v-list-item >
                  <v-list-item-title class="d-flex align-center">
                  Esther Howard
                  </v-list-item-title>
                </v-list-item>
                <v-list-item to="/selfsetting">
                  <v-list-item-title class="d-flex align-center">
                    <img class="menuIcon" src="@/assets/svg/ic_bk_info.svg" alt="">
                    個人資訊
                  </v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title class="d-flex align-center">
                    <img class="menuIcon" src="@/assets/svg/ic_bk_mute.svg" alt="">
                    關閉提醒
                  </v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title class="d-flex align-center">
                    <img class="menuIcon" src="@/assets/svg/ic_bk_vibe.svg" alt="">
                    設為震動
                  </v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title class="d-flex align-center">
                    <img class="menuIcon" src="@/assets/svg/ic_g_delmsg.svg" alt="">
                    刪除訊息紀錄
                  </v-list-item-title>
                </v-list-item>
              </v-list>

        </v-menu>

          </v-tab-item>
          <v-tab-item style="width:100%" value="tab-2">
            <v-card flat style="width:100vw">
              <v-list two-line class="bg">
                <template v-for="(item, index) in items" >
                  <v-subheader v-if="item.header" :key="item.header"></v-subheader>
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

                    <v-list-item-content>
                      <v-list-item-title
                        class="text-left"
                        v-html="item.title"
                      ></v-list-item-title>
                      <v-list-item-subtitle
                        class="text-left"
                        v-html="item.subtitle"
                      ></v-list-item-subtitle>
                    </v-list-item-content>
                    <div style="height:100%" class="d-flex  flex-column">
                      <span class="grey--text text-body-2">20:08</span>
                      <div class="text-right">
                        <v-badge color="green" style="inset: auto auto calc(100% - 6px) calc(100% - 65px); !important" content="6"></v-badge>
                      </div>
                    </div>
                  </v-list-item>
                </template>
              </v-list>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-col>

        <v-speed-dial
        
          :top="top"
          :bottom="bottom"
          :right="right"
          :left="left"
          :direction="direction"
        >
          <template v-slot:activator>
            <v-btn
              fab
              dark
              bottom right
              class="speeddial"      
            >
              <v-icon v-if="fab">
                mdi-close
              </v-icon>
              <v-icon v-else>
                mdi-plus
              </v-icon>
            </v-btn>
          </template>
          <v-btn
            color="white"
            to="/addf"
          >
            <v-icon>mdi-pencil</v-icon>
            新增聊天
          </v-btn>
          <v-btn
            color="white"
            to="/add"
          >
            <v-icon>mdi-plus</v-icon>
            新增好友
          </v-btn>
          <v-btn color="white">
            <v-icon>mdi-delete</v-icon>
            撥打緊急電話
          </v-btn>
        </v-speed-dial>


        <v-bottom-navigation >
          <v-btn>
            <span class="active">訊息</span>
            <v-icon style="color:#0EA5B0;">mdi-android-messages</v-icon>
          </v-btn>
          <v-btn to="/call">
            <span class="active">鍵盤</span>
            <v-icon style="color:#0EA5B0;">mdi-phone</v-icon>
          </v-btn>
          <v-btn>
            <span class="active">通訊錄</span>
            <v-icon style="color:#0EA5B0;">mdi-video</v-icon>
          </v-btn>
        </v-bottom-navigation>


      </v-row>
    </v-container>
  </div>


  

</template>

<script>

export default {
  name: "chat",
  data: () => ({ 
    direction: 'top',
    top:false,
    bottom:true,
    right:false,
    left:true,
    fab: false,  
    showMenu: false,
    x: 0,
    y: 0,
    tab: null,
    items: [
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
  methods: {    
   
    handler(event) { event.preventDefault(); },
    set(){
      this.$store.dispatch('setGroup', false);
    },
    setGroup(){
     this.$store.dispatch('setGroup', true);
    },
    show (e) {
      e.preventDefault()
      console.log(e,'361');
      this.showMenu = false
      this.x = e.clientX
      this.y = e.clientY
      this.$nextTick(() => {
        this.showMenu = true
      })
    }
  
   }
};
</script>

<style lang="scss">

@import 'src/scss/_chat.scss';
</style>
