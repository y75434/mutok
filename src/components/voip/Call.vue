<template>
  <!-- <v-container>
    <v-row class="text-center"> -->
    <div class=""  color="bg" style=" width:100vw">

      <!-- <v-card max-width="450"  style="height: 100vh;" class="mx-auto text-center py-15"> -->
       
      <div class="d-flex flex-column justify-center">
        <v-avatar size="70" class="mx-auto">
          <v-img src="https://cdn.vuetifyjs.com/images/lists/2.jpg"></v-img>
        </v-avatar>
        <div class="text-body-2 text-center lightblack--text mb-6">號碼未記錄</div>

      
      </div>

        <v-col cols="12" >
          <v-text-field
            outlined
            rounded
            label=""
            v-model="inputBox"
            hide-details
          ></v-text-field>
        </v-col>


        <v-list  class=" py-3 mb-0">
           

            <v-list-item class="d-flex justify-center mb-6">
              <div class="mx-2">
                <v-btn
                  color="success"
                  fab
                  x-large
                  dark
                ><div class="text-h4 grey--text" @click="type(1)">1</div>
                </v-btn>
              </div>
              <div class="mx-2">
                <v-btn
                  color="success"
                  fab
                  x-large
                  dark
                ><div class="text-h4 grey--text" @click="type(2)">2</div>
                </v-btn>
              </div>
              <div class="mx-2">
                <v-btn
                  color="success"
                  fab
                  x-large
                  dark
                >
                  <div class="text-h4 grey--text" @click="type(3)">3</div>
                </v-btn>
              </div>
            </v-list-item>

            <v-list-item class="d-flex justify-center mb-6">
              <div class="mx-2">
                <v-btn
                  color="success"
                  fab
                  x-large
                ><div class="text-h4 grey--text" @click="type(4)">4</div>
                </v-btn>
              </div>
              <div class="mx-2">
                <v-btn
                  color="success"
                  fab
                  x-large
                  dark
                ><div class="text-h4 grey--text" @click="type(5)">5</div>
                </v-btn>
              </div>
              <div class="mx-2">
                <v-btn
                  color="success"
                  fab
                  x-large
                  dark
                >
                  <div class="text-h4 grey--text" @click="type(6)">6</div>
                </v-btn>
              </div>
            </v-list-item>

            <v-list-item class="d-flex justify-center mb-6">
              <div class="mx-2">
                <v-btn
                  color="success"
                  fab
                  x-large
                ><div class="text-h4 grey--text" @click="type(7)">7</div>
                </v-btn>
              </div>
              <div class="mx-2">
                <v-btn
                  color="success"
                  fab
                  x-large
                  dark
                ><div class="text-h4 grey--text" @click="type(8)">8</div>
                </v-btn>
              </div>
              <div class="mx-2">
                <v-btn
                  color="success"
                  fab
                  x-large
                  dark
                >
                  <div class="text-h4 grey--text" @click="type(9)">9</div>
                </v-btn>
              </div>
            </v-list-item>

            <v-list-item class="d-flex justify-center mb-6">
              <div class="mx-2">
                <v-btn
                  color="success"
                  fab
                  x-large
                ><div class="text-h4 grey--text" >*</div>
                </v-btn>
              </div>
              <div class="mx-2">
                <v-btn
                  color="success"
                  fab
                  x-large
                  dark
                ><div class="text-h4 grey--text" @click="type(0)">0</div>
                </v-btn>
              </div>
              <div class="mx-2">
                <v-btn
                  color="success"
                  fab
                  x-large
                  dark
                >
                  <div class="text-h4 grey--text">#</div>
                </v-btn>
              </div>
            </v-list-item>

            <v-list-item class="d-flex justify-center mb-6">

              <!-- <div class="mx-2"> -->
                <v-btn @click="call" x-large block class=" text-no-wrap rounded-pill" style="background: linear-gradient(92.37deg, #29BCD0 6.91%, #1A73E9 94%);">
                  <div class="text-body-1 white--text"><v-icon class="">mdi-phone-remove-outline</v-icon>結束通話</div>
                </v-btn>
              <!-- </div> -->
            </v-list-item>
            
            


        </v-list>

        <div color="success" class="rounded-b-0 rounded-pill" style="height:100px; background: radial-gradient(111.7% 111.7% at 50% 100%, #C2EBF9 0%, rgba(231,249, 255, 0.99) 100%);">
          <v-list-item class="d-flex justify-center mb-6 pt-3">
            <div class="mx-2 flex-column d-flex">
              <v-btn
                color="success"
                fab
              ><v-icon class="text-h5 grey--text">mdi-bullhorn-variant-outline</v-icon>
              </v-btn>
              <span class="body-2 black--text mt-1">最近紀錄</span>
            </div>
            <div class="mx-2 flex-column d-flex">
              <v-btn
                color="success"
                fab
                dark
              ><v-icon class="text-h5 grey--text">mdi-microphone-off</v-icon>
              </v-btn>
              <span class="body-2 black--text mt-1">鍵盤</span>
            </div>
            <div class="mx-2 flex-column d-flex">
              <v-btn
                color="success"
                fab
                dark
              >
              <v-icon class="text-h5 grey--text">mdi-dialpad</v-icon>

              </v-btn>
              <span class="body-2 black--text mt-1">通訊錄</span>

            </div>
      


      </v-list-item>
    </div>
  

    </div>

       
      <!-- </v-card> -->
    <!-- </v-row>
  </v-container> -->
</template>

<script>
import { Web } from "sip.js";

export default {
  name: "call",

  data: () => ({
    inputBox: ""

  }),
  methods:{
    type(e){
      this.inputBox += e
      console.log(this.inputBox, e);  
    },
    // Helper function to get an HTML audio element
    // getAudioElement(id){
    //   const el = document.getElementById(id);
    //   if (!(el)) {
    //     throw new Error(`Element "${id}" not found or not an audio element.`);
    //   }
    //   return el;
    // },
    call(){
     const options = {
        aor: "sip:alice@example.com", // caller
        media: {
          constraints: { audio: true, video: false }, // audio only call
          // remote: { audio: this.getAudioElement("remoteAudio") } // play remote audio
        }
      };

      const server = "wss://sip.example.com";
      const simpleUser = new Web.SimpleUser(server, options);

      simpleUser.connect()
        .then(() => simpleUser.call("sip:bob@example.com"))
        .catch((error) => {
          console.log(error);       
        });
    },
    // endCall() {
    //   switch(session.state) {
    //     case SessionState.Initial:
    //     case SessionState.Establishing:
    //       if (session instanceOf Inviter) {
    //         // An unestablished outgoing session
    //         session.cancel();
    //       } else {
    //         // An unestablished incoming session
    //         session.reject();
    //       }
    //       break;
    //     case SessionState.Established:
    //       // An established session
    //       session.bye();
    //       break;
    //     case SessionState.Terminating:
    //     case SessionState.Terminated:
    //         // Cannot terminate a session that is already terminated
    //     break;
    //     }
    //   }

    

       
    
  }
};
</script>
