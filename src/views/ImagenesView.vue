<template>
    <div>
        <h1 class="text-center">Hola imagenes</h1>
        <cpteCardImage :items="Items"></cpteCardImage>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"
import cpteCardImage from "@/components/cardimg.vue"
export default {
    name:"cardimg",
    components:{
        cpteCardImage
    },
    created () {
        this.cargarImg()
    },
    data () {
        return {
            
        }
    },
    methods:{
       ...mapActions('storeImg',['cargarImg'])
    },
    computed:{
        ...mapGetters('storeImg',['Items'])
    }
}
</script>

<style>

</style>