<template>
  <!--显示区域内外边框都设置24px-->
  <a-layout-content
          :style="{ margin: '24px', padding: '24px',background: 'white',overflow: 'initial' }">
    <router-view/>
  </a-layout-content>
</template>

<style scoped>

</style>
