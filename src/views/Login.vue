<template>
    <div class="login-box">
        <div>
            <div class="box-header">
                <img class="logo" src="../assets/logo.svg" alt=""/>
                <div class="box-header-t">后台管理系统</div>
            </div>
            <div class="title">后台管理系统 - 用户登录</div>
            <a-tabs @change="tabClick" default-active-key="1" :tabBarStyle="{ textAlign: 'center' }">
                <a-tab-pane key="1" tab="密码登陆">
                    <a-input
                            v-model="form.account"
                            size="large"
                            style="margin-top: 10px"
                            class="input"
                            placeholder="账号">
                        <a-icon slot="prefix" type="mail"/>
                    </a-input>
                    <a-input-password
                            v-model="form.password"
                            size="large"
                            class="input"
                            placeholder="密码">
                        <a-icon slot="prefix" type="lock"/>
                    </a-input-password>
                </a-tab-pane>
                <a-tab-pane key="2" tab="验证码登陆" force-render>
                    <a-input
                            v-model="form.account"
                            size="large"
                            style="margin-top: 10px"
                            class="input"
                            placeholder="邮箱">
                        <a-icon slot="prefix" type="mail"/>
                    </a-input>
                    <div style="display: flex">
                        <a-input
                                v-model="form.code"
                                size="large"
                                class="input"
                                placeholder="验证码">
                            <a-icon slot="prefix" type="safety-certificate"/>
                        </a-input>
                        <a-button class="code-btn" :loading="sendLoading" @click="sendEmail">
                            获取验证码
                        </a-button>
                    </div>
                </a-tab-pane>
            </a-tabs>
            <div style="margin-bottom: 20px">
                <a-checkbox v-model="form.remember">记住密码</a-checkbox>
                <a-button type="link" style="margin-left: 266px" @click="forgetPwd()">
                    忘记密码 ?
                </a-button>
            </div>
            <a-button :loading="submitLoading" class="submit-btn" type="primary" @click="submitLogin">
                确认登陆
            </a-button>
            <div class="des">后台管理系统 - Copyright 2021 PENG</div>
        </div>
    </div>
</template>

<script>
    import {Login} from "../api/account";

    export default {
        data() {
            return {
                sendLoading: false,
                submitType: '1', //1账号登录 2邮箱登录
                submitLoading: false,
                form: {
                    password: 'admin',
                    account: 'admin',
                    code: '',
                    remember: true,
                },
            }
        },
        methods: {
            sendEmail(){
                this.notSupport();
            },
            submitLogin(){
                const _this = this;
                if (this.submitType == '1') {
                    Login(this.form).then(res=>{
                        if (res['code'] == 0) {
                            const token = res["data"].token;
                            const userInfo = res["data"];
                            // 保存全局属性
                            _this.$store.commit("SET_TOKEN",token);
                            _this.$store.commit("SET_USERINFOR",userInfo);
                            this.$router.push("/user");
                        } else {
                            _this.$message.warning(res['message']);
                        }
                    });
                } else {
                    this.notSupport();
                }
            },
            forgetPwd(){
              this.notSupport();
            },
            notSupport(){
                this.$message.warning("当前版本暂不支持该功能，尽情期待！");
            },
            tabClick(key) {
                this.submitType = key
            },
        }
    }
</script>

<style scoped>
    body {
        background: #000000 !important;
    }

    >>> .ant-tabs-bar {
        border-bottom: none !important;
    }

    >>> .ant-btn-primary {
        border-color: #5a84fd;
    }

    .login-box {
        width: 350px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }

    .box-header {
        display: flex;
    }

    .box-header-t {
        font-weight: bolder;
        font-size: 30px;
    }

    .logo {
        width: 44px;
        height: 44px;
        margin-right: 20px;
        margin-left: 43px;
    }

    >>> .ant-tabs-nav {
        width: 350px;
    }

    >>> .ant-tabs-ink-bar {
        left: 52px;
    }

    >>> .ant-input-affix-wrapper .ant-input {
        font-size: 12px !important;
    }

    .title {
        color: #91949c;
        padding-top: 15px;
        padding-bottom: 35px;
        font-size: 13px;
        text-align: center;
    }

    .input {
        margin-bottom: 25px;
        font-size: 10px;
    }

    .code-btn {
        height: 40px;
        margin-left: 30px;
    }

    .submit-btn {
        letter-spacing: 2px;
        background: #5a84fd;
        width: 100%;
        height: 45px;
    }

    .des {
        padding-top: 25px;
        font-size: 13px;
        text-align: center;
        color: #91949c;
        letter-spacing: 2px;
    }
</style>
