<template>
    <div style="text-align:center">
        layOut
        <p>{{tip}}</p>
        <slot name="header">test</slot>
    </div>
</template>
<script>
export default {
    name:'layout',
    data(){
        return{
            tip:''
        }
    },
    props:{
        tips:{
            type:String,
            default:'23265'
        }
    },
    mounted(){

    },
    methods:{
        jump(){
            this.$router.push({
                path:'/agentList'
            })
        }
    }
}
</script>
<style scoped>

</style>