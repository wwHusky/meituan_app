<template>
    <div class="heads" scoped>
        <div class="left">
            <slot name="left"></slot>
        </div>
        <div class="center">
            <slot name="center"></slot>
        </div>
        <div class="rigth">
            <slot name="rigth"></slot>
        </div>
    </div>
</template>
<style lang="less">
.heads {
    height: 49px;
    display: flex;
    line-height: 49px;
    margin: 0 5px;
    text-align: center;
    .left {
        width: 44px;

    }
    .center{
        flex: 1;
    }
    .rigth{
        width: 44px;
    }
}
</style>