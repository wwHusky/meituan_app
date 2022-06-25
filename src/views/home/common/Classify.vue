<template>
    <div class="classify">
        <div class="big-classify">
            <div v-for="(i, index) in big_classify" :key="index">
                <svg class="icon" aria-hidden="true">
                    <use :xlink:href="`#${i.icon}`"></use>
                </svg>
                <span>{{ i.name }}</span>
            </div>

        </div>
        <div class="small-classify">

            <div v-for="(i, index) in small_classify" :key="index">
                <svg class="icon" aria-hidden="true">
                    <use :xlink:href="`#${i.icon}`"></use>
                </svg>
                <span>{{ i.name }}</span>
            </div>

        </div>
    </div>
</template>

<script>
import { inject } from 'vue'
export default {
    setup() {
        const big_classify = inject('big_classify')
        const small_classify = inject('small_calssify')
        return { big_classify, small_classify }
    }
}
</script>
<style lang="less" scoped>
.classify {
    padding: 0 8px;
    background: #fff;
    .big-classify {
        display: flex;
        justify-content: space-around;

        div {
            display: flex;
            flex-flow: column;
            align-items: center;
            margin-bottom: 5px;

            span {
                font-size: 12px;
            }

            .icon {
                width: 43px;
                height: 40px;
            }
        }

    }
}

.small-classify {

    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

    div {
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: space-around;
        width: 20%;
        margin-bottom: 5px;

        .icon {
            width: 46px;
            height: 33px;
        }

        span {
            font-size: 10px;
        }
    }
}
</style>