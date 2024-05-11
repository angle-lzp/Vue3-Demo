<template>
    <div>
        {{ left }}--{{ myTitle }}--{{ right }}--{{ isShow }}
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    },
    props: ["myTitle", "left", "right", "isShow", "number"],
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