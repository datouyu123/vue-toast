<template>
  <div class="alert" v-show="show">
    Hello World!
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: false
    }
  },
  methods: {
    toast () {
      this.show = true
      setTimeout(() => {
        this.show = false
      }, 1500)
    }
  }
}
</script>

<style lang="scss" scoped>
  .alert {
    background-color: rgba(0, 0, 0, 0.3);
    color: #fff;
    padding: 10px;
    width: fit-content;
    margin: 0 auto;
  }
</style>
