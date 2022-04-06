<template>

  <div>      
    <v-container class="" fluid permanent>
      <v-row>    
        <Chat />
      </v-row>
    </v-container>
  </div>


  

</template>
<script>
 import Chat from "../components/Chat/Chat.vue";


export default {
  name: "Chat",
  components: { 
    Chat 
  },
  data: () => ({
    items: [
      { header: "Today" },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        title: "Brunch this weekend?",
        subtitle: `012-12345678`,
      },
      { divider: true, inset: true },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
        title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
        subtitle: `012-12345678`,

      },
      { divider: true, inset: true },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
        title: "Oui oui",
        subtitle: `012-12345678`,

      },
      { divider: true, inset: true },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
        title: "Birthday gift",
        subtitle: `012-12345678`,

      },
      { divider: true, inset: true },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
        title: "Recipe to try",
        subtitle: `012-12345678`,

      },
    ],
  }),
};
</script>

<style scoped>
.sidebar {
  display: block;
  height: 100%;
}
</style>
