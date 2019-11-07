// pages/classify/classify.js
const app = getApp()
const imgHttp = "http://ypw.sunton.cn/Media/Default/ProductPhotos/"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    itemList: [
      { cate: '男装',cateId: 101 },
      { cate: '女装',cateId: 102 },
      { 
        cate: '石墨烯', 
        cateId: 103, 
        goods:[
          {
            imgUrl: `${imgHttp}/190912_36784787c47242b4bf162d0e14ca7e76.jpg`,
            productName: '纯石墨烯养护鼻罩',
            productUrl: '',
            productPrice: '298.5',
            productDiscount: '7.5折',
            productStock: '992'
          },
          {
            imgUrl: `${imgHttp}/190912_36784787c47242b4bf162d0e14ca7e76.jpg`,
            productName: '纯石墨烯养护鼻罩',
            productUrl: '',
            productPrice: '298.5',
            productDiscount: '7.5折',
            productStock: '992'
          },
          {
            imgUrl: `${imgHttp}/190912_36784787c47242b4bf162d0e14ca7e76.jpg`,
            productName: '纯石墨烯养护鼻罩',
            productUrl: '',
            productPrice: '298.5',
            productDiscount: '7.5折',
            productStock: '992'
          },
          {
            imgUrl: `${imgHttp}/190912_36784787c47242b4bf162d0e14ca7e76.jpg`,
            productName: '纯石墨烯养护鼻罩',
            productUrl: '',
            productPrice: '298.5',
            productDiscount: '7.5折',
            productStock: '992'
          },
          {
            imgUrl: `${imgHttp}/190912_36784787c47242b4bf162d0e14ca7e76.jpg`,
            productName: '纯石墨烯养护鼻罩',
            productUrl: '',
            productPrice: '298.5',
            productDiscount: '7.5折',
            productStock: '992'
          },
          {
            imgUrl: `${imgHttp}/190912_36784787c47242b4bf162d0e14ca7e76.jpg`,
            productName: '纯石墨烯养护鼻罩',
            productUrl: '',
            productPrice: '298.5',
            productDiscount: '7.5折',
            productStock: '992'
          },
          {
            imgUrl: `${imgHttp}/190912_36784787c47242b4bf162d0e14ca7e76.jpg`,
            productName: '纯石墨烯养护鼻罩',
            productUrl: '',
            productPrice: '298.5',
            productDiscount: '7.5折',
            productStock: '992'
          },
          {
            imgUrl: `${imgHttp}/190912_36784787c47242b4bf162d0e14ca7e76.jpg`,
            productName: '纯石墨烯养护鼻罩',
            productUrl: '',
            productPrice: '298.5',
            productDiscount: '7.5折',
            productStock: '992'
          },
        ] 
      },
      { cate: '背包1', cateId: 104 },
      { cate: '男装', cateId: 105 },
      { cate: '女装', cateId: 106 },
      { cate: '石墨烯2222222', cateId: 107 },
      { cate: '背包1', cateId: 108 },
      { cate: '男装', cateId: 109 },
      { cate: '女装', cateId: 110 },
      { cate: '石墨烯', cateId: 111 },
      { cate: '背包1', cateId: 112 },
      { cate: '男装', cateId: 113 },
      { cate: '女装', cateId: 114 },
      { cate: '石墨烯', cateId: 115 },
      { cate: '背包1', cateId: 116 },
      { cate: '男装', cateId: 117 },
      { cate: '女装', cateId: 118 },
      { cate: '石墨烯', cateId: 119 },
      { cate: '背包1', cateId: 120 }
    ],
    rtGoods: [{
      imgUrl: `${imgHttp}/190912_36784787c47242b4bf162d0e14ca7e76.jpg`,
      productName: '纯石墨烯养护鼻罩纯石墨烯养护鼻罩纯石墨烯养护鼻罩纯石墨烯养护鼻罩纯石墨烯养护鼻罩',
      productUrl: '',
      productPrice: '298.5',
      productDiscount: '7.5折',
      productStock: '992'
    },],
    //可视化高度（rpx）
    wHeight: app.globalData.wHeight / (app.globalData.wWidth / 750)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    this.setData({
      selectId: this.data.itemList[0].cateId
    })
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
   * 商品展示
   */
  showGoods(e) {
    let item = e.currentTarget.dataset.item;
    this.setData({
      rtGoods: item.goods || [],
      selectId: item.cateId
    })
  }
})