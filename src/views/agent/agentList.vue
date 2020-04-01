<template>
    <div>
        agentList1
        <button>111</button>
        <p>123</p>
    </div>
</template>
<script>
export default {
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