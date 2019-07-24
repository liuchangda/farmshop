const MOCKURL = 'http://www.liuchang.com/'; //模拟url
const SERVICEURL = 'http://localhost:3000/'; //真实url

const URL = {
    getVarietyItem: MOCKURL +'getVarietyItem',
    registUser:SERVICEURL + 'user/registUser',
    loginUser:SERVICEURL + 'user/loginUser',
    getTypes:SERVICEURL + 'type/getTypes',
    getProductByType:SERVICEURL + 'product/getProductByType'
};

export default URL;