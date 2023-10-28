<template>
    <div>
        <h1 class="text-center">Hola imagenes</h1>
        <cpteCardImage :items="Items"></cpteCardImage>
    </div>
</template>

<script>
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
            Items:[]
        }
    },
    methods:{
        cargarImg: async function () {
            try {
                const settings = {
                    method:'GET'
                }
                const url = 'https://picsum.photos/v2/list?page=2&limit=20'
                const data = await fetch(url, settings)
                const json = await data.json()
                this.Items = json
            } catch (error) {
                console.log(error);
            }
        }
    }
}
</script>

<style>

</style>