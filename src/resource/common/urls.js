import wepy from 'wepy'

//用户相关
const user_wechat_register = "/wechat/wechat/register-user"
const user_user_update = "/user/user/update"
const user_near_list = '/user/user/near-list'


//文章相关
const article_article_publish = "/article/article/publish"
const article_article_list = "/article/article/list"
const article_article_user_list = "/article/article/user-list"
const article_article_detail = "/article/article/detail"
const article_article_search = "/article/article/search"

module.exports = {
  user_wechat_register: user_wechat_register,
  user_user_update: user_user_update,
  article_article_publish: article_article_publish,
  article_article_list: article_article_list,
  article_article_user_list: article_article_user_list,
  article_article_detail: article_article_detail,
  user_near_list: user_near_list,
  article_article_search: article_article_search,


}
