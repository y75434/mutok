<template>
 <div class="">    
    <v-tabs
      background-color="white"
      centered
      dark
      icons-and-text
      v-model="tab"
    >
    <v-col cols="6">
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
    <!-- @contextmenu="show" -->
    <v-tabs-items class="bg" v-model="tab" >
      <v-tab-item value="tab-1">
        <v-card flat>
          <v-list two-line>
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
              <v-badge
                bordered
                bottom
                color="red"
                dot
                offset-x="20"
                offset-y="27"
              >
                <v-list-item-avatar>
                  <v-img :src="item.avatar"></v-img>
                </v-list-item-avatar>

              </v-badge>

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
                <v-text class="">20:08</v-text>

              </v-list-item>
            </template>
          </v-list>

        </v-card>
      </v-tab-item>

      <v-tab-item value="tab-2">
        <v-card flat>
          <v-list two-line>
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
                <v-text class="">20:08</v-text>

              </v-list-item>
            </template>
          </v-list>
        </v-card>
      </v-tab-item>
    </v-tabs-items>

    <v-speed-dial
      v-model="fab"    
      top="false"
      bottom="true"
      right="false"
      left="true"  
      :direction="top"
    >
      <template v-slot:activator>
        <v-btn
          v-model="fab"
          fab
          dark
          bottom right
          class="speeddial"      
        >
          <v-icon v-if="fab">
            mdi-close
          </v-icon>
          <v-icon v-else>
            mdi-plus
          </v-icon>
        </v-btn>
      </template>
      <v-btn
        color="white"
        to="/addf"
      >
        <v-icon>mdi-pencil</v-icon>
        新增聊天
      </v-btn>
      <v-btn
       color="white"
       to="/add"
      >
        <v-icon>mdi-plus</v-icon>
        新增好友
      </v-btn>
      <v-btn
        
        color="white"
      >
        <v-icon>mdi-delete</v-icon>
        撥打緊急電話
      </v-btn>
    </v-speed-dial> 

     <v-menu v-model="showMenu" :position-x="x" :position-y="y" absolute offset-y>
      <v-list>
        <v-list-item>
          <v-list-item-title>item.title</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu> 


   
  <!-- </v-card>  -->
  </div>
</template>

<script>


  export default {
    name: 'Chat',

    data: () => ({
     showMenu: false,
     x: 0,
     y: 0,
     tab: null,
     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
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
    methods: {
      show(e) { 
        e.preventDefault(); 
        console.log(e);
        
        this.showMenu = false; 
        this.x = e.clientX; 
        this.y = e.clientY; 
        this.$nextTick(() => { 
          this.showMenu = true; 
        });
      } 
    }
  }
</script>

<style>
/* This is for documentation purposes and will not be needed in your application */
/* #create .v-speed-dial {
  position: absolute;
}

#create .v-btn--floating {
  position: relative;
} */
</style>
