<template>
    <div class="mentav">
        <van-tabs v-model:active="active" class="menu" color="red">
            <van-tab :title="title.tab" v-for="(title, index) in menudata" :key="index">
                <div class="Dishname" @click="toStore" v-for="(value, index) in title.data" :key="index">
                    <div>
                        <img :src="value.pic" alt="">
                    </div>
                    <div>
                        <h3>{{ value.title }}</h3>
                        <div>
                            <span>{{ value.sales }}</span>
                        </div>
                        <div>
                            <i> {{ value.price }}</i>
                        </div>
                        <div>
                            <span v-for="(i, index) in value.label" :key="index">{{ i }}</span>
                        </div>


                    </div>
                </div>
            </van-tab>
        </van-tabs>
    </div>
</template>
<script>
import {useRouter } from 'vue-router'
export default {
    props: {
        menudata: {
            Type: Object,
            default: {}
        }
    },
    setup(){
        const router = useRouter()
        const toStore = ()=>{
            router.push('/store')
        }
        return {
            toStore
        }
    }
}
</script>
<style lang="less" scoped>
.menu {
    padding: 10px 16px;
    border-radius: 16px;
    font-size: 16px;

    .van-tabs__wrap {
        border-radius: 6px;

        span {
            font-size: 18px !important;
        }
    }
}

.Dishname {
    display: flex;
    height: 3.2rem;
    padding: 0.26667rem 0;
    background: #fff;
    margin: 12px 0;
    border-radius: 12px;

    &>div {
        flex: 1;
        margin-left: 12px;

        img {
            width: 100%;
            height: 100%;
            border-radius: 12px;
        }
    }

    &>div:last-child {
        display: flex;
        flex-flow: column;
        /* justify-content: center; */
        justify-items: center;
        justify-content: space-around;
    }
}
</style>