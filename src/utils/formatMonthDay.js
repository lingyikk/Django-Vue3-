import dayjs from "dayjs";
// 日期的格式化-->月日
export function formatMonthDay(date){
    // 将传入的date日期对象进行格式化-->留下
    return dayjs(date).format("M月D日")
}
// 日期的格式化-->..
export function formatMonthPoint(date){
    // 将传入的date日期对象进行格式化-->留下
    return dayjs(date).format("M.D")
}

// 计算日期区间相差的天数
export function getDiffDays(startDate, endDate){
    return dayjs(endDate).diff(startDate, "day")
}

