import request from '@/utils/request'

export default {

    /**
     * 根据输入的手机号发送验证码
     * @param {*} mobile 
     * @returns 
     */
    getMobileCode(mobile) {
        return request({
            url: `/sms/send/${mobile}`,
            method: 'get'
        })
    },

    /**
     * 提交注册
     * @param {*} formItem 
     * @returns 
     */
    submitRegister(formItem) {
        return request({
            url: `/ucentservice/member/register`,
            method: 'post',
            data: formItem
        })
    }
}