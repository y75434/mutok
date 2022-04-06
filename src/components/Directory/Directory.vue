<template>
  <v-container>
    <v-row class="text-center">

        <v-card max-width="450" class="mx-auto">
          <v-toolbar
           style="background: radial-gradient(103.2% 247.39% at 0% 6.82%, #0083CC 0%, #328DE139.49%, rgba(39, 26, 186, 0.7) 92.57%);"           
            dark
          >
            <v-app-bar-nav-icon></v-app-bar-nav-icon>

            <v-toolbar-title>即時訊息</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn icon>
              <v-icon>mdi-magnify</v-icon>
            </v-btn>


          <v-menu
            bottom
            left
          >
          <template v-slot:activator="{ on, attrs }">

            <v-btn icon v-bind="attrs" v-on="on">
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>

          </template>
          <v-list>
            <v-list-item to="/selfsetting">
              <v-list-item-title >個人設定</v-list-item-title>
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

                <v-list-item-content >
                  <v-list-item-title class="text-left" v-html="item.title"></v-list-item-title>
                  <v-list-item-subtitle class="text-left" v-html="item.subtitle"></v-list-item-subtitle>
                    

                </v-list-item-content>
                <v-text class="">20:08</v-text>

                <v-icon color="yellow darken-3">
                      mdi-star
                    </v-icon>

              </v-list-item>
            </template>
          </v-list>

          <div color="success" class="rounded-b-0 rounded-pill" style="height:100px; background: radial-gradient(111.7% 111.7% at 50% 100%, #C2EBF9 0%, rgba(231,249, 255, 0.99) 100%);">
            <v-list-item class="d-flex justify-center mb-6 pt-3">
              <div class="mx-2 flex-column d-flex">
                <v-btn
                  color="success"
                  fab
                ><v-icon class="text-h5 grey--text">mdi-bullhorn-variant-outline</v-icon>
                </v-btn>
                <span class="body-2 black--text mt-1">最近紀錄</span>
              </div>
              <div class="mx-2 flex-column d-flex">
                <v-btn
                  color="success"
                  fab
                  dark
                ><v-icon class="text-h5 grey--text">mdi-microphone-off</v-icon>
                </v-btn>
                <span class="body-2 black--text mt-1">鍵盤</span>
              </div>
              <div class="mx-2 flex-column d-flex">
                <v-btn
                  color="success"
                  fab
                  dark
                >
                <v-icon class="text-h5 grey--text">mdi-dialpad</v-icon>

                </v-btn>
                <span class="body-2 black--text mt-1">通訊錄</span>

              </div>
            


            </v-list-item>

          </div>

          <v-bottom-navigation v-model="value">
          <v-btn>
            <span>訊息</span>

            <v-icon>mdi-android-messages</v-icon>
          </v-btn>

          <v-btn to="keyboard">
            <span>電話</span>

            <v-icon>mdi-phone</v-icon>
          </v-btn>

          <v-btn >
            <span>會議</span>

            <v-icon>mdi-video</v-icon>
          </v-btn>
        </v-bottom-navigation>

        </v-card>
        

    </v-row>




  </v-container>

  

</template>

<script>


  export default {
    name: 'Directory',

    data: () => ({
     
      items: [
        { header: 'Today' },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: 'Brunch this weekend?',
          subtitle: `Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
          subtitle: `to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          title: 'Oui oui',
          subtitle: '<span class="text--primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
          title: 'Birthday gift',
          subtitle: '<span class="text--primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
          title: 'Recipe to try',
          subtitle: '<span class="text--primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
        },
      ],
    }),
  }
</script>
