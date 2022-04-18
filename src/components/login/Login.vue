<template>

 <v-card
  max-width="768"
  style="height: 100vh; width: 100vw"
  class="mx-auto text-center" 
  color="secondary"
  >

    <v-toolbar color="white" >
      <v-app-bar-nav-icon><v-icon>mdi-arrow-left</v-icon></v-app-bar-nav-icon>
      <v-toolbar-title>開設新帳號</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>


 


     



    <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step
        :complete="e1 > 1"
        step="1"
      >
        填寫基本資料
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step
        :complete="e1 > 2"
        step="2"
      >
        通訊設定
      </v-stepper-step>
      
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1" color="secondary" style="height: 100vh;">
        <v-list-item class="text-left justify-center d-flex">
          <v-col cols="8" >
            <v-list-item-title>帳號</v-list-item-title>
            <v-text-field label="E-mail" solo ></v-text-field>
          </v-col>
        </v-list-item>


        

         <v-col cols="10" class="">
            <v-btn @click="e1 = 2" class=" text-no-wrap rounded-pill" style="background: linear-gradient(92.37deg, #29BCD0 6.91%, #1A73E9 94%);">
              <div class="text-body-1 white--text">下一步</div>
            </v-btn>
          </v-col>
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-card
          class="mb-12"
          color="grey lighten-1"
        >
        
        
        
        
        
        </v-card>

      </v-stepper-content>

     
    </v-stepper-items>
  </v-stepper>


  </v-card>



</template>

<script>
export default {
  name: "SelfSetting",

  data: () => ({
    e1: 1,
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
