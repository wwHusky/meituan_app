<template>

    <footer>
        <div class="tabbar">
            <div class="tabbar-itme" @click="clickitme('home')">
                <van-icon name="wap-home-o" />
                <div>首页</div>
            </div>
            <div class="tabbar-itme" @click="clickitme('cart')">
                <van-icon name="cart-o" />
                <div>购物车</div>
            </div>
            <div class="tabbar-itme" @click="clickitme('order')">
                <van-icon name="records" />
                <div>订单</div>
            </div>
            <div class="tabbar-itme" @click="clickitme('me')">
                <van-icon name="user-circle-o" />
                <div>我的</div>
            </div>
        </div>
    </footer>
</template>
<script>
export default {
    data() {
        return {
            aa: 'ccc',
            colors: 'colors'
        }
    },
    methods: {
        clickitme(path) {
            this.$router.push({ name: path })
            this.aa = path
        }
    }
}
</script>
<style lang="less" scoped>
.tabbar {
    background: #fff;
    height: 49px;
    display: flex;
    font-size: 28px;
    justify-content: space-around;
    position: fixed;
    left: 0px;
    right: 0px;
    bottom: 0;

    .tabbar-itme {
        margin-top: 4px;
        display: flex;
        flex-direction: column;
        align-items: center;

        div {
            font-size: 12px;
            line-height: 1.2;
        }

        i {
            font-size: 22px !important;
        }
    }

}

.colors {
    color: red;
}

.aa {}
</style>