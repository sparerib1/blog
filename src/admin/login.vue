<template>
    <div class="body-g">
        <nav-header></nav-header>
        <div class="main">
           

        <div>
            <input type="text" placeholder="用户名" v-model="username">
            <br/>
            <input type="password" placeholder="密码" v-model="userpass">
            <br/>
            <input type="button" value="登录" @click="logining">
        </div>
       </div>
        <nav-footer></nav-footer>
    </div>
    
</template>
<script>
     import NavHeader from '@/components/Header'
     import NavFooter from '@/components/Footer'
     export default{
        name:'Login',
        components:{
            NavHeader,
            NavFooter
        },
       data() {
           return {
               username:'',
               userpass:''
           }
       },
       methods: {
           logining:function(){
               if(this.username=="油炸小排骨"&&this.userpass=="123456"){
                   this.$router.push('/management')
               }
               else {

                   this.$router.push('/');

               }
           }
       },
    }
</script>
<style scoped>
    .body-g{
      background-size: 100% 100%;
      background: url('../../static/images/back3.jpg') center center no-repeat;
      height: 100%;
      position: fixed;
      width: 100%;
   }
   input[type="text"],input[type="password"]{

    border-radius: 3px;
    margin-bottom: 12px;
    width: 220px;
    height: 20px;
    border: 1px solid #f5f6fa;
    opacity: 0.5;
    
   }
   input[type="button"]{
       width: 220px;
       height: 30px;
       background-color: #00a8ff;
       color: #f5f6fa;
       margin-top: 5px;
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