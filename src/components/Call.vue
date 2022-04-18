<template>
  <!-- <v-container>
    <v-row class="text-center"> -->
      <v-card max-width="450"  style="height: 100vh;" class="mx-auto text-center py-15">
        

        <div class="text-body-1 black--text my-5">Joe Cooper</div>

        <div class="text-h5 lightblack--text mb-6" >{{ inputBox }}</div>
        <div class="text-body-1 black--text mb-3"> <v-icon class="text-h5 grey--text">mdi-phone-outgoing-outline</v-icon>通話中....</div>

        <!-- number -->
        <v-list v-if="numberKeyboard" color="secondary" class="rounded-xl py-8 mb-0">
            <v-list-item class="d-flex justify-center mb-6">
              <div class="mx-2">
                <v-btn
                  color="success"
                  fab
                  x-large
                  dark
                ><div class="text-h4 grey--text"  @click="type(1)">1</div>
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


            <v-list-item class="d-flex justify-center mb-9">
              <div class="mx-2">
                <v-btn
                  color="success"
                  fab
                ><v-icon class="text-h5 grey--text">mdi-bullhorn-variant-outline</v-icon>
                </v-btn>
              </div>
              <div class="mx-2">
                <v-btn
                  color="success"
                  fab
                  dark
                ><v-icon class="text-h5 grey--text">mdi-microphone-off</v-icon>
                </v-btn>
              </div>
              <div class="mx-2">
                <v-btn
                  @click="numberKeyboard = !numberKeyboard"
                  color="success"
                  fab
                  dark
                ><v-icon class="text-h5 grey--text">mdi-dialpad</v-icon>

                </v-btn>
              </div>
            </v-list-item>

            <v-list-item class="d-flex justify-center mb-6">

              <div class="mx-2">
                <v-btn
                  color="success"
                  fab
                  dark
                ><v-icon class="text-h5 grey--text">mdi-record-circle</v-icon>

                </v-btn>
              </div>
              <div class="mx-2">
                <v-btn class=" text-no-wrap rounded-pill" style="background: linear-gradient(92.37deg, #29BCD0 6.91%, #1A73E9 94%);">
                  <div class="text-body-1 white--text"><v-icon class="">mdi-phone-remove-outline</v-icon>結束通話</div>
                </v-btn>
              </div>

            </v-list-item>


          

        </v-list>


        <v-list v-if="!numberKeyboard" color="secondary" class="rounded-xl py-8 text-center">     
          <v-list-item class="d-flex justify-center mb-9">
            <div class="mx-2 flex-column d-flex">
              <v-btn
                color="success"
                fab
              ><v-icon class="text-h5 grey--text">mdi-bullhorn-variant-outline</v-icon>
              </v-btn>
              <span class="body-2 black--text mt-1">靜音</span>
            </div>
            <div class="mx-2 flex-column d-flex">
              <v-btn
                color="success"
                fab
                dark
              ><v-icon class="text-h5 grey--text">mdi-microphone-off</v-icon>
              </v-btn>
              <span class="body-2 black--text mt-1">擴音</span>
            </div>
            <div class="mx-2 flex-column d-flex">
              <v-btn
                @click="numberKeyboard = !numberKeyboard"
                color="success"
                fab
                dark
              ><v-icon class="text-h5 grey--text">mdi-dialpad</v-icon>
              </v-btn>
              <span class="body-2 black--text mt-1">鍵盤</span>
            </div>
          </v-list-item>

          <v-list-item class="d-flex justify-center mb-15 ">
            <div class="mx-2 flex-column d-flex">
              <v-btn
                color="success"
                fab
              ><v-icon class="text-h5 grey--text">mdi-pause-circle-outline</v-icon>
              </v-btn>
              <span class="body-2 black--text mt-1">保留</span>
            </div>
            <div class="mx-2 flex-column d-flex">
              <v-btn
                color="success"
                fab
                dark
              ><v-icon class="text-h5 grey--text">mdi-microphone-off</v-icon>
              </v-btn>
              <span class="body-2 black--text mt-1">三方通話</span>
            </div>
            <div class="mx-2 flex-column d-flex">
              <v-btn
                color="success"
                fab
                dark
              ><v-icon class="text-h5 grey--text">mdi-video-minus-outline</v-icon>
              </v-btn>
              <span class="body-2 black--text mt-1">Face Time</span>
            </div>
          </v-list-item>

          <v-list-item class="d-flex justify-center mb-6">

            <div class="mx-2">
              <v-btn
                color="success"
                fab
                dark
              ><v-icon class="text-h5 grey--text">mdi-record-circle</v-icon>
              </v-btn>
            </div>
            <div class="mx-2">
              <v-btn class=" text-no-wrap rounded-pill" style="background: linear-gradient(92.37deg, #29BCD0 6.91%, #1A73E9 94%);">
                <div class="text-body-1 white--text"><v-icon class="">mdi-phone-remove-outline</v-icon>結束通話</div>
              </v-btn>
            </div>

          </v-list-item>    

        </v-list>

       
      </v-card>
    <!-- </v-row>
  </v-container> -->
</template>

<script>
import { SimpleUser } from "sip.js";

export default {
  name: "call",

  data: () => ({
    inputBox: "",
    numberKeyboard: false
    
  }),
  methods:{
    // changeList(){

    // }
    type(e){
      this.inputBox += e
      console.log(this.inputBox, e);  
    },
    call(){


      // const uri = UserAgent.makeURI("6111");
      const server = "wss://sip.doqubiz.com:8089/ws";

      const destination = "sip:1001@sip.doqubiz.com";
      const aor = "sip:6111@sip.doqubiz.com";
      const authorizationUsername = '6111';
      const authorizationPassword = '6111';

     const options = {
      aor,
      media: {
        remote: {
          // audio: getAudioElement("remoteAudio")
        }
      },
      userAgentOptions: {
        authorizationPassword,
        authorizationUsername,
      }
    };

  // Construct a SimpleUser instance
  const simpleUser = new SimpleUser(server, options);

  // 要知道您是否接到電話，您需要註冊一個簡單用戶委託
  simpleUser.delegate = {
    onCallReceived: async () => {
      console.log('Incoming Call!');
      await simpleUser.answer();
    }
  };

  // Connect to server
   simpleUser.connect();

  // Register to receive inbound calls (optional)
  simpleUser.register();

  // Place call to the destination
  simpleUser.call(destination);

  // Wait some number of milliseconds
  // wait(5000);

  

    },
    // 終止會話
    // hangUp(){
    //  simpleUser.hangup();
    // }
    
  }
};
</script>
