import request from '@/utils/request'

export default {

    /**
     * 分页查询评论
     * @param {*} page 
     * @param {*} limit 
     * @param {*} courseId 
     * @returns 
     */
    getPageList(page, limit, courseId) {
        return request({
            url: `/eduservice/comment/${page}/${limit}`,
            method: 'get',
            params: { courseId }
        })
    },

    /**
     * 添加评论
     * @param {*} comment 
     * @returns 
     */
    addComment(comment) {
        return request({
            url: `/eduservice/comment/auth/save`,
            method: 'post',
            data: comment
        })
    }
}