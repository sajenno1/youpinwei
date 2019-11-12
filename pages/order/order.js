// pages/order/order.js
var wxbarcode = require('../../utils/qrcode/index.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //dialog
    dialogShow: false,
    showOneButtonDialog: false,
    oneButton: [{ text: '确定' }],
    status:[
      { tag: "全部", state: "all" },
      { tag: "待付款", state: "wapy" },
      { tag: "待发货", state: "wsend" },
      { tag: "待收货", state: "wreceived" },
      { tag: "已完成", state: "wcomplete" },
      { tag: "已关闭", state: "wclose" },
    ],
    active: "all",
    orderList: [
      {
        state: "wpay", 
        tag: "待付款",
        orderNo: "D1234567890000", 
        num: 1, 
        time: "2019-11-11 14:46:31", 
        amount: "298.5"
      },
      {
        state: "wsend",
        tag: "待发货",
        orderNo: "D1234567890001",
        num: 1,
        time: "2019-11-11 14:46:31",
        amount: "298.5"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  /**
   * 状态订单查询
   */
  queryState(e) {
    this.setData({
      active : e.currentTarget.dataset.state
    })
  },
  /**
   * 获取,设置数据
   */
  getDetail(e) {
    this.setData({
      currentOrderNo: e.currentTarget.dataset.detail.orderNo
    })
  },
  /**
   * 取货码
   */
  barCode(e) {
    // console.log(e)
    console.log(this.data.currentOrderNo)
    wxbarcode.barcode('barcode', this.data.currentOrderNo, 550, 100);
    this.setData({
      showOneButtonDialog: true
    })
  },
  /**
   * 关闭弹窗..
   */
  closeDialog() {
    this.setData({
      showOneButtonDialog: false
    })
  }
})