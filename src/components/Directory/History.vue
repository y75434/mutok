<template>

  <v-card max-width="768" style="height: 100vh;" class="mx-auto">
    <v-toolbar
      style="background: radial-gradient(100% 757.37% at 0% 11.36%, #0EA5B0 30.25%, #00C8D7 100%)"           
      dark
    >
      <v-img src="src/assets/img/img_mutok_color@2x.png" size="36px" max-width="50" alt=""></v-img>
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

    <v-card flat class="bg">
      <v-list one-line>
        <v-col cols="12" >
          <div class=" secondary rounded-lg" >
            <div class="text-body-2 grey--text text-center"> 昨天</div>

          </div>

        </v-col>
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
            class="d-flex justify-space-between mb-3"
            color="lightgrey"

          >
            <v-icon class="text-h5 grey--text">mdi-phone-outgoing-outline</v-icon>

            <v-list-item-avatar class="mx-2">
              <v-img :src="item.avatar"></v-img>
            </v-list-item-avatar>

            <v-list-item-content >
              <v-list-item-title class="text-left" v-html="item.title"></v-list-item-title>
              <v-list-item-subtitle class="text-left" v-html="item.subtitle"></v-list-item-subtitle>
                

            </v-list-item-content>
            <div class="d-flex flex-column">
              <v-text class="grey--text text-body-2">20:08</v-text>
             
            </div>
          </v-list-item>
        </template>
      </v-list>
    </v-card>

    

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
        

  

</template>

<script>


  export default {
    name: 'History',

    data: () => ({
     
      items: [
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
