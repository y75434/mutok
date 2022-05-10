<template>
  <div id="app">
    <!-- <v-app id="inspire">
      <v-card>
        <v-data-table
        :items="items"
        :headers="headers"
        dense
        v-model="selected"
        hide-default-footer
        @click:row="clickRow"
        @dblclick:row="dblclickRow"
      >
      </v-data-table>
      </v-card>
    </v-app> -->


    <v-row class="d-flex" justify="center">
      <v-menu
        v-model="showMenu"
        absolute
        offset-y
        style="max-width: 600px"
      >
        <template v-slot:activator="{ on }">
          <v-card
            class="portrait"
            img="https://cdn.vuetifyjs.com/images/cards/girl.jpg"
            height="300"
            width="600"
            @contextmenu.prevent="on.click"
          ></v-card>
        </template>
  
        <v-list>
          <v-list-item
            v-for="(item, index) in itemss"
            :key="index"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-row>

  </div>

</template>

<script>
export default {
  data: () => ({
    selected: [],   
    headers: [
          {
            text: "Dessert (100g serving)",
            align: "start",
            sortable: false,
            value: "name"
          },
          { text: "Calories", value: "calories" },
          { text: "Fat (g)", value: "fat" },
          { text: "Carbs (g)", value: "carbs" },
          { text: "Protein (g)", value: "protein" },
          { text: "Iron (%)", value: "iron" }
        ],
        items: [
          {
            name: "Frozen Yogurt",
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: "1%"
          },
          {
            name: "Ice cream sandwich",
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: "1%"
          },
          {
            name: "Eclair",
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: "7%"
          },
          {
            name: "Cupcake",
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: "8%"
          },
          {
            name: "Gingerbread",
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: "16%"
          },
          {
            name: "Jelly bean",
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: "0%"
          }
        ],
        showMenu: false,
        itemss: [
          { title: 'Action 1' },
          { title: 'Action 2' },
          { title: 'Action 3' },
          { title: 'Action 4' },
        ],
    }),
    
    methods: {
      dblclickRow(){
        console.log("rowDoubleClicked");
      },
      clickRow(){
      //  console.log("rowClicked");
      }
    }


}
</script>

<style>

</style>


   
    
