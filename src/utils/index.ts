// 获取路径信息
// request: a.vue?type=template ===> a.vue
export function getPath(request:string){
  return request.split('?')[0]
}