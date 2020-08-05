// pages/splash/splash.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],//加载的数据列表
    imgs:[],//随机的图片
  },
  loadMore:function(){
    wx.cloud.callFunction({
      name: "movielist1906a",//云函数名
      data:{start:this.data.list.length} //参数
    })
    .then(res=>{
      var rows = JSON.parse(res.result);
      rows = rows.subjects[Math.ceil(Math.random()*9)]
      console.log(rows)
      this.setData({
        imgs:rows
      })    
    })
    .catch(err=>{
      console.log(err)
    })
  },
  start:function(){
    var url = '/pages/home/home'
    console.log(url)
    wx.switchTab({
      url: url,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadMore()
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

  }
})