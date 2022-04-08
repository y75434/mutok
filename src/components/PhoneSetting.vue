<template>
  
  <v-card max-width="768" style="height: 100vh;" class="mx-auto">

    <v-toolbar color="white" >
      <v-app-bar-nav-icon><v-icon>mdi-arrow-left</v-icon></v-app-bar-nav-icon>
      

      <v-toolbar-title>電話設定</v-toolbar-title>

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




    <v-list two-line>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>勿擾模式</v-list-item-title>
        </v-list-item-content>
        <v-list-item-content >
          <v-list-item-subtitle><v-switch label="Switch"></v-switch></v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>通知</v-list-item-title>
        </v-list-item-content>
        <v-list-item-content>
          <v-list-item-subtitle>震動</v-list-item-subtitle>
        </v-list-item-content>      
      </v-list-item>
      
      <v-divider></v-divider>

      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>發送號碼</v-list-item-title>
        </v-list-item-content>
        <v-list-item-content>
          <v-list-item-subtitle><v-switch label="Switch"></v-switch></v-list-item-subtitle>
        </v-list-item-content>      
      </v-list-item>
      
      <v-divider></v-divider>

      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>來電轉接</v-list-item-title>
        </v-list-item-content>
        <v-list-item-content>
          <v-list-item-subtitle>**********</v-list-item-subtitle>
        </v-list-item-content>   
        <a href="">更改密碼</a>   
      </v-list-item>

      <v-divider></v-divider>


      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>設為預設接聽</v-list-item-title>
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
  name: "PhoneSetting",

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
