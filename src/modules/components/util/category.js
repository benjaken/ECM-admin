// 子页面结构
let category = [{
  title: '111',
  id: '111'
}, {
  title: '222',
  id: '222'
}]

// import flatten from 'lodash/flatten'

// 获取目录
export function getCategory() {
  return JSON.parse(JSON.stringify(category))
}

// 获取子页面模块地址
// export function getModules() {
//   return flatten(getCategory().map(item => {
//     return item.links.map(link => item.id + '/' + link.id)
//   }))
// }
