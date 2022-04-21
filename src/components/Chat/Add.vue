<template>
  
  <v-card max-width="768" style="height: 100vh;" class="mx-auto">

    <v-toolbar color="white" >
      <v-app-bar-nav-icon to="/chat"><v-icon>mdi-arrow-left</v-icon></v-app-bar-nav-icon>
      <v-toolbar-title>新增聊天</v-toolbar-title>

      <v-spacer></v-spacer> 
      <a href="" class="herf--text text-decoration-none">確定</a>
  
    </v-toolbar>

    <v-col cols="12" class="secondary">
      <v-text-field
        outlined
        rounded
        label="輸入名稱、電話號碼或電子郵件"
        prepend-inner-icon="mdi-magnify"
        hide-details
      ></v-text-field>
    </v-col>

   

    <v-list one-line>
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
          <v-radio  color="red"></v-radio>


        </v-list-item>
      </template>
    </v-list>

  </v-card>

</template>

<script>
export default {
  name: "PhoneSetting",

  data: () => ({
    items: [
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: 'Joe Cooper',
          subtitle: `03-65428652`,
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          title: 'Joe Cooper',
          subtitle: `03-65428652`,
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          title: 'Oui oui',
          subtitle: '03-65428652',
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
          title: 'Joe Cooper',
          subtitle: '03-65428652',
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
          title: 'Joe Cooper',
          subtitle: '03-65428652',
        },
      ],
    
  }),
};
</script>
