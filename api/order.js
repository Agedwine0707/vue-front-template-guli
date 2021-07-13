import request from '@/utils/request'

export default {

    /**
     * 创建订单
     * @param {*} courseId 
     * @returns 
     */
    createOrder(courseId) {
        return request({
            url: '/order/pay/createOrder/' + courseId,
            method: 'post'
        })
    },

    /**
     * 根据订单号获取订单
     * @param {*} orderNo 
     * @returns 
     */
    getById(orderNo) {
        return request({
            url: '/order/pay/getOrder/' + orderNo,
            method: 'get'
        })
    },

    /**
     * 生成微信支付二维码
     * @param {*} orderNo 
     * @returns 
     */
    createNative(orderNo) {
        return request({
            url: '/order/pay_log/createNative/' + orderNo,
            method: 'get'
        })
    },

    /**
     * 根据id获取订单支付状态
     * @param {*} orderNo 
     * @returns 
     */
    queryPayStatus(orderNo) {
        return request({
            url: '/order/pay_log/queryPayStatus/' + orderNo,
            method: 'get'
        })
    }

}