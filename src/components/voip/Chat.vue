<template>
 <div class="" style=" width:100vw">
  <!-- <v-card max-width="768"  class="mx-auto m-0">     -->
    
    <v-col cols="12" class="secondary">
      <v-text-field
        outlined
        rounded
        label="輸入名稱、電話號碼或電子郵件"
        prepend-inner-icon="mdi-magnify"
        hide-details
      ></v-text-field>
    </v-col>

    <v-tabs
      style="height:40px"
      background-color="white"
      centered
      dark
      icons-and-text
      v-model="tab"
    >
      <v-col style="height:35px" class="p0" cols="6">
        <v-tab style="height:35px" class="text-body-1 grey--text ma-0 pa-0" href="#tab-1">
          好友
        </v-tab>
      </v-col>
      <v-tabs-slider></v-tabs-slider>
      <v-col style="height:35px" class="p0" cols="6">
        <v-tab style="height:35px" class="text-body-1 grey--text ma-0 pa-0" href="#tab-2">
          公司部門
        </v-tab>
      </v-col> 
    </v-tabs>

    <v-tabs-items style="height: 60vh;" v-model="tab">
      <v-tab-item value="tab-1" >
        <v-card class="bg" flat>
          <v-list two-line >
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

      <v-tab-item value="tab-2" class="bg">
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

    <div color="success" class="rounded-b-0 rounded-pill" style="height:100px; background: radial-gradient(111.7% 111.7% at 50% 100%, #C2EBF9 0%, rgba(231,249, 255, 0.99) 100%);">
      <v-list-item class="d-flex justify-center mb-6 pt-3 text-center">
        <div class="mx-2 flex-column d-flex">
          <v-btn
            color="success"
            fab
          >
          <img src="@/assets/svg/ic_g_history.svg" style="width:30px" alt="">
          </v-btn>
          <span class="body-2 black--text mt-1">最近紀錄</span>
        </div>
        <div class="mx-2 flex-column d-flex">
          <v-btn
            color="success"
            fab
            dark
          >
          <v-icon class="text-h5 grey--text">mdi-dialpad</v-icon>
          </v-btn>
          <span class="body-2 black--text mt-1">鍵盤</span>
        </div>
        <div class="mx-2 flex-column d-flex">
          <v-btn
            color="success"
            fab
            dark
          >
            <img src="@/assets/svg/ic_g_contactlist.svg" style="width:30px" alt="">
          </v-btn>
          <span class="body-2 black--text mt-1">通訊錄</span>

        </div>

      </v-list-item>
    </div>
   
  <!-- </v-card>  -->
  </div>
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
          title: 'group',
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

<style lang="scss">

@import "src/scss/_voipchat.scss";
</style>

