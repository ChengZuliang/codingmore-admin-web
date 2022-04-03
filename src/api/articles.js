import request from '../utils/request'

// 查询文章分页列表的方法
export function getArticlePagedList(params) {
  return request({
    url: `/posts/queryPageable?_=${Math.random()}`,
    method: 'get',
    params
  })
}

// 根据id查询文章详情的方法
export function getArticleById(params) {
  return request({
    url: `/posts/getById?_=${Math.random()}`,
    method: 'get',
    params
  })
}

// 删除文章方法
export function deleteArticle(params) {
  return request({
    url: `/posts/delete?_=${Math.random()}`,
    method: 'get',
    params
  })
}

// 添加文章保存方法
export function createArticle(data) {
  return request({
    url: '/posts/insert',
    method: 'post',
    data
  })
}

// 更新文章保存方法
export function updateArticle(data) {
  return request({
    url: '/posts/update',
    method: 'post',
    data
  })
}

// 查询文章标签方法
export function getTagList(params) {
  return request({
    url: `/postTag/queryPageable?_=${Math.random()}`,
    method: 'get',
    params
  })
}

// 对接后台上传接口的方法
export function mdEditorUploadImage(data) {
  return request({
    url: '/ossController/upload',
    method: 'post',
    data,
    headers: { 'Content-Type': 'multipart/form-data' }
  })
}

// 绑定文章到栏目上
export function bindArticleToColumns(data) {
  return request({
    url: '/posts/insertPostTermTaxonomy',
    method: 'post',
    data
  })
}

export const uploadUrl = process.env.VUE_APP_BASE_API + '/ossController/upload'
