import wepy from 'wepy'
import common from './common'
import urls from './urls'

/**
 * 设置缓存
 * @param key
 * @param data
 */
function setStorage(key, data) {
  wepy.setStorage({
    key: key,
    data: data
  })
}

/**
 * 获取缓存
 * @param key
 * @param succ
 * @param fail
 */
function getStorage(key, succ, fail) {
  wepy.getStorage({
    key: key,
    success(res) {
      //有缓存
      succ(res.data)
    },
    fail() {
      //键名不存在或者内容不存在
      fail("缓存不存在")
    }
  })
}

function isVip() {
  return new Promise(function (resolve) {
    getStorage(common.USER_INFO, function (e) {
      if (e.is_vip != undefined && e.is_vip === true) {
        resolve(true)
        console.log('@@')
      } else {
        console.log('$$')
        resolve(false)
      }
    }, function (e) {
      console.log('**')
      resolve(false)
    })
  })
}

/**
 *登录,获取openid
 */
function wxLogin(func, fail) {
  wepy.login({
    success(res) {
      if (res.code) {
        // 发起网络请求
        wepy.request({
          url: common.IP + urls.user_wechat_register,
          data: {
            code: res.code,
          },
          method: 'post',
          success(re) {
            func(re.data)
          },
        })
      } else {
        console.log('请求失败' + res.errMsg)
        fail("授权失败")
      }
    }
  })
}


/**
 *
 * 根据openid从数据库判断是否是新用户
 */
function checkIfNewUser(openid, func) {
  wepy.request({
    url: common.IP + urls.if_new_user,
    data: {
      openid: openid
    },
    method: 'post',
    success(re) {
      func(re.data)
    },
  })
}

/**
 *
 * 请求失败的函数
 */
function requestError(error) {
  wepy.showToast({
    title: "请求数据有误",
    image: common.icon_path+"toast_icon.png",
    duration: 3000,
    mask: true,
  })
}

/**
 *登录,获取openid
 */
function getOpenid(func) {
  wepy.login({
    success(res) {
      if (res.code) {
        // 发起网络请求
        wepy.request({
          url: common.IP + urls.get_user_open_id,
          data: {
            code: res.code
          },
          header: {
            'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
          },
          method: 'post',
          success(re) {
            func(re.data)
          },
        })
      } else {
        console.log('登录失败！' + res.errMsg)
      }
    }
  })
}

//弹框
function showToast(title) {
  wepy.showToast({
    title: title,
    image: common.icon_path + 'toast_icon.png',
    duration: 3000
  });
}

module.exports = {
  setStorage: setStorage,
  getStorage: getStorage,
  isVip: isVip,
  wxLogin: wxLogin,
  checkIfNewUser: checkIfNewUser,
  requestError: requestError,
  getOpenid: getOpenid,
  showToast: showToast,
}











