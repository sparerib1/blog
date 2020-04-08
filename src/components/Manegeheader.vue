<template>
    <div class="background">
        
        <div>
            <ul>
                <li><router-link to="/"><i class="homeicon"></i>首页</router-link></li>
                <li><router-link to="/management"><i class="articleicon"></i>总管理页面</router-link></li>
                <li><router-link to="/articlesmanage"><i class="messageicon"></i>作品管理</router-link></li>
                <li><router-link to="/messagemanage"><i class="abouticon"></i>留言管理</router-link></li>
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
            width: 300px;
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
        .articleicon,.messageicon,.abouticon{
            display: inline-block;
            width: 30px;
            height: 30px;
            background-image: url("../../static/images/baobiaoguanli_active.png");
            background-position: center center;
            background-size: 30px 30px;
            background-repeat: no-repeat;
        }
        
    </style>