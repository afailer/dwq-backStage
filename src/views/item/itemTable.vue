<template>
  <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      fixed
      prop="typeId"
      label="类型id"
      width="150">
    </el-table-column>
    <el-table-column
      prop="title"
      label="标题"
      width="120">
    </el-table-column>
    <el-table-column
      prop="shortMsg"
      label="简短描述"
      width="120">
    </el-table-column>
    <el-table-column
      prop="price"
      label="价格"
      width="120">
    </el-table-column>
    <el-table-column
      prop="detail"
      label="详细描述"
      width="300">
    </el-table-column>
    <el-table-column
      prop="weight"
      label="权重"
      width="120">
    </el-table-column>
    <el-table-column
      label="操作">
      <template slot-scope="scope">
        <el-button @click="handleEdit(scope.row)" type="primary" size="small">编辑</el-button>
        <el-button @click="handleDelete(scope.row)" type="danger" size="small">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { getItemListByPage } from "@/api/itemApi.js";
  export default {
    methods: {
      handleClick(row) {
        console.log(row);
      },
      loadData(){
        console.log("---itemTable LoadData---")
        let data = {
            page: 1,
            size: 10
        };
        getItemListByPage(data).then(result => {
          console.log(result)
            this.tableData = result.data.datas.itemList
        });
      }
    },
    data() {
      return {
        tableData: []
      }
    },
    mounted () {
      this.loadData()
    }
  }
</script>