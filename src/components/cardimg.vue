<template>
    <div>
        <v-row>
            <v-col 
            v-for="(item, index) in items" 
            :key="index"
            class="ma-2"
            >
                <v-card
      class="mx-auto"
      max-width="344"      
    >
      <v-img
        :src="item.download_url"
        height="200px"
        cover
      ></v-img>
  
      <v-card-title>
        {{ item.author }}
      </v-card-title>
  
      <v-card-subtitle>
        {{ item.id }}
      </v-card-subtitle>
  
      <v-card-actions>
        <v-btn
          color="orange-lighten-2"
          variant="text"
        >
          Explore
        </v-btn>
  
        <v-spacer></v-spacer>
  
        <v-btn          
          @click="show = !show"        
         >
         <v-icon >
            {{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}
         </v-icon>        
        </v-btn>
      </v-card-actions>
  
      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>
  
          <v-card-text>
            <p>{{ item.height }}</p>
            <p>{{ item.width }}</p>
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
            </v-col>
        </v-row>

    
</div>
  </template>
  <script>
  export default {
    props:['items'],
    data: () => ({
      show: false,
    }),
  }
</script>
