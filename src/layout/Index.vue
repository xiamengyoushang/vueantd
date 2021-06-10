<template>
  <a-layout id="components-layout-demo-fixed-sider">
    <Aside/>
    <a-layout :style="{ marginLeft: '220px' }">
      <Header/>
      <Main :style="{minHeight: height}"/>
      <Footer/>
    </a-layout>
  </a-layout>
</template>

<script>
import Aside from "@/layout/Aside";
import Header from "@/layout/Header";
import Main from "@/layout/Main";
import Footer from "@/layout/Footer";

export default {

  components: {Aside, Header, Main, Footer},
  data(){
    return{
      height: 300+'px',
    }
  },

  mounted() {
    // 自动检测窗口高度，将Footer固定到窗口底部
    this.height = window.innerHeight-200 + 'px';
    const _this = this;
    window.onresize = () => {
      return (() => {
        const screenHeight = window.innerHeight;
        _this.height = screenHeight-200 + 'px';
      })()
    };
    this.$message.success(
        '欢迎用户登录 ',
        6,
    );
  }

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

.logo img {
  width: 32px;
  height: 32px;
  margin-right: 5px;
}

</style>
