<template>
<div class="background">
    
    <div>
        <ul>
            <li><router-link to="/"><i class="homeicon"></i>首页</router-link></li>
            <li><router-link to="/article"><i class="articleicon"></i>我的作品</router-link></li>
            <li><router-link to="/message"><i class="messageicon"></i>留言板</router-link></li>
            <li><router-link to="/about"><i class="abouticon"></i>关于我</router-link></li>
            <li><router-link to="/login"><i class="loginicon"></i>登录</router-link></li>
        </ul>
    </div>
</div>
</template>
<style scoped>
    *{
        margin: 0px 0px;
    }
    .background{
        height: 50px;
        background-color:#f5f6fa ;
        color: #353b48;
    }
    ul{
        height: 50px;
        list-style-type: none;
        
    }
    li{
        float: left;
        width: 230px;
        height: 50px;
        line-height: 50px;
        font-family: 楷书;
        font-size: 20px;
        text-align: center;
    }
    .homeicon{
        display: inline-block;
        width: 30px;
        height: 30px;
        background-image: url("../../static/images/shouye.png");
        background-position: center center;
        background-size: 30px 30px;
        background-repeat: no-repeat;

    }
    a {
     text-decoration: none;
    } 
    r-link-active {
    text-decoration: none;
    }
    .loginicon{
        display: inline-block;
        width: 30px;
        height: 30px;
        background-image: url("../../static/images/denglu.png");
        background-position: center center;
        background-size: 30px 30px;
        background-repeat: no-repeat;
    }
    .articleicon{
        display: inline-block;
        width: 30px;
        height: 30px;
        background-image: url("../../static/images/zuopin.png");
        background-position: center center;
        background-size: 30px 30px;
        background-repeat: no-repeat;
    }
    .messageicon{
        display: inline-block;
        width: 30px;
        height: 30px;
        background-image: url("../../static/images/b-chat.png");
        background-position: center center;
        background-size: 30px 30px;
        background-repeat: no-repeat;
    }
    .abouticon{
        display: inline-block;
        width: 30px;
        height: 30px;
        background-image: url("../../static/images/guanyuwomen.png");
        background-position: center center;
        background-size: 30px 30px;
        background-repeat: no-repeat;
    }
</style>