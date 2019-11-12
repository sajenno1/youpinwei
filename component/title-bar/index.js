// component/title-bar/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String,
      value: ''
    }, 
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    toHomePage() {
      wx.switchTab({
        url: '/pages/index/index'
      })
    },
    backLastPage() {
      wx.navigateBack()
    }
  }
})
