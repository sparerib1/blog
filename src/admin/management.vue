<template>
    <div class="body-gg">
        <nav-header></nav-header>
        <div class="main">

        <div>
            <input type="button" value="作品管理"@click="managearticles">
            <br/>
            <input type="button" value="留言管理" @click="managemessage">
        </div>
       </div>
        <nav-footer></nav-footer>
    </div>
</template>
<script>
     import NavHeader from '@/components/Header'
     import NavFooter from '@/components/Footer'
     export default{
        name:'Message',
        components:{
            NavHeader,
            NavFooter
        },
        methods: {
            managearticles:function(){
                this.$router.push('/articlesmanage')
            },
            managemessage:function(){
                this.$router.push('/messagemanage')
            }
        },
      
    }

</script>
<style scoped>
    .body-gg{
      background-size: 100% 100%;
      background: url('../../static/images/back3.jpg') center center no-repeat;
      height: 100%;
      position: fixed;
      width: 100%;
   }

   input[type="button"]{
       width: 220px;
       height: 30px;
       background-color: #00a8ff;
       color: #f5f6fa;
       margin-top: 20px;
       border: none;
       border-radius: 4px;
       

   }
   .main{
            width:900px;
            height: 900px;
            position: absolute;
            left:50%;
            top:50%;
            margin-left:-100px;
            margin-top:-100px;

   }
   
</style>