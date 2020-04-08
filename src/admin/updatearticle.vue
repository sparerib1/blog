<template>
    <el-form style="width: 100%" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">

        
        <el-form-item label="作品名称" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>

        <el-form-item label="简介" prop="intro">
            <el-input v-model="ruleForm.intro"></el-input>
        </el-form-item>
        <el-form-item label="github链接" prop="git">
            <el-input v-model="ruleForm.git"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">修改</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>

    </el-form>
</template>

<script>
    import axios from 'axios'
    export default {
        data() {
            return {
                ruleForm: {
                   
                   name: '',
                   intro:'',
                   git:''
                },
                rules: {
                    name: [
                        { required: true, message: '作品名称不能为空', trigger: 'blur' }
                    ],
                    intro:[
                        { required: true, message: '作品简介不能为空', trigger: 'blur' }
                    ],
                    git:[
                        { required: true, message: 'github链接不能为空', trigger: 'blur' }
                    ]
                }
            };
        },
        methods: {
            submitForm(formName) {
                const _this = this
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        axios.put('http://localhost:8181/articles/update',this.ruleForm).then(function(resp){
                            if(resp.data == 'success'){
                                _this.$alert(_this.ruleForm.name+'修改成功！', '消息', {
                                    confirmButtonText: '确定',
                                    callback: action => {
                                        _this.$router.push('/articlesmanage')
                                    }
                                })
                            }
                        })
                    } else {
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        },
        created() {
            const _this = this
            axios.get('http://localhost:8181/articles/findById/'+this.$route.query.id).then(function(resp){
                _this.ruleForm = resp.data
            })
        }
    }
</script>