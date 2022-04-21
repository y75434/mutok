<template>

  <div @contextmenu="handler($event)">      
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
                <v-list-item-title class="d-flex align-center">
                  <img class="menuIcon" src="@/assets/svg/ic_g_contactlist.svg" alt="">
                  <!--  -->

                  通訊錄
                </v-list-item-title>
              </v-list-item>
              <v-list-item >
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

        <!-- <router-view /> -->

      <v-tabs background-color="white" centered dark icons-and-text v-model="tab">
        <v-col cols="6">

          <v-tab class="text-body-1 grey--text ma-0 pa-0" href="#tab-1">
            好友
          </v-tab>
        </v-col>

        <v-tabs-slider></v-tabs-slider>
        <v-col cols="6">

          <v-tab class="text-body-1 grey--text ma-0 pa-0" href="#tab-2">
            公司部門
          </v-tab>
        </v-col>
      </v-tabs>

        <v-tabs-items v-model="tab" @contextmenu="open">
          <v-tab-item value="tab-1">
            <v-card class="bg" flat>
              <v-list two-line>
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
                    to="/singlemsg"

                  >

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
                    <v-text class="">20:08</v-text>

                  </v-list-item>
                </template>
              </v-list>

            </v-card>
          </v-tab-item>

          <v-tab-item value="tab-2">
            <v-card flat>
              <v-list two-line>
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
                    <v-text class="">20:08</v-text>

                  </v-list-item>
                </template>
              </v-list>
            </v-card>
          </v-tab-item>
        </v-tabs-items>

        <v-speed-dial
      v-model="fab"
      top="false"
      bottom="true"
      right="false"
      left="true"
      :direction="top"
    >
          <template v-slot:activator>
            <v-btn
              v-model="fab"
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
          <v-btn
            
            color="white"
          >
            <v-icon>mdi-delete</v-icon>
            撥打緊急電話
          </v-btn>
        </v-speed-dial>


        <v-menu v-model="showMenu" :position-x="x" :position-y="y" absolute offset-y bottom left>
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on">
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
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
                <!--  -->

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



        <v-bottom-navigation v-model="value">
          <v-btn>
            <span>訊息</span>

            <v-icon>mdi-android-messages</v-icon>
          </v-btn>

          <v-btn to="/call">
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
//  import Chat from "../components/voip/Chat.vue";


export default {
  name: "Chat",
  components: { 
    // Chat 
  },
  data: () => ({
    showMenu: false,
    x: 0,
    y: 0,
    tab: null,
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
  computed: {
		style() {
			return {
				top: `${this.top}px`,
				left: `${this.left}px`,
			};
		},
	},
  methods: {
    handler(event) { event.preventDefault(); },

    show(e) { 
      e.preventDefault(); 
      console.log(e);
      
      this.showMenu = false; 
      this.x = e.clientX; 
      this.y = e.clientY; 
      this.$nextTick(() => { 
        this.showMenu = true; 
      });
    } ,
  
   }
};
</script>

<style scoped>
.sidebar {
  display: block;
  height: 100%;
}
</style>
