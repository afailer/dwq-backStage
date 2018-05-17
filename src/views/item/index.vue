<template>
    <div class="container">
      <itemDialog></itemDialog>
        <el-button type="primary" plain @click="handleAddItem">创建产品</el-button>
        <itemTable></itemTable>
    </div>
</template>

<script>
import itemDialog from "./itemDialog"
import itemTable from "./itemTable"
export default {
  name: "item",
  components: {
    itemDialog,
    itemTable
  },
  data() {
    return {};
  },
  methods: {
    handleAddItem() {
       this.$bus.$emit("createItem", {isEdit:false,form:{}});
    }
  },
  mounted() {
    
  }
};
</script>

<style>
.container {
  width: 95%;
  margin: 0 auto;
  padding-top: 20px;
}
</style>
