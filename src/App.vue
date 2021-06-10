<template>
  <!--<a-locale-provider>替换为<a-config-provider>-->
  <a-config-provider :locale="locale">
    <div id="app">
      <router-view/>
    </div>
  </a-config-provider>
</template>

<script>
// 加载antd需要先设置为中文
import zh_CN from "ant-design-vue/lib/locale-provider/zh_CN";

export default {
  data() {
    return {
      locale: zh_CN
    }
  }
};

</script>

<style>

#app {
  height: 100%;
}

/*顶部进度条样式*/
#nprogress .bar {
  background: #1890ff !important;
}

body {
  letter-spacing: 1px;
  background: #f0f2f5 !important;
}

</style>
