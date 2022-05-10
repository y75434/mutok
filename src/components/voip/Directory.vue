<template>
  <div background-color="bg" class="" style="height: 85vh; width:100vw">





    



      

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




    

    <div color="success" class="rounded-b-0 rounded-pill mb-0" style="height:100px; background: radial-gradient(111.7% 111.7% at 50% 100%, #C2EBF9 0%, rgba(231,249, 255, 0.99) 100%);">
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
            to="/voipchat"
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
