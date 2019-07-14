import Mock from 'mockjs'
import data from './data.json'

Mock.mock('http://www.liuchang.com/getList',{data:data.list})

Mock.mock('http://www.liuyanda.com/getUser',{
    "name|2":"liuyanda",
    "age|0-99":20,

})
//正则
Mock.mock('http://www.liuchang.com/regExp',{
    "regexp1":/[a-z][A-Z][0-9]/,
    'regexp2':/\d{5,10}/
})
//占位符
Mock.mock('http://www.liuchang.com/list',{
    "info|10-20":[
        {
            "index|+1":1,
            "name": '@first @last',
            "id":'@integer(1000,9999)',
            "date":'@datetime',
            "img":'@image',
            "text":'@sentence(6,20)'
        }
    ]
})

let Random = Mock.Random;
let productData = req =>{
    let productList=[];//存放农机信息的数组
    for(let i=0; i<100; i++){
        let product = {
            name:Random.ctitle(5,20),
            img:Random.dataImage('125x125','农机'),
            price:Random.integer(1000,9999),
            owner:Random.cname()
        }
        productList.push(product);
    }
    return productList;
}
Mock.mock('http://www.liuchang.com/getVarietyItem',productData);  