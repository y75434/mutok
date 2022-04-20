<template>
  
  <!-- <v-card max-width="768" style="height: 100vh;width:100vw" class="mx-auto"> -->

    <!-- <v-toolbar color="white" >
      <v-app-bar-nav-icon><v-icon>mdi-arrow-left</v-icon></v-app-bar-nav-icon>
      <v-toolbar-title>新增聊天</v-toolbar-title>

      <v-spacer></v-spacer> 
      <a href="" class="herf--text text-decoration-none">確定</a>
  
    </v-toolbar>

    <v-col cols="12" class="secondary">
      <v-text-field
        outlined
        rounded
        label="輸入名稱、電話號碼或電子郵件"
        prepend-inner-icon="mdi-magnify"
        hide-details
      ></v-text-field>
    </v-col> -->

   
   <v-card>
    <v-toolbar flat>
      <v-app-bar-nav-icon to="/chat/chat" ><v-icon>mdi-arrow-left</v-icon></v-app-bar-nav-icon>

      <v-toolbar-title>新增聊天</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>


      


      <template v-slot:extension>
        <v-tabs
          v-model="tabs"
          fixed-tabs
        >
          <v-tabs-slider></v-tabs-slider>
          <v-tab
            href="#mobile-tabs-5-1"
            class="primary--text"
          >
            <v-icon>mdi-phone</v-icon>
          </v-tab>

          <v-tab
            href="#mobile-tabs-5-2"
            class="primary--text"
          >
            <v-icon>mdi-heart</v-icon>
          </v-tab>

          
        </v-tabs>
      </template>
    </v-toolbar>

    <v-col cols="12" class="secondary">
      <v-text-field
        outlined
        rounded
        label="輸入名稱、電話號碼或電子郵件"
        prepend-inner-icon="mdi-magnify"
        hide-details
      ></v-text-field>
    </v-col>

    
    <v-tabs-items v-model="tabs">
      <v-tab-item
        v-for="i in 2"
        :key="i"
        :value="'mobile-tabs-5-' + i"
      >
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

          <v-list two-line class="text-left">
            <v-list-item>
              <v-col cols="4">
                <v-list-item-content>
                <v-list-item-title >暱稱</v-list-item-title>
                </v-list-item-content>
              </v-col>
              <v-list-item-content >
                <v-list-item-subtitle>rachel-doqubiz</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>

            <v-list-item>
              <v-col cols="4">
                <v-list-item-content>
                <v-list-item-title>帳號</v-list-item-title>
                </v-list-item-content>
              </v-col>
                <v-list-item-content>
                <v-list-item-subtitle>rachellee</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>

            <v-list-item>
              <v-col cols="4">
                <v-list-item-content >
                  <v-list-item-title>Email</v-list-item-title>
                </v-list-item-content>
              </v-col>

              <v-list-item-content>
                <v-list-item-subtitle>rachel.lee@doqubiz.com</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>

            <v-list-item>
              <v-col cols="4">
                <v-list-item-content>
                  <v-list-item-title>電話號碼1</v-list-item-title>
                </v-list-item-content>
              </v-col>
              <v-list-item-content>
                <v-list-item-subtitle>01-2345678</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>

            <v-list-item>
              <v-col cols="4">
                <v-list-item-content>
                  <v-list-item-title>電話號碼2</v-list-item-title>
                </v-list-item-content>
              </v-col>
              <v-list-item-content >
              <v-list-item-subtitle>01-2345678</v-list-item-subtitle>
              </v-list-item-content>
              <a class="herf--text" href="">新增電話</a>
            </v-list-item>

            <v-divider></v-divider>

          </v-list>


        </v-card>
      </v-tab-item>


    
    </v-tabs-items>
  </v-card>

   



  <!-- </v-card> -->

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
