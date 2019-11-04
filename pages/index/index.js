//index.js
//获取应用实例
const app = getApp()
const iconHttp = "http://abtl.mooshine.cn/Media/Abtl/AdvertItemPhotos/"
const imgHttp ="http://ypw.sunton.cn/Media/Default/ProductPhotos/"
Page({
  data: {
    haveTitle: true,//商品列表栏标题
    advert: [
      '../../image/swiper1.jpg', 
      '../../image/swiper2.jpg', 
      '../../image/swiper3.jpg'
    ],
    menus: [
      {
        title:'新品促销', 
        url: '', 
        imgUrl: `${iconHttp}/181116_210846c008174d9ebc0ba2e760cfca52.png`
      },
      {
        title: '促销商品',
        url: '',
        imgUrl: `${iconHttp}/181116_ed61ac66cadc4eea80e33f488513b4aa.png` 
      },
      {
        title: '排行榜',
        url: '',
        imgUrl: `${iconHttp}/181116_0604e5234b734affb8b70079312b7f75.png`
      },
      {
        title: '已购商品',
        url: '',
        imgUrl: `${iconHttp}/181116_0be312e3a47f4c4095e90b0c958189ce.png`
      }
    ],
    items: {
      news: {
        title: '新品首发',
        moreUrl: '',
        products: [
          {
            img: `${imgHttp}/190912_36784787c47242b4bf162d0e14ca7e76.jpg`,
            productName: '纯石墨烯养护鼻罩',
            productUrl: '',
            productPrice: '298.5',
            productDiscount: '7.5折',
            productStock: '992'
          },
          {
            img: `${imgHttp}/190912_36784787c47242b4bf162d0e14ca7e76.jpg`,
            productName: '纯石墨烯养护鼻罩',
            productUrl: '',
            productPrice: '298.5',
            productDiscount: '7.5折',
            productStock: '992'
          },
          {
            img: `${imgHttp}/190912_36784787c47242b4bf162d0e14ca7e76.jpg`,
            productName: '纯石墨烯养护鼻罩',
            productUrl: '',
            productPrice: '298.5',
            productDiscount: '7.5折',
            productStock: '992'
          }
        ]
      },
      promotion: {
        title: '促销商品',
        moreUrl: '',
        products: [
          {
            img: `${imgHttp}/190912_36784787c47242b4bf162d0e14ca7e76.jpg`,
            productName: '纯石墨烯养护鼻罩',
            productUrl: '',
            productPrice: '298.5',
            productDiscount: '7.5折',
            productStock: '992'
          },
          {
            img: `${imgHttp}/190912_36784787c47242b4bf162d0e14ca7e76.jpg`,
            productName: '纯石墨烯养护鼻罩',
            productUrl: '',
            productPrice: '298.5',
            productDiscount: '7.5折',
            productStock: '992'
          },
          {
            img: `${imgHttp}/190912_36784787c47242b4bf162d0e14ca7e76.jpg`,
            productName: '纯石墨烯养护鼻罩',
            productUrl: '',
            productPrice: '298.5',
            productDiscount: '7.5折',
            productStock: '992'
          }
        ]
      },
      discount: {
        title: '最新优惠',
        moreUrl: '',
        products: [
          {
            img: `${imgHttp}/190912_36784787c47242b4bf162d0e14ca7e76.jpg`,
            productName: '纯石墨烯养护鼻罩',
            productUrl: '',
            productPrice: '298.5',
            productDiscount: '7.5折',
            productStock: '992'
          },
          {
            img: `${imgHttp}/190912_36784787c47242b4bf162d0e14ca7e76.jpg`,
            productName: '纯石墨烯养护鼻罩',
            productUrl: '',
            productPrice: '298.5',
            productDiscount: '7.5折',
            productStock: '992'
          },
          {
            img: `${imgHttp}/190912_36784787c47242b4bf162d0e14ca7e76.jpg`,
            productName: '纯石墨烯养护鼻罩',
            productUrl: '',
            productPrice: '298.5',
            productDiscount: '7.5折',
            productStock: '992'
          }
        ]
      }
    }
  },
  onLoad(options) {
    //获取商品列表
    app.getProductList()
  }
  
})
