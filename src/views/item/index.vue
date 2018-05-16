<template>
    <div>
        
    </div>
</template>

<script>
    import {addItem} from '@/api/itemApi.js'
    export default {
        name: 'item',
        data(){
            return {

            }
        },
        mounted(){
            let data = {
                typeId:1,
                ServerLevel:1,
                title:"保洁",
                icon:"https://www.tjwq666.com/img/spa.png",
                shortMsg:"专业保洁",
                price:"128",
                detail:"专业足疗，大武清666",
                weight:1
            }
            
            addItem(data)
        }
    }    
</script>