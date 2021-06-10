<template>
    <div>
        <h1>我的账户</h1>
        <br/>
        <a-row>
            <a-form-model style="margin-left: 15%"
                          ref="ruleForm"
                          :model="user"
                          :label-col="labelCol"
                          :wrapper-col="wrapperCol">
                <a-form-model-item ref="account" label="账户名称" prop="account">
                    <a-input v-model="user.account" disabled="" />
                </a-form-model-item>
                <a-form-model-item ref="nick_name" label="用户昵称" prop="nick_name">
                    <a-input v-model="user.nick_name" disabled="" />
                </a-form-model-item>
                <a-form-model-item ref="role_name" label="用户角色" prop="role_name">
                    <a-input v-model="user.role_name" disabled="" />
                </a-form-model-item>
                <a-form-model-item ref="desc" label="用户描述" prop="desc">
                    <a-textarea v-model="user.desc" auto-size disabled/>
                </a-form-model-item>
            </a-form-model>
        </a-row>
    </div>
</template>

<script>
    import {QueryInfo} from "../../api/account";

    export default {
        data(){
            return {
                labelCol: { span: 4 },
                wrapperCol: { span: 12 },
                user: {
                    account:"",
                    nick_name:"",
                    role_name:"",
                    desc:"",
                },
            }
        },
        created() {
            const _this = this;
            QueryInfo().then(res=>{
                if (res["code"] == 0) {
                   _this.user = res.data;
                }
            });
        }
    }
</script>

<style scoped>

</style>
