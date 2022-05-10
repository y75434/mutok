<template>
  <div class="" style=" width:100vw">

  <!-- <v-card max-width="768" style="height: 100vh;" class="mx-auto"> -->
    


    <v-card flat  style="height:70vh">
      <v-list class="bg" one-line>
        <v-col cols="12" >
          <div class=" secondary rounded-lg" >
            <div class="text-body-2 grey--text text-center">昨天</div>

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

    <div color="success" class="rounded-b-0 rounded-pill" style="height:100px; background: radial-gradient(111.7% 111.7% at 50% 100%, #C2EBF9 0%, rgba(231,249, 255, 0.99) 100%);">
      <v-list-item class="text-center d-flex justify-center mb-6 pt-3">
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
            to="/call"
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
            to="/voipchat"
          >
          <img src="@/assets/svg/ic_g_contactlist.svg" style="width:30px" alt="">

          </v-btn>
          <span class="body-2 black--text mt-1">通訊錄</span>

        </div>
      


      </v-list-item>

    </div>
    


    

  <!-- </v-card> -->
        
  </div>

  

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
