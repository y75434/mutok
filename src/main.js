import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'

Vue.config.productionTip = false

// import { Web } from "sip.js";

// // Helper function to get an HTML audio element
// function getAudioElement(id){
//   const el = document.getElementById(id);
//   if (!(el)) {
//     throw new Error(`Element "${id}" not found or not an audio element.`);
//   }
//   return el;
// }

// // Options for SimpleUser
// const options = {
//   aor: "sip:alice@example.com", // caller
//   media: {
//     constraints: { audio: true, video: false }, // audio only call
//     remote: { audio: getAudioElement("remoteAudio") } // play remote audio
//   }
// };

// // WebSocket server to connect with
// const server = "wss://sip.example.com";

// // Construct a SimpleUser instance
// const simpleUser = new Web.SimpleUser(server, options);

// // Connect to server and place call
// simpleUser.connect()
//   .then(() => simpleUser.call("sip:bob@example.com"))
//   .catch((error) => {
//     // Call failed
//     console.log(error);
    
//   });

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
