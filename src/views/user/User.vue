<template>
    <div>
        <h1>用户管理</h1>
        <br/>
        <div v-if="showType == 'SHOW_TYPE_LIST'">
            <a-row :gutter="20">
                <a-col :span="3">
                    <a-select v-model="query_type" style="width: 100%">
                        <a-select-option v-for="content in queryList" :key="content.id">
                            {{ content.title }}
                        </a-select-option>
                    </a-select>
                </a-col>
                <a-col :span="10">
                    <a-input placeholder="去输入查询的内容" v-model="query_content" />
                </a-col>
                <a-col :span="4">
                    <a-button type="primary" style="width: 100%" @click="getUserList">
                        <a-icon type="search" /> 查询
                    </a-button>
                </a-col>
                <a-col :span="4">
                    <a-button type="primary" style="width: 100%" @click="createUser">
                        <a-icon type="user-add" /> 新建
                    </a-button>
                </a-col>
            </a-row>
            <br/>
            <a-row>
                <a-table
                        size="default"
                        :columns="columns"
                        :data-source="datalist"
                        :rowKey="record=>record.user_id"
                        :bordered="false"
                        :loading="loading"
                        :pagination="{
                                total: total,
                                current: current,
                                pageSize: pageSize,
                                showSizeChanger: true,
                                pageSizeOptions: ['15','30','50','100']
                        }"
                        @change="handleTableChange">
                    <span slot="state" slot-scope="text">{{(text==1?'正常':'停用') }}</span>
                    <span slot="action" slot-scope="text, record, index">
                    <a-button @click="handleUpdate(record)" type="primary">
                        设置
                    </a-button>
                    <a-divider type="vertical"/>
                    <a-button @click="handleDelete(record)" type="danger">
                        删除
                    </a-button>
                    </span>
                </a-table>
            </a-row>
        </div>
        <div v-if="showType == 'SHOW_TYPE_CREATE'">
            <UserCreate @done="callbackEvent"></UserCreate>
        </div>
        <a-modal title="用户设置"
                 :visible="visible"
                 :confirm-loading="confirmLoading"
                 @ok="handleOk"
                 @cancel="handleCancel">
            <UserSettings :toSelectItem="selectItem"></UserSettings>
        </a-modal>
    </div>
</template>

<script>
import {Query_list, DeleteUser, Update_state} from "../../api/user";

import {Logout} from "../../api/account";
import UserSettings from "../../components/UserSettings/UserSettings";
import UserCreate from "../../components/UserCreate/UserCreate";

    const SHOW_TYPE = {
        SHOW_TYPE_LIST: "SHOW_TYPE_LIST",
        SHOW_TYPE_CREATE: "SHOW_TYPE_CREATE"
    };

    const columns = [
        {
            title: '用户ID',
            dataIndex: 'user_id',
            key: 'user_id',
            scopedSlots: { customRender: 'user_id' },
        },
        {
            title: '用户名称',
            dataIndex: 'user_name',
            key: 'user_name',
            ellipsis: false,
        },
        {
            title: '用户昵称',
            dataIndex: 'nick_name',
            key: 'nick_name',
            ellipsis: false,
        },
        {
            title: '用户角色',
            dataIndex: 'role_name',
            key: 'role_name',
            ellipsis: false,
        },
        {
            title: '状态',
            dataIndex: 'state',
            key: 'state',
            scopedSlots: {customRender: 'state'},
            ellipsis: false,
        },
        {
            title: '操作',
            dataIndex: 'action',
            key: 'action',
            scopedSlots: {customRender: 'action'},
            ellipsis: false,
        }
    ];

    export default {
        components: {UserCreate, UserSettings},
        data() {
            return {
                // 当前显示的类型
                showType: SHOW_TYPE.SHOW_TYPE_LIST,
                selectItem: {},

                // 模态弹窗
                visible:false,
                confirmLoading:false,

                // 查询列表
                query_type:0,
                query_content:"",
                queryList:[
                    {id:0,title:"用户名称"},
                ],
                columns,
                datalist: [],
                loading:false,
                total: 0,
                current: 1,
                pageSize: 15,
            };
        },
        created() {
            this.getUserList();
        },
        methods:{
            createUser(){
                this.showType = SHOW_TYPE.SHOW_TYPE_CREATE;
            },
            getUserList(){
              this.loading = true;
              const data = {
                  query_type:this.query_type,
                  query_content:this.query_content,
                  page_index:this.current,
                  page_size:this.pageSize
              };
              const _this = this;
              Query_list(data).then(res=>{
                  if (res["code"] == 0) {
                      _this.total = res.data.total;
                      _this.datalist = res.data.data;
                  } else {
                      _this.$message.warning(res["message"]);
                  }
                  _this.loading = false;
              });
            },
            handleTableChange(pagination) {
                this.current = pagination.current;
                this.pageSize = pagination.pageSize;
                this.getUserList();
            },
            handleUpdate(record) {
                this.selectItem = record;
                this.visible = true;
            },
            handleDelete(record){
                const _this = this;
                this.$confirm({
                    title: '删除用户？',
                    content: '',
                    cancelText: '取消',
                    okText: '确定',
                    onOk() {
                        const data = {
                            user_id: record.user_id
                        }
                        DeleteUser(data).then(res=>{
                            if (res["code"] == 0) {
                                _this.$message.success("删除成功");
                            } else {
                                _this.$message.warning(res["message"]);
                            }
                        });
                    },
                });
            },
            handleOk(){
                this.confirmLoading = true;
                const _this = this;
                Update_state(this.selectItem).then(res=>{
                    if (res["code"] == 0) {
                        _this.$message.success("设置成功");
                    } else {
                        _this.$message.warning(res["message"]);
                    }
                    _this.confirmLoading = false;
                    _this.visible = false;
                    _this.getUserList();
                });
            },
            handleCancel(){
                this.visible = false;
            },
            callbackEvent(eventType){
                this.showType = SHOW_TYPE.SHOW_TYPE_LIST;
                if (eventType == "Confirm"){
                    this.getUserList();
                }
            }
        }
    }
</script>

<style scoped>

</style>
