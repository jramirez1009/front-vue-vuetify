<template>
    <div>
        <v-alert
      :type="type"
      variant="outlined"
      class="mt-5"
      
    >
      {{ mensaje }}
    </v-alert>
     <v-btn :color="type"  @click="salir()">Cerrar</v-btn>
    </div>
    
    
</template>

<script>
export default {
    props:['type','mensaje'],
    methods:{
        salir(){
            this.$emit('salir',false)
        }
    }
}
</script>