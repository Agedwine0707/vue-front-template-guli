import request from '@/utils/request'
export default {

    /**
     * 提交登录
     * @param {*} userInfo 
     * @returns 
     */
    submitLogin(userInfo) {
        return request({
            url: `/ucentservice/member/login`,
            method: 'post',
            data: userInfo
        })
    },
    
    /**
     * 根据token获取用户信息
     * @returns 
     */
    getLoginInfo() {
        return request({
            url: `/ucentservice/member/auth/getLoginInfo`,
            method: 'get',
            // headers: {'token': cookie.get('guli_token')}
        })
        //headers: {'token': cookie.get('guli_token')} 
    }
}