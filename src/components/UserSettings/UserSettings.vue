<template>
    <div>
        <a-form-model ref="ruleForm" :model="toSelectItem">
            <a-form-model-item ref="user_id" label="用户id" prop="user_id">
                <a-input v-model="toSelectItem.user_id" disabled/>
            </a-form-model-item>
            <a-form-model-item ref="user_name" label="用户名称" prop="user_name">
                <a-input v-model="toSelectItem.user_name" disabled/>
            </a-form-model-item>
            <a-form-model-item ref="state" label="用户状态" prop="state">
                <a-select v-model="toSelectItem.state" style="width: 100%">
                    <a-select-option v-for="state in stateList" :key="state.id">
                        {{ state.title }}
                    </a-select-option>
                </a-select>
            </a-form-model-item>
        </a-form-model>
    </div>
</template>

<script>
    export default {
        name: "UserSettings",
        props: {
            toSelectItem: {}
        },
        data(){
            return {
                stateList: [
                    {id:0,title:"停用"},
                    {id:1,title:"正常"},
                ]
            };
        },
        created() {
            // console.log(this.toSelectItem);
        },
        methods: {

        }
    }
</script>

<style scoped>

</style>
