<template>
    <Headt class="hed">
        <template v-slot:left>
            <div class="direction">
                <van-icon name="arrow-left" />
            </div>
        </template>
        <template v-slot:center>
            <h2>店铺</h2>
        </template>
    </Headt>
    <div class="content">
        <div class="img"></div>
        <div class="foodClassify">
            <div class="name">
                <span>{{ title }}</span>
                <img :src="img" alt="">
            </div>
        </div>
        <div class="classify">
            <van-tabs v-model:active="activeName">
                <van-tab :title="value.name" v-for="(value,index) in storeData" :key="index">
                    <Foodlist :index="index" :foodData="value.data"></Foodlist>
                </van-tab>
            </van-tabs>
        </div>
    </div>
</template>

<script>
import Headt from '../../components/common/Headtitle/headt.vue'
import Foodlist from './common/Foodlist.vue'
import { reactive, toRefs } from 'vue'
export default {
    setup() {
        let data = reactive({
            title: "鱼拿酸菜鱼",
            img: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
            storeData: [
                {
                    name: "点菜",
                    data: {
                        content: "点菜",
                        items: [
                            {
                                text: "热销套餐",
                                children: [
                                    {
                                        pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
                                        title: "招牌酸菜鱼",
                                        num: 0,
                                        price: 25.0,
                                        id: 0,
                                        add: true,
                                    },
                                    {
                                        pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
                                        title: "藤椒酸菜鱼",
                                        num: 0,
                                        price: 25.0,
                                        id: 1,
                                        add: true,
                                    },
                                ],
                            },
                            {
                                text: "澳洲肥牛",
                                children: [
                                    {
                                        pic: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbkimg.cdn.bcebos.com%2Fpic%2F8694a4c27d1ed21b0ef4f3137f24cac451da80cb91b8&refer=http%3A%2F%2Fbkimg.cdn.bcebos.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1645407747&t=ea2c9f772ba0df3a2d1b00b962875460",
                                        title: "酸汤肥牛",
                                        num: 0,
                                        price: 25.0,
                                        id: 3,
                                        add: true,
                                    },
                                    {
                                        pic: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbkimg.cdn.bcebos.com%2Fpic%2F8694a4c27d1ed21b0ef4f3137f24cac451da80cb91b8&refer=http%3A%2F%2Fbkimg.cdn.bcebos.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1645407747&t=ea2c9f772ba0df3a2d1b00b962875460",
                                        title: "香辣肥牛",
                                        num: 0,
                                        price: 25.0,
                                        id: 4,
                                        add: true,
                                    },
                                ],
                            },
                            {
                                text: "超级折扣",
                                children: [
                                    {
                                        pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
                                        title: "无骨酸菜鱼+肥牛双拼",
                                        num: 0,
                                        price: 25.0,
                                        id: 5,
                                        add: true,
                                    },
                                    {
                                        pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
                                        title: "香辣水煮鱼+肥牛双拼",
                                        num: 0,
                                        price: 25.0,
                                        id: 6,
                                        add: true,
                                    },
                                ],
                            },
                        ],
                    },
                },
                { name: "评价", data: { content: "评价" } },
                { name: "商家", data: { content: "商家" } },
            ],
        });
        return {
            ...toRefs(data)
        };
    },

    components: {
        Headt,
        Foodlist
    }
}
</script>
<style lang="less" scoped>
.hed {
    border-bottom: solid 1px rgba(200, 200, 200, 0.25);
    ;
    margin: 0;
}

.direction {
    font-size: 25px;
    font-weight: 700;
}

.content {
    background: #fff;

    .foodClassify {
        height: 100%;
        padding-top: -13px;
        margin-top: -18px;
        border-radius: 14px;

        .name {
            display: flex;
            margin: 0 20px;
            justify-content: space-between;
            align-items: center;
            font-size: 25px;
            font-weight: 700;

            img {
                width: 100px;
                height: 100px;
                border-radius: 12px;
                margin-top: -13px;
            }
        }
    }
    .classify{
        margin-top: 16px;
    }
    .img {
        width: 100%;
        height: 150px;
        background: no-repeat url(./img/yuna.jpg) center/cover;
    }


}
</style>