<template>
  
  <v-card max-width="768" style="height: 100vh;" class="mx-auto">

    <v-toolbar color="white" >
      <v-app-bar-nav-icon><v-icon>mdi-arrow-left</v-icon></v-app-bar-nav-icon>
      <v-toolbar-title>電話設定</v-toolbar-title>
      <v-spacer></v-spacer>   
    </v-toolbar>

    <v-list one-line>
      <v-list-item>
        <v-col cols="4">
          <v-list-item-content>
            <v-list-item-title>勿擾模式</v-list-item-title>
          </v-list-item-content>
        </v-col>
        <v-list-item-content >
          <v-list-item-subtitle><v-switch label="開啟"></v-switch></v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list-item>
        <v-col cols="4">
          <v-list-item-content>
            <v-list-item-title>通知</v-list-item-title>
          </v-list-item-content>
        </v-col> 
        <v-list-item-content>
          <v-list-item-subtitle>震動</v-list-item-subtitle>
        </v-list-item-content>      
      </v-list-item>
      
      <v-divider></v-divider>

      <v-list-item>
        <v-col cols="4">
          <v-list-item-content>
            <v-list-item-title>發送號碼</v-list-item-title>
          </v-list-item-content>
        </v-col>   
        <v-list-item-content>
          <v-list-item-subtitle><v-switch label="顯示"></v-switch></v-list-item-subtitle>
        </v-list-item-content>      
      </v-list-item>
      
      <v-divider></v-divider>

      <v-list-item>
        <v-col cols="4">
          <v-list-item-content>
            <v-list-item-title>來電轉接</v-list-item-title>
          </v-list-item-content>
        </v-col> 
        <v-list-item-content>
          <v-list-item-subtitle>**********</v-list-item-subtitle>
        </v-list-item-content>   
        <a href="">更改密碼</a>   
      </v-list-item>

      <v-divider></v-divider>


      <v-list-item>
        <v-col cols="4">
          <v-list-item-content>
            <v-list-item-title>設為預設接聽</v-list-item-title>
          </v-list-item-content>
        </v-col> 
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
    
    
  }),
};
</script>
