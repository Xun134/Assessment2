<template>
  <div id="app">
    <!-- 其他页 -->
    <el-container v-if="$route.meta.keepAlive">
      <el-aside width="240px" class="aside">
        <!-- 侧边栏 -->
        <logo></logo>
        <sidebar></sidebar>
      </el-aside>
      <el-container>
        <el-header style="padding: 0px; height: 50px"> 
          <keep-alive>
            <!-- 导航栏 -->
            <top></top>
          </keep-alive>
        </el-header>
        <el-main class="main">
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </el-main>
      </el-container>
    </el-container>
    <!-- 登录页/注册页 -->
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
import top from "./views/page/top/top";
import sidebar from "./views/page/sidebar/sidebar";
import logo from "./views/page/sidebar/logo";
import { mapState } from "vuex";
export default {
  name: "App",
  components: {
    top,
    sidebar,
    logo,
  },
  computed: {},
  created() {
    // console.log(location.protocol)
    // console.log(window.innerHeight - 130)
  },
  data() {
    return {
      // screenHeight: window.innerHeight - 130,
    };
  },
};
</script>

<style>
html,
body,
#app {
  height: 100%;
  margin: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.aside {
  height: 100vh;
  background: #20222a;
  border-top: 1px solid #363636;
}
.el-aside::-webkit-scrollbar {
  display: none;
}
.main {
  padding: 0 10px;
  height: calc(100vh - 50px);
  overflow-y: auto;
  background: rgb(248, 248, 248);
  border-top: 1px solid #d9d6d6;
}
.container {
  width: 100%;
  height: 100%;
}
</style>
