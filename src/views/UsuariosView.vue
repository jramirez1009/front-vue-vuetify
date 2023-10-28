<template>
  <div class=" mt-5">    
    <v-btn class="mb-5" color="primary" @click="visible()">Mostrar</v-btn>
    <cpteAlerta v-if="success" type="success" mensaje="Hola alerta verde" @salir="success=$event"></cpteAlerta>
    <cpteAlerta v-if="error" type="error" mensaje="Hola alerta rojo" @salir="error=$event"></cpteAlerta>

  </div>
</template>

<script>
import cpteAlerta from "../components/alertas.vue";
export default {
  name:"usuarios",
  components:{
    cpteAlerta
  },
  data(){
    return {
      success:false,
      error:false
    }
  },
  methods:{
    visible(){
      this.success = true;
      this.error = true;
    }
  }
}
</script>
