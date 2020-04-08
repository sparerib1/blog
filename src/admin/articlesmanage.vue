<template>
    <div class="body_g">
        <div class="body-bg1">
            <nav-header></nav-header>
            <div class="artic">
                
                <el-table
                :data="articles"
                border
                style="width: 100%">
                <el-table-column
                  fixed
                  prop="id"
                  label="序号"
                  width="150">
                </el-table-column>
                <el-table-column
                  prop="name"
                  label="作品名"
                  width="220">
                </el-table-column>
                <el-table-column
                  prop="intro"
                  label="作品简介"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="git"
                  label="github链接"
                  width="120">
                </el-table-column>
                <el-table-column
                  fixed="right"
                  label="操作"
                  width="220">
                  <template slot-scope="scope">
                    <el-button @click="edit(scope.row)" type="text" size="small">修改</el-button>
                    <el-button @click="deleteArticle(scope.row)" type="text" size="small">删除</el-button>
                  </template>
                </el-table-column>
              </el-table>
              
    <el-pagination
    background
    layout="prev, pager, next"
    :page-size="pageSize"
    :total="total"
    @current-change="page">
  </el-pagination>
            </div>
            <div class="inp">
            <form :model="addarticle">
            <label>作品名：<input type="text" v-model="addarticle.name"></label>
            
            <label>简介：<input type="text" v-model="addarticle.intro"></label>
            
            <label>github：<input type="text" v-model="addarticle.git" ></label>
            
            <input type="button" value="添加" class="add" @click="add">
            </form>
            

            </div>
            <nav-footer></nav-footer>
        </div>
    </div>
</template>
<script>
    import NavHeader from '@/components/Manegeheader'
    import NavFooter from '@/components/Footer'
    import axios from 'axios'
    export default{
        
        components:{
            NavHeader,
            NavFooter,
        },
       data() {
           return {
               articles:[],
               addarticle:{
                   
                   name:"",
                   intro:"",
                   git:""
               }
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
        deleteArticle(row){
            axios.delete('http://localhost:8181/articles/deleteById/'+row.id).then(function(resp){
                alert("删除成功！")
            })
        },
        edit(row) {
                this.$router.push({
                    path: '/updatearticle',
                    query:{
                        id:row.id
                    }
                })
            },
        add(){
               const _that=this
               if(this.addarticle.name==""||this.addarticle.intro==""||this.addarticle.git==""){
                   alert("请输入数据");
                   return false
               }
               else(
                   axios.post('http://localhost:8181/articles/save',_that.addarticle)
               .then(function(resp){
                   if(resp.data=="success"){
                       alert("添加成功！")
                   }
               })
               )
               
           },
           updateclick(){
            axios.put('http://localhost:8181/articles/update',this.addarticle).then(function(resp){
                            if(resp.data == "success"){
                                alert("修改成功！")
                            }
                        })
           },
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
<style scoped>
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
  
    .inp{
        width: 1000px;
        margin: 30px auto;
    }
    .add{
        background-color: #2d98da;
        color: #dfe4ea;
        border-radius: 5px;
    }
</style>