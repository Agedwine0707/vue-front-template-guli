import request from '@/utils/request'
export default {

    /**
     * 根据条件和分页参数查询课程列表
     * @param {*} page 
     * @param {*} limit 
     * @param {*} searchObj 
     * @returns 
     */
    getPageList(page, limit, searchObj) {
        return request({
            url: `/eduservice/front/course/${page}/${limit}`,
            method: 'post',
            data: searchObj
        })
    },

    /**
     * 获取所有的小节
     * @returns 
     */
    getNestedTreeList2() {
        return request({
            url: `/eduservice/edusubject/getAllSubject`,
            method: 'get'
        })
    },

    /**
     * 根据课程id获取课程详情页的信息
     * @param {*} courseId 
     * @returns 
     */
    getMinuteCourseInfo(courseId) {
        return request({
            url: `/eduservice/front/course/${courseId}`,
            method: 'get'
        })
    }

}