<template>
  <div class="" style="height: 100vh; width:100vw">


    <v-container class="rounded-lg  alert">
      <v-row no-gutters>
        <v-col cols="12">
          <v-card
            class="pa-2"
            outlined
            tile
          >
            Mutok 電話
          </v-card>
        </v-col>
        <v-col cols="12">
          <v-card
            class="px-6 py-7"
            outlined
            tile
          >       
            <div class="text-h4 text-left lightblack--text">David</div>
          </v-card>
        </v-col>

        <v-col
          cols="6"
        >
          <v-btn
            class="pa-7"
            block
            style="background: #DDD2CC;"
          >
            <div class="text-body-2 text-center lightblack--text">忽略</div>

          </v-btn>

        </v-col>
        <v-col cols="6">
          <v-btn class="pa-7" block style="background: #05B2DC">
            <div class="text-body-2 text-center white--text ">接聽</div>
          </v-btn>

          
        </v-col>

      </v-row>
    </v-container>


    <v-tabs background-color="white" centered dark icons-and-text v-model="tab">
      <v-col cols="6" >
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


    <v-tabs-items v-model="tab">
      <v-tab-item value="tab-1">
        <v-card flat>
          <v-card-text> text</v-card-text>
          

        </v-card>
      </v-tab-item>

      <v-tab-item value="tab-2">
        <v-card-text> cc</v-card-text>

      </v-tab-item>
    </v-tabs-items>



    <v-card flat>
      <v-list one-line>
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
            <v-list-item-avatar>
              <v-img :src="item.avatar"></v-img>
            </v-list-item-avatar>

            <v-list-item-content >
              <v-list-item-title class="text-left" v-html="item.title"></v-list-item-title>
              <v-list-item-subtitle class="text-left" v-html="item.subtitle"></v-list-item-subtitle>
                

            </v-list-item-content>
            <div class="d-flex flex-column">
              <v-text class="">20:08</v-text>
              <v-icon color="">
                mdi-check
              </v-icon>
            </div>
          </v-list-item>
        </template>
      </v-list>
    </v-card>

    <div color="success" class="rounded-b-0 rounded-pill" style="height:100px; background: radial-gradient(111.7% 111.7% at 50% 100%, #C2EBF9 0%, rgba(231,249, 255, 0.99) 100%);">
      <v-list-item class="d-flex justify-center mb-1 pt-3">
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

        
  </div>

  

</template>

<script>


  export default {
    name: 'Directory',

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
