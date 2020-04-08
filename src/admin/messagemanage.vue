<template>
    <div body-bg1>
        <nav-header></nav-header>
        <div class="artic">
    <el-table
      :data="message"
      border
      style="width: 800px">
      <el-table-column
        fixed
        prop="nicknameid"
        label="序号"
        width="150">
      </el-table-column>
      <el-table-column
        prop="nickname"
        label="留言昵称"
        width="220">
      </el-table-column>
      <el-table-column
        prop="comment"
        label="留言内容"
        width="320">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">删除</el-button>
          
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
<nav-footer></nav-footer>
</div>
  </template>
<script>
    import NavHeader from '@/components/Manegeheader'
    import NavFooter from '@/components/Footer'
    import axios from 'axios'
    export default{
        name:'Messagemagage',
        components:{
            NavHeader,
            NavFooter,
        },
       data() {
           return {
               message:[],

           }
       },
       created ()  {
        const _this=this
        axios.get('http://localhost:8181/message/findAll/0/3').then(function(resp){
               _this.message=resp.data.content
               _this.pageSize=resp.data.size
               _this.total=resp.data.totalElements
           })
       },
       methods: {
        handleClick(row){
            axios.delete('http://localhost:8181/message/deleteById/'+row.nicknameid).then(function(resp){
                alert("删除成功！")
            })
        }, 
        page(currentPage){
                const _this = this
                axios.get('http://localhost:8181/message/findAll/'+(currentPage-1)+'/3').then(function(resp){
                    console.log(resp)
                    _this.message = resp.data.content
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
        margin: 20px auto;
        text-align: center;
    }
   
    
</style>