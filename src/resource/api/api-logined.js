import wepy from 'wepy';
import common from '../common/common';
import commonMetods from '../common/methods';
import paths from '../common/paths';
import urls from '../common/urls';

/**
 * 登录时需要用的请求方法
 * @param url
 * @param params
 * @param succ
 * @param fail
 */
const post = (url, params, succ, fail) => {
  commonMetods.getStorage(common.TOKEN, function(token) {
    if (token.nick_name == "") {
      //跳转到用户授权页面
      //return false
    }
    if (token.phone == "") {
      //跳转到手机授权页面
      //return false
    }
    wepy.request({
      url: common.IP + url,
      data: params,
      header: {
        'content-type': 'application/json',
        'token': token.token,
        'open_id': token.open_id,
        'avatar': token.avatar,
        'nick_name': "",
      },
      method: 'post',
      success(res) {
        if (res.statusCode === 200) {
          succ(res.data);
        } else {
          fail(res);
        }
      },
      fail(res) {
        fail(res);
      }
    });
  }, function() {
    //本地无token

  });
};

const get = (url, params, succ, fail) => {
  commonMetods.getStorage(common.TOKEN, function(token) {
    wepy.request({
      url: common.IP + url,
      data: params,
      header: {
        'content-type': 'application/json',
        'token': token.token,
        'open_id': token.open_id,
        'avatar': token.avatar,
        'nick_name': "",
      },
      method: 'get',
      success(res) {
        if (res.statusCode === 200) {
          succ(res.data);
        } else {
          fail(res);
        }
      },
      fail(res) {
        fail(res);
      }
    });
  }, function() {
    //本地无token
  });
};

module.exports = {
  post: post,
  get: get
};
