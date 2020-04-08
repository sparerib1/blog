<template>
    <div class="bg">
        <nav-header></nav-header>
        <div class="tit">
            <form :model="addcomment">
        <div >
            <textarea cols="30" rows="10" placeholder="说点什么吧" v-model="addcomment.nickname"></textarea>
        </div>
        <div class="inp">
            <input type="text" placeholder="输入昵称"  v-model="addcomment.comment">
            <input type="button" value="发布评论" @click="add">
        </div>
    </form>
        <div class="text">
            <ul>
                <li v-for="items in comments">
                    <div>
                        <div>
                            <!--<span>{{items.nicknameid}}</span>-->
                            <span>{{items.nickname}}</span>
                        </div>
                        <p>{{items.comment}}</p>
                    </div>
                </li>
                
            </ul>
        </div>
   
 <div class="page">
     <el-pagination
    background
    layout="prev, pager, next"
    :page-size="pageSize"
    :total="total"
    @current-change="page">
  </el-pagination></div>
    </div>
    
        <nav-footer></nav-footer>
    </div>
</template>
<script>
    
    import NavHeader from '@/components/Header'
    import NavFooter from '@/components/Footer'
    import axios from 'axios'
    export default{
        name:'Message',
        components:{
            NavHeader,
            NavFooter
        },
       data() {
           return {
               comments:[],
               addcomment:
                   {
                       nickname:"",
                       comment:""
                   },
               pageSize:'',
               total:''
           }
       },
       created ()  {
            const _this=this
           axios.get('http://localhost:8181/message/findAll/0/3').then(function(resp){
               _this.comments=resp.data.content
               _this.pageSize=resp.data.size
               _this.total=resp.data.totalElements
           })
       },
       methods: {
           add(){
               const _that=this
               if(this.addcomment.nickname==""||this.addcomment.comment==""){
                   alert("请输入数据");
                   return false
               }
               else(
                   axios.post('http://localhost:8181/message/save',_that.addcomment)
               .then(function(resp){
                   if(resp.data=="success"){
                       alert("添加成功！")
                   }
               })
               )
               
           },
           page(currentPage){
                const _this = this
                axios.get('http://localhost:8181/message/findAll/'+(currentPage-1)+'/3').then(function(resp){
                    console.log(resp)
                    _this.comments = resp.data.content
                    _this.pageSize = resp.data.size
                    _this.total = resp.data.totalElements
                })
            }
       },
      
      
    }
</script>
<style scoped>
    .bg{
      background-size: 100% 100%;
      height: 100%;
      position: fixed;
      width: 100%;
      background-color: #dfe4ea;
   }
   
   input[type="button"]{
       border-radius: 5px;
       width: 70px;
       height: 30px;
       text-align: center;
       background-color: #00a8ff;
       color: #f5f6fa;
       
   }
   .tit{
       width: 900px;
       margin: 0 auto;
       position: relative;
   }
   textarea{
       width: 900px;
       height: 50px;
       margin-top: 30px;
   }
   ul{
       list-style-type: none;
       float: left;
       width: 900px;
   }
   li{
       background-color: #dfe4ea;
       border-bottom: #7f8fa6 1px solid;
       width: 900px;
       margin-left: -30px;
   }
   .page{
       width: 200px;
       position: absolute;
       margin-left: 250px;
       margin-top: -27px;
   }
   
</style>

