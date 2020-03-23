<template lang="html">
  <div style="margin-top: 20px; text-align: center;" id="index">
    <img src="../assets/logo.png" alt="">
    <div class="bottom">
      <button @click="toast">点击弹出toast</button>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {}
  },
  methods: {
    toast () {
      this.$Alert.toast()
    }
  }
}
</script>

<style lang="scss">
.bottom {
  position: fixed;
  bottom: 100px;
  left: 0;
  right: 0;
  background: #fff;
  width: fit-content;
  margin: 0 auto;
  padding: 10px;
  font-size: 20px;
}
</style>
