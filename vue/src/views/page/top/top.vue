<template>
  <div class="topBox">
    <div class="top-bar__right">
      <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link">
          {{ userName }}
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="logout" divided>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: "top",
  data() {
    return {
      pwdBoxShow: false,
      userName: "",
      menuShowFlag: false,
      name: "kdq",
      pwd: "1234556",
      other: {
        key: "123",
      },
    };
  },
  created() {
    if (localStorage.getItem("loginName")) {
      this.userName = localStorage.getItem("loginName");
    }
  },
  mounted() {},
  computed: {},
  props: [],
  methods: {
    handleCommand(item) {
      console.log(item);
      if (item == "logout") {
        this.logout();
      } else if (item == "info") {
        this.toInfo();
      }
    },
    // 用户信息
    toInfo() {
      this.$router.push({
        path: "/register/findPassword",
      });
    },
    // 退出登录
    logout() {
      console.log("logout");
      localStorage.setItem("loginName", "");
      localStorage.setItem("menuList", "");
      localStorage.setItem("role", "");
      this.$router.push({
        path: "/",
      });
    },
  },
};
</script>
<style>
.topBox {
  position: relative;
  height: 50px;
  padding: 0 20px;
  background: #121a41;
  /* background: rgb(248, 248, 248); */
  text-align: center;
  line-height: 50px;
}
.top_row {
  height: 50px;
  display: flex;
  align-items: center;
  /* float: right; */
  text-align: center;
  margin: 0 10px;
}
.userInfoBar {
  /* width: 50px; */
}
.userInfoBar img {
  width: 30px;
}
.userhead {
  width: 34px;
  height: 34px;
  border-radius: 20px;
  border: 1px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.userhead img {
  width: 30px;
}
.fr {
  float: right;
}
.pwdBox {
  position: fixed;
  z-index: 10;
  width: 300px;
  height: 200px;
  background: #ccc;
  top: 20%;
  left: 50%;
}
</style>
