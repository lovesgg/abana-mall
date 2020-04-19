import wepy from 'wepy';

const env = 'test'; //test,release stage
var IP = '';
if (env === 'test') {
  IP = 'http://127.0.0.1:2196'; //本地环境
} else if (env === 'stage') {
  IP = ''; //stage环境
} else {
  IP = ''; //正式环境
}
const imgs_path = 'https://qcfarm.oss-cn-shenzhen.aliyuncs.com/'; //图片路径-oss

const USER_INFO = 'user_info_storage';  //本地缓存的用户信息
const TOKEN = 'token';//用户请求数据的唯一标识
const OPENID = 'openid'; //openid
const SESSION_KEY = 'session_key'; //session_key
const icon_path = '/resource/icon/'; //icon路径
const user_phone = 'user_phone'; //用户手机号
const cart_badge_index = 1; //公共的购物车导航栏
const TRUE_PHONE = "true_phone"; //真实手机号 只保存最后4位
const set_invite_code = "invite_code"; //邀请人的邀请码，不是个人用户自己的

const request_must = {
  must: 1,//必须登录才能使用
  not_must: 0//不用登录也可以请求
};


module.exports = {
  IP: IP,
  USER_INFO: USER_INFO,
  TOKEN: TOKEN,
  OPENID: OPENID,
  SESSION_KEY: SESSION_KEY,
  imgs_path: imgs_path,
  icon_path: icon_path,
  request_must: request_must,
  user_phone: user_phone,
  cart_badge_index: cart_badge_index,
  TRUE_PHONE: TRUE_PHONE,
  set_invite_code: set_invite_code,
};

