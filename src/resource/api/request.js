import wepy from 'wepy'
import common from '../common/common'


const post = (url, params, succ, fail) => {
  params.must = common.request_must.not_must
  wepy.request({
    url: url,
    data: params,
    header: {
      'content-type': 'application/json',
    },
    method: 'post',
    success(res) {
      if (res.statusCode == 200) {
        succ(res.data)
      } else {
        fail(res)
      }
    },
    fail(res) {
      fail(res)
    }

  })
}

const get = (url, params, succ, fail) => {
  wepy.request({
    url: url,
    data: params,
    header: {
      'content-type': 'application/json',
    },
    method: 'get',
    success(res) {
      if (res.statusCode == 200) {
        succ(res.data)
      } else {
        fail(res)
      }
    },
    fail(res) {
      fail(res)
    }

  })
}

module.exports = {
  post: post,
  get: get
}
