//logs.js
var util = require('../../utils/util.js')
Page({
  data: {
    img: {
      src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1502452923508&di=14e2780032b1413767dabb9cb7db9f6b&imgtype=0&src=http%3A%2F%2Fphotos.tuchong.com%2F63976%2Ff%2F4014954.jpg'
    }
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(function (log) {
        return util.formatTime(new Date(log))
      })
    })
  }
})