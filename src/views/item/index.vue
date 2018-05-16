<template>
    <div class="container">
        <el-button type="primary" plain @click="handleAddItem">创建产品</el-button>
    </div>
</template>

<script>
import { addItem, getItemListByPage } from "@/api/itemApi.js";
export default {
  name: "item",
  data() {
    return {};
  },
  methods: {
    handleAddItem() {
      let data = {
        typeId: 1,
        ServerLevel: 1,
        title: "保洁",
        icon: "https://www.tjwq666.com/img/spa.png",
        shortMsg: "专业保洁",
        price: "128",
        detail: "专业足疗，大武清666",
        weight: 1
      };
      addItem(data)
        .then(result => {
          console.log(result);
        })
        .catch(err => {});
    }
  },
  mounted() {
    let data = {
      page: 0,
      size: 10
    };
    getItemListByPage(data).then(result => {
      console.log(result);
    });
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
