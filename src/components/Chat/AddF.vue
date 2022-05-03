<template>  
   <v-card>
    <v-toolbar flat>
      <v-app-bar-nav-icon to="/chat" ><v-icon>mdi-arrow-left</v-icon></v-app-bar-nav-icon>

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
          <v-tab href="#mobile-tabs-5-1" class="primary--text">公司同事</v-tab>
          <v-tab href="#mobile-tabs-5-2" class="primary--text">公司群組</v-tab>          
        </v-tabs>
      </template>
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

    
    <v-tabs-items v-model="tabs">
      <v-tab-item :value="'mobile-tabs-5-1'" >
        <v-card flat class="mx-auto text-center">
          <v-badge
            bordered
            bottom
            color="darkgrey"
            offset-x="180"
            offset-y="40"
            icon="mdi-camera"
            class="d-flex justify-center mb-6"
          >
            <v-avatar size="70" class="my-6">
              <v-img src="https://cdn.vuetifyjs.com/images/lists/2.jpg"></v-img>
            </v-avatar>
          </v-badge>

          <v-list class="rounded-b-0 py-8 px-5 text-left bg">     
              <v-list-item class="p0">
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
                <a href="" class="herf--text">刪除</a>
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

      </v-tab-item>

      <v-tab-item :value="'mobile-tabs-5-2'">        
        <v-card flat>

          <div class="d-flex py-10 justify-center align-center bg">
            <div class="mr-10" style="width:20%"> 
              <v-badge
                bordered
                bottom
                color="darkgrey"
                offset-x="10"
                offset-y="20"
                icon="mdi-camera"
                class="d-flex justify-center mb-6"
              >
                <v-avatar size="100" >
                  <v-img src="https://cdn.vuetifyjs.com/images/lists/2.jpg"></v-img>
                </v-avatar>
              </v-badge>

            </div>

          <div class="d-flex flex-column" style="width:50%"> 
              <div class="text-body-1 grey--text d-flex justify-space-between text-left mb-3">
                群組名稱
              </div>
              <v-divider class="mb-2"></v-divider>

              <div class="text-body-1 grey--text text-center mb-3 mr-3 d-flex  align-center">
                公開訊息   
              </div>
              <v-divider></v-divider>
            </div>
          </div>

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
