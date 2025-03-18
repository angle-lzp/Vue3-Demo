<template>
    <div>
        {{ left }}--{{ myTitle }}--{{ right }}--{{ isShow }} -- {{ number }}
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    },
    //1.如果出现了多个props属性，后面的会将前面的进行覆盖(是彻底覆盖)
    //2.由于 Vue 会将后面的 props 选项覆盖前面的（对象方式会覆盖数组方式中相同名称的声明），
    // 最终生效的 props 配置就是对象形式里面的定义。如果有重复的属性（比如 "myTitle"，"left"，"right"），
    // 那么后面的定义将完全替换前面的声明，而 "isShow" 和 "number" 则不会出现在最终的 props 配置中。
    props: ["myTitle", "left", "right", "isShow", "number"],//"isShow", "number"这两个属性不会生效
    props: {
        myTitle: {
            type: String,
            default: ""
        },
        left: {
            type: [String, Number]
        },
        right: {
            //是否必须
            required: true,
            validator(value) {
                //为真的时候才会返回value的值
                return ['success', 'warning', 'danger'].includes(value)
            }
        }
    }
}
</script>