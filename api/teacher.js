import request from '@/utils/request'
export default {

    /**
     * 分页查询讲师数据
     * @param {*} page 
     * @param {*} limit 
     * @returns 
     */
    getPageList(page, limit) {
        return request({
            url: `/eduservice/front/teacher/${page}/${limit}`,
            method: 'get'
        })
    },

    /**
     * 获取讲师信息和讲师课程列表信息
     * @param {*} teacherId 
     * @returns 
     */
    getTeacherInfoCourseList(teacherId) {
        return request({
            url: `/eduservice/front/teacher/${teacherId}`,
            method: 'get'
        })
    },


}