<template>
    <el-dialog
        title="提示"
        :visible.sync="showItemDialog"
        width="30%"
        center>
    <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="种类ID">
            <el-input v-model="form.typeId"></el-input>
        </el-form-item>
        <el-form-item label="接单者等级">
            <el-input v-model="form.ServerLevel"></el-input>
        </el-form-item>
        <el-form-item label="项目名称">
            <el-input v-model="form.title"></el-input>
        </el-form-item>
        <el-form-item label="简短描述">
            <el-input v-model="form.shortMsg"></el-input>
        </el-form-item>
        <el-form-item label="价格">
            <el-input v-model="form.price"></el-input>
        </el-form-item>
        <el-form-item label="详细信息">
            <el-input v-model="form.detail"></el-input>
        </el-form-item>
        <el-form-item label="比重">
            <el-input v-model="form.weight"></el-input>
        </el-form-item>
        <el-form-item>
           <el-button type="primary" @click="handleCreate">立即创建</el-button>
           <el-button>取消</el-button>
        </el-form-item>
    </el-form>
</el-dialog>
</template>

<script>
import { addItem } from "@/api/itemApi.js";
  export default {
    data() {
      return {
        showItemDialog: false,
        isEdit:false,
        form:{}
      };
    },
    methods: {
        handleCreate(){
          addItem(form).then(result => {
            console.log(result);
          }).catch(err => {});
        }
    },
    created () {
      this.$bus.$on("createItem", (info) => {
          this.isEdit = info.isEdit;
          this.form = info.form;
        this.showItemDialog = true;
      });
    }
  };
</script>