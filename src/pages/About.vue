<template>
    <div class="body-b">
        <nav-header></nav-header>
        <img src="../../static/images/head.jpg" alt="我的头像" class="headicon">
        <h2>油炸小排骨</h2>
        <div class="contact">
            <img src="../../static/images/weibo.png" class="weibo">
            <img src="../../static/images/youxiang.png" class="email">
            <img src="../../static/images/boke-copy.png" class="blog">
            <img src="../../static/images/git-copy.png" class="git">
        </div>
        <div class="introduce">
            <p>如果您对这个博客有什么建议，请在留言板留言</p>
            <p>github地址：https://github.com/sparerib1</p>
            <p>博客园地址：https://www.cnblogs.com/spare-ribs</p>
        </div>
        <nav-footer></nav-footer>
    </div>
</template>
<script>
    import NavHeader from '@/components/Header'
    import NavFooter from '@/components/Footer'
    export default{
        name:'About',
        components:{
            NavHeader,
            NavFooter
        },
       methods: {
           
       },
    }
</script>
<style>
    .body-b{
      background-size: 100% 100%;
      height: 100%;
      position: fixed;
      width: 100%;
      background-color: #dfe4ea;
   }
    .headicon{
        width: 120px;
        height: 120px;
        margin-left: 500px;
        margin-top: 40px;
    }
    h2{
        font-family: 隶书;
        margin-left: 500px;
        color: #70a1ff;
    }
    .contact{
        margin: 0 auto;
        width: 500px;
    }
    .weibo,.email,.blog,.git{
        width: 50px;
        height: 50px;
        margin: 10px 10px;
    }
    .introduce{
        width: 500px;
        margin: 0 auto;
    }
</style>