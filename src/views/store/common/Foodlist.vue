<template>
    <div class="food_list" v-if="index == 0">
        <van-tree-select height="55vw" :items="items" v-model:main-active-index="active" @click-nav="navClick">
            <template #content>
                <div v-for="(item, index) in subdata" :key="index">
                    <Foodadd :item="item" :index="index" :showAdd="true" :addClick="addClick"></Foodadd>
                </div>
            </template>
        </van-tree-select>
    </div>
    <div v-else>{{ foodData.content }}</div>
</template>
<script>
import Foodadd from '../../../components/common/Foodadd/Foodadd.vue'
import { reactive, toRefs } from 'vue';
export default {
    props: ['index', 'foodData'],
    setup(props) {
        let data = reactive({
            active: 0,
            items: [],
            subdata: []
        })
        //初始化
        const init = () => {
            let newlist = []
            props.foodData?.items?.map((i, index) => {
                newlist.push({ text: i.text });
                if (index == data.active) {
                    data.subdata = i.children
                }
            })
            data.items = newlist
        }
        init()
        // 点击左侧的导航
        const navClick = (i) => {
            data.active = i;
            init();
            console.log(data.active)
            console.log(data.subdata)
        };
        //切换步进器
        const addClick = function (i) {
            data.subdata.forEach((item) => {
                if (item.id === i) {
                    item.add = false;
                    item.num += 1;
                }
            })
        }
        return {
            ...toRefs(data),
            navClick,
            addClick
        }
    },
    components: {
        Foodadd
    }
}
</script>