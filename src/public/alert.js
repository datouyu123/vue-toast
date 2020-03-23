import Vue from 'vue'

import Alert from '../pages/alert.vue'

Alert.instance = prop => {
  const props = prop || {}
  // 实例化一个组件挂载到body
  const Instance = new Vue({
    data: props,
    render (h) {
      return h(Alert, {
        props: props
      })
    }
  })
  // 手动挂载到dom
  const component = Instance.$mount()
  document.body.appendChild(component.$el)
  // 子组件的第一个元素是alert组件
  const alert = Instance.$children[0]
  // 闭包返回组件暴露的方法
  return {
    toast () {
      alert.toast()
    }
  }
}

// 单例
let instance

function getInstance () {
  instance = instance || Alert.instance()
  return instance
}

export default {
  toast () {
    let instance = getInstance()
    instance.toast()
  }
}
