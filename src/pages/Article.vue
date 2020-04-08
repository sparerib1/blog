<template>
    <div class="body-bg1">
        <nav-header></nav-header>
        <div class="artic">
            
            <table>
                <thead>
                   <td>序号</td>
                   <td>作品名</td>
                   <td>简介</td>
                   <td>github链接</td>
                </thead>
                <tr v-for="item in articles">
                    <td>{{item.id}}</td>
                    <td>{{item.name}}</td>
                    <td>{{item.intro}}</td>
                    <td>{{item.git}}</td>
                </tr>
                

            </table>
           
        </div> 
        <div class="pages">
        <el-pagination
            background
            layout="prev, pager, next"
            :page-size="pageSize"
            :total="total"
            @current-change="page">
          </el-pagination></div>
        <nav-footer></nav-footer>
    </div>
</template>
<script>
    import NavHeader from '@/components/Header'
    import NavFooter from '@/components/Footer'
    import axios from 'axios'
    export default{
        name:'Article',
        components:{
            NavHeader,
            NavFooter
        },
       data() {
           return {
               articles:[],
              

           }
       },
       
       
       created() {
        const _this=this
           axios.get('http://localhost:8181/articles/findAll/0/3').then(function(resp){
               _this.articles=resp.data.content
               _this.pageSize=resp.data.size
               _this.total=resp.data.totalElements
           })
       },
       methods: {
        page(currentPage){
                const _this = this
                axios.get('http://localhost:8181/articles/findAll/'+(currentPage-1)+'/3').then(function(resp){
                    console.log(resp)
                    _this.articles = resp.data.content
                    _this.pageSize = resp.data.size
                    _this.total = resp.data.totalElements
                })
            }
       },
    }
</script>
<style>
    .body-bg1{
      background-size: 100% 100%;
      height: 100%;
      position: fixed;
      width: 100%;
      background-color: #dfe4ea;
   }
    .artic{
        width: 1000px;
        margin: 0 auto;
        text-align: center;
    }
    thead{
        font-weight: bold;
    }
    td{
        border-bottom: 1px solid #ced6e0;
        width: 300px;
        height: 50px;
    }
   .pages{
       width: 200px;
       margin: 0 auto;
   }
   
</style>