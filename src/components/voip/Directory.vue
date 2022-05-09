<template>
  <div background-color="bg" class="" style="height: 85vh; width:100vw">


    


    <v-tabs background-color="bg" height="35px" centered dark icons-and-text v-model="tab">
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



    <v-card flat class="bg">
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
            @click="show(item)" 
            v-else
            :key="item.title"
            class="d-flex flex-column  mb-1 "
            style="height:100px"
            color="lightgrey"
          >
          <!-- to="/friend" -->
          <div class="justify-space-between d-flex">
            <v-list-item-avatar>
              <v-img :src="item.avatar"></v-img>
            </v-list-item-avatar>

            <v-list-item-content class="p0">
              <v-list-item-title class="text-left" v-html="item.title"></v-list-item-title>
              <v-list-item-subtitle class="text-left" v-html="item.subtitle"></v-list-item-subtitle>
                

            </v-list-item-content>
            <div class="d-flex flex-column">
              <v-text class="">20:08</v-text>
            
            </div>
          </div>
<!-- v-bind:class="{ active: item.active }" item.active = !item.active;-->
            <div col="16">
              <div  color="success" class="rounded-b-xl text-center" style="height:50px;width:400px; background: radial-gradient(111.7% 111.7% at 50% 100%, #C2EBF9 0%, rgba(231,249, 255, 0.99) 100%);">
                  <v-list-item class="d-flex justify-center mb-1 ">
                    <div class="mx-2 flex-column d-flex">
                      <v-btn  style="box-shadow:none;background: transparent ;height:20px">
                        <v-icon style="font-size: 20px;" class=" grey--text">mdi-phone-outgoing-outline</v-icon>
                      </v-btn>
                      <span class="body-2 black--text mt-1">通話</span>
                    </div>
                    <div class="mx-2 flex-column d-flex">
                      <v-btn style="box-shadow:none;background: transparent;height:20px">
                        <v-icon style="font-size: 20px;" class=" grey--text">mdi-plus</v-icon>
                      </v-btn>
                      <span class="body-2 black--text mt-1">加入通訊錄</span>
                    </div>
                    <div class="mx-2 flex-column d-flex">
                      <v-btn style="box-shadow:none;background: transparent ;height:20px"  >
                        <v-icon style="font-size: 20px;" class=" grey--text">mdi-pencil-outline</v-icon>
                      </v-btn>
                      <span class="body-2 black--text mt-1">編輯資料</span>
                    </div>
                  </v-list-item>

                </div>
            </div>


          </v-list-item>


          
        </template>
        
      </v-list>
    </v-card>

    

    <div color="success" class="rounded-b-0 rounded-pill" style="height:100px; background: radial-gradient(111.7% 111.7% at 50% 100%, #C2EBF9 0%, rgba(231,249, 255, 0.99) 100%);">
      <v-list-item class="d-flex justify-center mb-1 pt-3 text-center">
        <div class="mx-2 flex-column d-flex">
          <v-btn
            color="success"
            fab
            to="/history"

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
            to="/directory"
          >
          <img src="@/assets/svg/ic_g_contactlist.svg" style="width:30px" alt="">

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
      showMenu: false,
      x: 0,
      y: 0,
      items: [
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: 'Darlene Robertson',
          subtitle: `012-12345678`,
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          title: 'Darlene Robertson',
          subtitle: `012-12345678`,
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          title: 'Darlene Robertson',
          subtitle: '012-12345678',
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
          title: 'Darlene Robertson',
          subtitle: '012-12345678',
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
          title: 'Darlene Robertson',
          subtitle: '012-12345678',
        },
      ],
    }),
    methods:{
      show (item) {
        item.active = !item.active;
        console.log(item.active);
        // e.preventDefault()
        // console.log(e,'361');
        // this.showMenu = false
        // this.x = e.clientX
        // this.y = e.clientY
        // this.$nextTick(() => {
        //   this.showMenu = true
        // })
      },
      //接受
      onInvite(invitation) { 

        // const userAgent = {
        //   authorizationPassword: 'secretPassword',
        //   authorizationUsername: 'authorizationUsername',
        // };

        invitation.accept(); 
      },
      reject(invitation) { 

        // const userAgent = {
        //   authorizationPassword: 'secretPassword',
        //   authorizationUsername: 'authorizationUsername',
        // };
        
        invitation.reject(); 
      },


    }
  }
</script>


<style>

</style>
