<template>
    <div class="body-bg" >
        <nav-header></nav-header>
        
        <div class="title">
            <h1>欢迎来到油炸小排骨的博客！</h1>
        </div>
        
        <nav-footer></nav-footer>
    </div>
    
    
</template>
<script>
    import NavHeader from '@/components/Header'
    import NavFooter from '@/components/Footer'
    export default{
        name:'Blog',
        components:{
            NavHeader,
            NavFooter
        },
       methods: {
           
       },
    }
</script>
<style >
   .body-bg{
      background-size: 100% 100%;
      background: url('../../static/images/back3.jpg') center center no-repeat;
      height: 100%;
      position: fixed;
      width: 100%;
   }
   .title{
       width: 500px;
       height: 50px;
       text-align: center;
       margin-top: 200px;
       font-family: 'Open Sans', 'Helvetica Neue',"Microsoft YaHei",'Hiragino Sans GB', 'LiHei Pro', Arial, sans-serif;
       margin-left: 370px;
       color: #f5f6fa;
   }

</style>
