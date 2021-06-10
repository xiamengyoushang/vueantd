<template>
  <a-layout-sider
      :style="{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }"
      width="220">
    <div class="logo">
      <img src="../assets/logo.svg" alt="">
      物流管理系统
    </div>
    <a-menu theme="dark" mode="inline">
      <a-sub-menu v-for="(item, index) in menus" :key="index">
        <span slot="title">
          <a-icon :type="item.icon"/>
          <span>{{ item.title }}</span>
        </span>
        <a-menu-item v-for="menu in item.children" :key="menu.title">
          <router-link :to="menu.path">
            {{ menu.title }}
          </router-link>
        </a-menu-item>
      </a-sub-menu>
    </a-menu>
  </a-layout-sider>
</template>

<script>

export default {

  data() {
    return {
      menus: [
        {
          title: '用户信息管理',
          icon: 'user',
          children: [
            {title: '用户管理', path: '/user'},
            {title: '我的账户', path: '/account'},
          ]
        },
        {
          title: '基础信息管理',
          icon: 'home',
          children: [
            {title: '商品管理', path: '/xxx'},
            {title: '来往单位', path: '/xxx'},
            {title: '员工管理', path: '/xxx'},
            {title: '仓库管理', path: '/xxx'},
          ]
        },
        {
          title: '系统信息管理',
          icon: 'tool',
          children: [
            {title: '安全设置', path: '/xxx'},
            {title: '操作员管理', path: '/xxx'},
            {title: '权限列表', path: '/xxx'},
          ]
        },
      ]
    }
  },

}

</script>

<style scoped>

#components-layout-demo-fixed-sider .logo {
  padding: 10px 15px;
  height: 50px;
  font-size: 15px;
  margin: 16px;
  color: #ffffff;
  letter-spacing: 2px;
}

.ant-menu {
  letter-spacing: 1px;
}

.logo img {
  width: 32px;
  height: 32px;
  margin-right: 5px;
}

</style>
