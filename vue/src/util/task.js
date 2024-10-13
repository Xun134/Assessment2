/**
 * 任务工具类
 */

/**
 * @param type 任务类型
 */
 export function formatType(type) {
    // table
    let result
    switch (type) {
        case 0:
            result = '结束到开始'
            break
        case 1:
            result = '开始到开始'
            break
        case 2:
            result = '结束到结束'
            break
        case 3:
            result = '开始到结束'
            break
        default:
            result = '结束到开始'
            break
    }
    return result
}

/**
 * @param type 任务类型
 */
export function formatTreeData(source) {
    return source.filter((father) => {
        //返回树形数据
        let branchArr = source.filter(child => {
            return father.id == child.parent; // 返回每一项的子级数组
        });
        if (branchArr.length > 0) father.children = branchArr; //如果存在子级，则给父级添加一个children属性，并赋值
        if (!father.parent) return father; //返回第一层
    });
}
