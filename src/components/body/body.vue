<template>
  <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
    <el-tab-pane label="商品" name="first">商品</el-tab-pane>
    <el-tab-pane label="评价" name="second">评价</el-tab-pane>
    <el-tab-pane label="商店" name="third">商店</el-tab-pane>
  </el-tabs>
</template>
<script>
export default {
  data () {
    return {
      activeName2: 'first'
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    }
  }
}
</script>
