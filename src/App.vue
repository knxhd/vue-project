<template>
  <div id="app">
    <div class="header">
      <el-row>
        <el-col :span="24">
          <div class="grid-content bg-purple-dark"></div>
        </el-col>
      </el-row>
    </div>
    <div class="body">
      <v-body></v-body>
    </div>
    <div class="footer">
      <el-row>
        <el-col :span="24">
          <div class="grid-content bg-purple-dark"></div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import header1 from '@/components/header/Header'
import vtable from '@/components/common/element-ui/vue/table'
import navMenu from '@/components/common/element-ui/vue/NavMenu'
import vbody from '@/components/body/body'

export default {
  name: 'app',
  components: {
    'header1': header1,
    'v-table': vtable,
    'v-navMenu': navMenu,
    'v-body': vbody
  }
}
</script>

<style>
  .el-row {
    margin-bottom: 20px;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
