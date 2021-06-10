<template>
    <a-result status="500" title="500" sub-title="抱歉，请求服务器错误！">
        <template #extra>
            <a-button type="primary" @click="clickBtn" style="letter-spacing: 1px">
                <a-icon type="enter" />返回
            </a-button>
        </template>
    </a-result>
</template>

<script>
    export default {
        data() {
            return {};
        },
        methods:{
            clickBtn(){
                this.$router.go(-1);
            }
        }
    }
</script>

<style scoped>

</style>
