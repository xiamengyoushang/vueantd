<template>
    <div>
        <a-row>
            <a-col :span="21"></a-col>
            <a-col :span="3">
                <a-button type="primary" style="width: 100%" @click="backPage">
                    <a-icon type="rollback" /> 返回
                </a-button>
            </a-col>
        </a-row>
        <br/>
        <a-row>
            <a-form-model style="margin-left: 15%"
                          ref="ruleForm"
                          :model="user"
                          :rules="rules"
                          :label-col="labelCol"
                          :wrapper-col="wrapperCol">
                <a-form-model-item ref="account" label="用户名称" prop="account">
                    <a-input v-model="user.account" placeholder="请输入名称" />
                </a-form-model-item>
                <a-form-model-item ref="password" label="用户密码" prop="password">
                    <a-input-password v-model="user.password" placeholder="请输入密码" />
                </a-form-model-item>
                <a-form-model-item ref="desc" label="用户描述" prop="desc">
                    <a-textarea v-model="user.desc" placeholder="请输入描述" auto-size />
                </a-form-model-item>
            </a-form-model>
        </a-row>
        <br/>
        <a-row>
            <a-button @click="clickCreateUser()" type="primary"
                      style="margin-left: 30%;width: 40%">
                新建用户
            </a-button>
        </a-row>
    </div>
</template>

<script>
    import {Create} from "../../api/account";

    export default {
        name: "UserCreate",
        data(){
            return {
                labelCol: { span: 4 },
                wrapperCol: { span: 12 },
                user:{
                    account:"",
                    password:"",
                    desc:""
                },
                rules:{
                    account: [
                        { required: true, message: '请输入有效的邮箱账号', trigger: 'blur' },
                    ],
                    password: [
                        { required: true, min: 6, max: 18, message: '请输入6-18位字母数据密码', trigger: 'blur' },
                    ]
                }
            }
        },
        methods: {
            backPage(){
                this.$emit('done', "Back");
            },
            clickCreateUser(){
                const _this = this;
                Create(this.user).then(res=>{
                    if (res["code"] == 0) {
                        _this.$message.success("新建用户成功");
                        this.$emit('done', "Confirm");
                    } else {
                        _this.$message.warning(res["message"]);
                    }
                });
            }
        },
    }
</script>

<style scoped>

</style>
