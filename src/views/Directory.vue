<template>
  

  <div>      
    <v-container class="" fluid permanent>
      <v-row>    
        <Directory />
      </v-row>
    </v-container>
  </div>

</template>

<script>
import Directory from "../components/Directory/Directory";


export default {
  name: "Directory",
  components: { Directory }
};
</script>

<style scoped>
.sidebar {
  display: block;
  height: 100%;
}
</style>

