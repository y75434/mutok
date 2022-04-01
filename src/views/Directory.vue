<template>
  <v-container>
    <v-row class="text-center">
      <v-card max-width="450" class="mx-auto">
        <v-toolbar
          style="
            background: radial-gradient(
              103.2% 247.39% at 0% 6.82%,
              #0083cc 0%,
              #328DE139.49%,
              rgba(39, 26, 186, 0.7) 92.57%
            );
          "
          dark
        >
          <v-app-bar-nav-icon></v-app-bar-nav-icon>

          <v-toolbar-title>網路電話</v-toolbar-title>

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
                <v-list-item-title>個人設定</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>電話設定</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>語音信箱</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>刪除通話紀錄</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-toolbar>

      <v-tabs
        background-color="white"
        centered
        dark
        icons-and-text
        v-model="tab"
      >
      <v-tabs-slider>ssss</v-tabs-slider>

      <v-tab class="text-body-1 grey--text mb-5" href="#tab-1">
        好友
      </v-tab>

      <v-tab class="text-body-1 grey--text mb-5" href="#tab-2">
        公司部門
      </v-tab>

    
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item value="tab-1">
        <v-card flat>
          <v-card-text> text</v-card-text>
        </v-card>
      </v-tab-item>

      <v-tab-item value="tab-2">
        <v-card flat>
          <v-card-text> text</v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>


        <v-list three-line>
          <template v-for="(item, index) in items">
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
              class="d-flex justify-space-between mb-6"
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

        <div
          color="success"
          class="rounded-b-0"
          style="
            height: 100px;
            background: radial-gradient(
              111.7% 111.7% at 50% 100%,
              #c2ebf9 0%,
              rgba(231, 249, 255, 0.99) 100%
            );
          "
        >
          <v-list-item class="d-flex justify-center mb-6 pt-3">
            <div class="mx-2">
              <v-btn color="success" fab
                ><v-icon class="text-h5 grey--text"
                  >mdi-bullhorn-variant-outline</v-icon
                >
              </v-btn>
            </div>
            <div class="mx-2">
              <v-btn color="success" fab dark
                ><v-icon class="text-h5 grey--text">mdi-microphone-off</v-icon>
              </v-btn>
            </div>
            <div class="mx-2">
              <v-btn color="success" fab dark
                ><v-icon class="text-h5 grey--text">mdi-dialpad</v-icon>
              </v-btn>
            </div>
          </v-list-item>
        </div>

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
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Directory",

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
