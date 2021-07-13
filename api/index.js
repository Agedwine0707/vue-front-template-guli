import request from '@/utils/request'
export default {
  
  /**
   * 
   * @returns 查询前8条热门课程，前4个名师
   */
  getList() {
    return request({
      url: `eduservice/front/index`,
      method: 'get'
    })
  }
}