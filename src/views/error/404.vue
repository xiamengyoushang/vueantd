<template>
    <a-result status="404" title="404" sub-title="抱歉，您访问的页面不存在！">
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
