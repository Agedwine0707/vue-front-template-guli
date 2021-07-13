import request from '@/utils/request'

export default {

    /**
     * 获取视频播放令牌
     * @param {*} videoId 
     * @returns 
     */
    getPlayAuth(videoId) {
        return request({
            url: `/vod/video/get-play-auth/${videoId}`,
            method: 'get'
        })
    }
}