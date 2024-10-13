<template>
  <div class="siderBar">
    <el-scrollbar style="height: 100%">
      <el-col :span="24">
        <el-menu
          :unique-opened="true"
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#20222a"
          text-color="#fff"
          active-text-color="#ffd04b"
          router
        >
          <div v-for="(menu1, index1) in menuList" :key="index1">
            <!-- 一级菜单（没有二级菜单） -->
            <el-menu-item :index="menu1.url" v-if="!menu1.children">
              <i :class="menu1.icon"></i>
              <span>{{ menu1.title }}</span>
            </el-menu-item>
            <!-- 一级菜单（有二级菜单） -->
            <el-submenu :index="menu1.url" v-else>
              <template slot="title">
                <i :class="menu1.icon"></i>
                <span>{{ menu1.title }}</span>
              </template>
              <div v-for="(menu2, index2) in menu1.children" :key="index2">
                <!-- 二级菜单（没有三级菜单） -->
                <el-menu-item :index="menu2.url" v-if="!menu2.children">
                  <i :class="menu2.icon"></i>
                  <span>{{ menu2.title }}</span>
                </el-menu-item>
                <!-- 二级菜单（有三级菜单） -->
                <el-submenu :index="menu2.url" v-else>
                  <template slot="title">
                    <i :class="menu2.icon"></i>
                    <span>{{ menu2.title }}</span>
                  </template>
                  <el-menu-item
                    :index="menu3.url"
                    v-for="(menu3, index3) in menu2.children"
                    :key="index3"
                  >
                    <i :class="menu3.icon"></i>
                    <span>{{ menu3.title }}</span>
                  </el-menu-item>
                </el-submenu>
              </div>
            </el-submenu>
          </div>
        </el-menu>
      </el-col>
    </el-scrollbar>
  </div>
</template>

<script>
import { formatWithAllSeperatorNew } from "@/util/date";
import {menu} from '@/common/contant'
export default {
  name: "sidebar",
  data() {
    return {
      menuList: [],
      lastMenuList: [],
      userIp: "",
    };
  },
  created() {
    this.menuList = [...menu];
  },
  computed: {},
  mounted() {},
  methods: {
    handleOpen(key, keyPath) {
      // console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath);
    },
  },
  watch: {
  },
};
</script>
<style lang="scss" scoped>
.el-menu-vertical-demo {
  text-align: left;
}
.menuTitle {
  font-size: 20px;
  color: #fff;
  width: 240px;
  height: 50px;
  background: #20222a;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
.menuTitle img {
  height: 35px;
  width: 160px;
  margin-right: 40px;
}
</style>

