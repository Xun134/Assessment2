<template>
  <div>
    <div class="flex_row align_center" style="padding: 10px 10px">
      <el-button class="mar_l10" @click="query" size="mini" type="primary"
        >query</el-button
      >
      <el-button
        class="mar_l10"
        size="mini"
        type="primary"
        @click="dialogFormShowF()"
        >Add address</el-button
      >
    </div>
    <div>
      <el-table
        :data="addressList"
        style="width: 100%; margin-bottom: 20px"
        row-key="id"
        border
        height="550"
      >
        <el-table-column prop="id" label="ID" width="150"> </el-table-column>
        <el-table-column prop="name" label="name"> </el-table-column>
        <el-table-column prop="phone" label="phone"></el-table-column>
        <el-table-column prop="address" label="address" width="400">
          <template slot-scope="scope">
            <span>{{ scope.row.address }}-{{ scope.row.address1 }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="address" label="Is it the default address" width="200">
          <template slot-scope="scope">
            <span>{{ scope.row.ifStar == true ? "true" : "false" }}</span>
          </template>
        </el-table-column>
        <el-table-column align="left" label="Other" width="150">
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
        <el-row :gutter="20">
          <el-col :span="24">
            <el-form-item label="address" prop="address">
              <el-cascader
                style="width: 100%"
                size="mini"
                :options="pcaTextArr"
                v-model="formF.address"
              >
              </el-cascader>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="24">
            <el-form-item label="detailed address" prop="address1">
              <el-input
                size="mini"
                v-model="formF.address1"
                autocomplete="off"
                placeholder=""
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="24" class="address">
            <el-form-item label="Default address">
              <el-switch
                v-model="formF.ifStar"
                size="mini"
                autocomplete="off"
              ></el-switch>
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
  addressListQuery,
  addressDelete,
  addressEdit,
  addressAdd,
} from "@/api/myInfo/address";
import {
  provinceAndCityData,
  pcTextArr,
  regionData,
  pcaTextArr,
  codeToText,
} from "element-china-area-data";
// provinceAndCityData：省市二级联动数据,汉字+code
// regionData：省市区三级联动数据
// pcTextArr：省市联动数据，纯汉字
// pcaTextArr：省市区联动数据，纯汉字
// codeToText：是个大对象，属性是区域码，属性值是汉字 用法例如：codeToText['110000']输出北京市

// https://blog.csdn.net/m0_63209237/article/details/134030737
// https://www.sf-express.com/chn/sc/address-book?from=page
export default {
  data() {
    return {
      addressList: [],
      dialogFormShow: false,
      dialogTitle: "",
      pcaTextArr: [],
      formF: {
        name: "",
        phone: "",
        address: "",
        address1: "",
      },
      formBase: {
        name: "",
        phone: "",
        address: "",
        address1: "",
        ifStar: false,
      },
      rules: {
        name: [{ required: true, message: "Please enter the name ", trigger: "blur" }],
        phone: [{ required: true, message: "Please enter your contact phone number", trigger: "blur" }],
        address: [{ required: true, message: "Please select the address", trigger: "change" }],
        address1: [
          { required: true, message: "Please enter the detailed address", trigger: "blur" },
        ],
      },
    };
  },
  created() {
    this.pcaTextArr = pcaTextArr;
    this.query();
  },
  methods: {
    //查询地址列表
    query() {
      addressListQuery({
        id: this.id,
        userName: localStorage.getItem("loginName"),
      }).then((res) => {
        this.addressList = res;
      });
    },
    //新增、编辑地址
    onSubMit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let param;
          //新增地址
          if (this.dialogTitle == "Add") {
            param = {
              userName: localStorage.getItem("loginName"),
              name: this.formF.name,
              phone: this.formF.phone,
              address: String(this.formF.address),
              address1: this.formF.address1,
              ifStar: this.formF.ifStar,
            };
            addressAdd(param).then((res) => {
              console.log(res);
              this.query();
            });
          } else {
            //修改地址
            param = JSON.parse(JSON.stringify(this.formF));
            param.address=String(param.address)
            addressEdit(param).then((res) => {
              console.log(res);
              this.query();
            });
          }
          this.$refs.formF.resetFields(); //清空所有表单项
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
      this.formF = { ...row };
      this.formF.address = row.address.split(',')
      this.dialogFormShow = true;
      this.dialogTitle = "Edit";
    },
    handleDelete(index, row) {
      addressDelete(row.id).then((res) => {
        this.$message({
          message: "success",
          type: "success",
        });
        this.query();
      });
    },
    dialogFormShowF() {
      this.dialogFormShow = true;
      this.dialogTitle = "Add";
      this.formF = { ...this.formBase };
      this.formF.userName = localStorage.getItem("loginName");
      this.formF.phone = "";
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
.address .el-form-item__content {
  text-align: left;
}
</style>
      