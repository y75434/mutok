<template>
  
  <v-card max-width="768" style="height: 100vh;" class="mx-auto">

    <v-toolbar color="white" >
      <v-app-bar-nav-icon><v-icon>mdi-arrow-left</v-icon></v-app-bar-nav-icon>
      

      <v-toolbar-title>個人設定</v-toolbar-title>

      <v-spacer></v-spacer>

    
    </v-toolbar>

    <v-card-title>
      <v-btn dark icon>
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn dark icon class="mr-4">
        <v-icon>mdi-pencil</v-icon>
      </v-btn>

      <v-btn dark icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-card-title>

    <v-badge
      bordered
      bottom
      color="darkgrey"
      offset-x="190"
      offset-y="10"
      icon="mdi-camera"
      class="d-flex justify-center mb-6"
    >
      <v-avatar size="60">
        <v-img src="https://cdn.vuetifyjs.com/images/lists/2.jpg"></v-img>
      </v-avatar>
    </v-badge>
    <div class="text-body-1 black--text text-center mb-3"> 
      本人暱稱
      <v-icon class="text-h5 grey--text ">mdi-pencil</v-icon>

    </div>

    <div class="text-body-2 black--text text-center mb-3 d-flex justify-center"> 
      <v-badge
      color="red" class="badge"
      ></v-badge>
      忙碌中
      <a href="">修改狀態</a>

    </div>



    <v-list two-line>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>帳號</v-list-item-title>
        </v-list-item-content>
        <v-list-item-content >
          <v-list-item-subtitle>aloha me</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>號碼</v-list-item-title>
        </v-list-item-content>
        <v-list-item-content>
          <v-list-item-subtitle>021-12345678</v-list-item-subtitle>
        </v-list-item-content>      
      </v-list-item>
      
      <v-divider></v-divider>

      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>信箱</v-list-item-title>
        </v-list-item-content>
        <v-list-item-content>
          <v-list-item-subtitle>aloha@mail.com</v-list-item-subtitle>
        </v-list-item-content>      
      </v-list-item>
      
      <v-divider></v-divider>

      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>密碼</v-list-item-title>
        </v-list-item-content>
        <v-list-item-content>
          <v-list-item-subtitle>**********</v-list-item-subtitle>
        </v-list-item-content>   
        <a href="">更改密碼</a>   
      </v-list-item>

      <v-divider></v-divider>


      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>隱藏</v-list-item-title>
        </v-list-item-content>
        <v-list-item-content >
          <v-list-item-subtitle>aloha me</v-list-item-subtitle>
        </v-list-item-content>
        <v-switch
          label="Switch"
        ></v-switch>


      </v-list-item>

      <v-divider></v-divider>


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
