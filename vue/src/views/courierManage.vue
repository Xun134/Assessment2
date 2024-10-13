<template>
  <div>
    <div class="flex_row align_center" style="padding: 10px 10px">
      <span>Courier Name:</span>
      <el-input
        style="width: 100px"
        size="mini"
        v-model="name"
        autocomplete="off"
      ></el-input>
      <el-button class="mar_l10" @click="query" size="mini" type="primary"
        >query</el-button
      >
      <el-button
        class="mar_l10"
        size="mini"
        type="primary"
        @click="dialogFormShowF()"
        >New Courier</el-button
      >
    </div>
    <div>
      <el-table
        :data="courierList"
        style="width: 100%; margin-bottom: 20px"
        row-key="id"
        border
        height="550"
      >
        <el-table-column prop="id" label="Courier ID"> </el-table-column>
        <el-table-column prop="name" label="Courier Name"> </el-table-column>
        <el-table-column prop="phone" label="Courier Phone"> </el-table-column>
        <el-table-column align="left" label="Other">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
              >Edit</el-button
            >
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              >Delete</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>

    <!-- 新增/修改 -->
    <el-dialog
      :title="dialogTitle"
      :visible.sync="dialogFormShow"
      :close-on-click-modal="false"
    >
      <el-form :rules="rules" ref="formF" :model="formF" label-width="80px">
        <el-row :gutter="20">
          <el-col :span="24">
            <el-form-item label="name" prop="name">
              <el-input
                size="mini"
                v-model="formF.name"
                autocomplete="off"
                placeholder=""
              ></el-input> </el-form-item
          ></el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="24">
            <el-form-item label="phone" prop="phone">
              <el-input
                size="mini"
                v-model="formF.phone"
                autocomplete="off"
                placeholder=""
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button size="mini" @click="onClose()">Close</el-button>
        <el-button size="mini" type="primary" @click="onSubMit('formF')"
          >SubMit</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>
      
<script>
import {
  courierListQuery,
  courierDelete,
  courierEdit,
  courierAdd,
} from "@/api/courier/courier";
import moment from "moment";
export default {
  data() {
    return {
      name: "",
      courierList: [],
      dialogFormShow: false,
      dialogTitle: "",
      formF: {
        name: "",
        phone: "",
      },
      formBase: {
        phone: "",
        name: "",
      },
      rules: {
        name: [{ required: true, message: "Please enter the name", trigger: "blur" }],
        phone: [{ required: true, message: "Please enter your contact phone number", trigger: "blur" }],
      },
    };
  },
  created() {
    this.query();
  },
  methods: {
    query() {
      courierListQuery({
        name: this.name,
      }).then((res) => {
        this.courierList = res;
      });
    },
    onSubMit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let param;
          //新增快递员
          if (this.dialogTitle == "Add") {
            let flag = this.courierList.find((e) => e.name == this.formF.name);
            if (flag) {
              this.$message({
                message: "The courier's name already exists!",
                type: "warning",
              });
              return;
            }
            console.log(this.formF);
            param = {
              name: this.formF.name,
              phone: this.formF.phone,
            };
            courierAdd(param).then((res) => {
              console.log(res);
              this.query();
            });
          } else {
            param = { ...this.formF };
            courierEdit(param).then((res) => {
              this.$message({
                message: res,
                type: "success",
              });
              this.query();
            });
          }
          this.$refs.formF.resetFields(); 
          this.dialogFormShow = false;
        } else {
          return false;
        }
      });
    },
    onClose() {
      this.dialogFormShow = false;
    },
    handleEdit(index, row) {
      console.log(row);
      this.dialogFormShow = true;
      this.dialogTitle = "Edit";
      this.formF = { ...row };
    },
    handleDelete(index, row) {
      courierDelete(row.id).then((res) => {
        this.$message({
          message: res,
          type: "success",
        });
        this.query();
      });
    },
    dialogFormShowF() {
      this.dialogFormShow = true;
      this.dialogTitle = "Add";
      this.formF = { ...this.formBase };
    },
  },
};
</script>
      
<style>
.el-select--mini {
  width: 100%;
}
.red {
  color: #f00;
}
</style>
      