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
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
        'token': token.token,
        'open_id': token.open_id,
      },
      method: 'post',
      success(res) {
        if (res.statusCode === 200) {
          if (res.data.data === 10003) {
            //远程token过期 //获取open_id放入缓存即可
          } else {
            succ(res.data);
          }
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
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
        'token': token.token,
        'open_id': token.open_id,
      },
      method: 'get',
      success(res) {
        if (res.statusCode === 200) {
          if (res.data.data === 10003) {
            //远程token过期 //获取open_id放入缓存即可
          } else {
            succ(res.data);
          }
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
