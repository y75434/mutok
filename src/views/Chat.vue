<template>
  <div>
     
      
    <v-container class="" fluid permanent>
      <v-row>
        <!-- <v-col
          style="overflow-y: auto; height: 100vh"
          class="d-sm-none d-md-flex p-0"
          col="4"
          md="4"
          lg="4"
        >
          <Sidebar /> 
        </v-col> -->
        <!-- <v-col class="p-0" sm="12" md="12" lg="12"> -->
          <Messages />
        <!-- </v-col> -->
      </v-row>
    </v-container>
  </div>
</template>
<script>
// import Sidebar from "../components/Sidebar";
import Messages from "../components/Messages";
// import FileModal from '../components/FileModal.vue'
export default {
  name: "Chat",
  components: { 
    Messages 
  },
};
</script>

<style scoped>
.sidebar {
  display: block;
  height: 100%;
}
</style>
