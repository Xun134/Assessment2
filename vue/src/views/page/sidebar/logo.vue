<template>
  <div style="height:50px;">
    <div class="menuTitle">
      Logistics management
    </div>
  </div>
</template>

<script>
export default {
  name: 'logo',
  data() {
    return {}
  },
  methods: {
    gotoHome(){
      this.$router.push({path: '/home'})
    }
  }
}
</script>
<style lang="scss" scoped>
.menuTitle {
  font-weight: 600;
  font-size: 20px;
  color: #8e8787;
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

