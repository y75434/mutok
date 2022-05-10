<template>

<v-card max-width="450" style="height: 100vh" class="mx-auto text-center">
    <v-toolbar color="white">
      <v-app-bar-nav-icon to="/voipchat"><v-icon>mdi-arrow-left</v-icon></v-app-bar-nav-icon>
      <v-toolbar-title>Joe Cooper</v-toolbar-title>
      <v-spacer></v-spacer>   
    </v-toolbar>

    <v-avatar size="70" class="my-6">
      <v-img src="https://cdn.vuetifyjs.com/images/lists/2.jpg"></v-img>
    </v-avatar>


    <v-spacer></v-spacer>


    <div class="text-h5 lightblack--text mb-4">開發部</div>

     <div  class=" text-center" style="height:80px;">
      <v-list-item class="d-flex justify-center mb-1 pt-3">
        <div class="mx-2 flex-column d-flex">
          <v-btn style="box-shadow:none;background: transparent">
            <v-img class="profileIcon" :src="require('@/assets/svg/ic_g_addfriend.svg')" size="15px"></v-img>
          </v-btn>
          <span class="body-2 black--text mt-1">靜音</span>
        </div>
        <div class="mx-2 flex-column d-flex">
          <v-btn style="box-shadow:none;background: transparent">
            <v-img class="profileIcon" :src="require('@/assets/svg/ic_bk_mute.svg')" size="15px"></v-img>
          </v-btn>
          <span class="body-2 black--text mt-1">靜音</span>
        </div>
        <div class="mx-2 flex-column d-flex">
          <v-btn style="box-shadow:none;background: transparent"  >
            <v-img class="profileIcon" :src="require('@/assets/svg/ic_g_exit.svg')" size="15px"></v-img>
          </v-btn>
          <span class="body-2 black--text mt-1">離開群組</span>
        </div>
      </v-list-item>

    </div>
    


          <v-list two-line>
            <div class="text-body-1 lightblack--text text-left mb-4">群組成員(5)</div>

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
                <a href="" class="herf--text">刪除</a>


              </v-list-item>
            </template>
          </v-list>

    
  



   
    
  </v-card>




</template>

<script>
export default {
  name: "SelfSetting",

  data: () => ({
    
    items: [
      { header: "Today" },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        title: "Brunch this weekend?",
        subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
      },
      { divider: true, inset: true },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
        title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
        subtitle: `<span class="text--primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
      },
      { divider: true, inset: true },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
        title: "Oui oui",
        subtitle:
          '<span class="text--primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
      },
      { divider: true, inset: true },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
        title: "Birthday gift",
        subtitle:
          '<span class="text--primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
      },
      { divider: true, inset: true },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
        title: "Recipe to try",
        subtitle:
          '<span class="text--primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
      },
    ],
  }),
};
</script>
