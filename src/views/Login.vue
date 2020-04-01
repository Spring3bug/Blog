<template>
    <div style="text-align:center">
        <button @click="show = !show">
    Toggle render
  </button>
  <transition name="slide-fade">
    <p v-if="show">hello</p>
  </transition>
    </div>
</template>
<script>
export default {
    name:'Login',
    data(){
        return{
            data:"2019-01-02",
            msg:'6aa32fa3232a3',
            show:true
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
/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>