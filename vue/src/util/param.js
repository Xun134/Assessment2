import moment from 'moment'
import { formatWithAllSeperatorNew } from "@/util/date";
/**
 * x轴居中日期转化
 * @param tradeDate
 * @param hours
 */
export const getHoursEchartsLine = (tradeDate, hours)=>{
    let result = '';
    const hour = moment(`${tradeDate} ${hours}`).hours()
    if([0,1,2,3].includes(hour)){
        const date = moment(tradeDate).add(1, 'd').format('YYYY/MM/DD');
        result = moment(`${date} ${hours}`).add(30, 'minutes').format('YYYY/MM/DD HH:mm:ss');
    } else if(hour == 9){
        result = moment(`${tradeDate} ${hours}`).format('YYYY/MM/DD HH:mm:ss');
    } else {
        result = moment(`${tradeDate} ${hours}`).add(30, 'minutes').format('YYYY/MM/DD HH:mm:ss')
    }
    return result;
}
/**
 * 计算最大值
 * @param arr
 */
export const calMax = (arr)=>{
    let max = 0;
    arr.forEach(item => {
        let el = item.value[1]
        if(el && max<Number(el)){
            max = Number(el)
        }
    })
    return max
}
/**
 * 计算最小值
 * @param arr
 */
export const calMin = (arr)=>{
    let min = 0;
    arr.forEach(item => {
        let el = item.value[1]
        if(el && min>Number(el)){
            min = Number(el)
        }
    })
    return min
}