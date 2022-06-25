<template>

    <Headr>
        <template v-slot:left>
            <span>外卖</span>
        </template>
        <template v-slot:center>
            <div class="fleft">
                 <van-icon name="location-o" />
                 小滴课堂120
            </div>
        </template>
        <template v-slot:rigth class="a">
            <div class="frig">
                <van-icon name="arrow" />
            </div>
        </template>
    </Headr>
</template>
<script>
import Headr from '../Headtitle/headt.vue'
export default {
    components: {
        Headr
    }
}
</script>
<style lang="less" scoped>
span{
    font-size: 22px;
    font-weight: 700;
}
    .fleft{
        text-align: right;
        padding-right: 5px;
        font-weight: 700;
    }
    .frig{
        text-align: left;
        font-weight: 700;
    }
</style>