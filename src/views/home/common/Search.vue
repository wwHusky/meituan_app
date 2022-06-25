<template>
    <div class="search">
        <div class="search-box">
            <van-icon name="search" />
            <div>
                <input type="text" name="" id="" placeholder="请输入">
            </div>
            <button> 搜索</button>
        </div>
    </div>
</template>

<style lang="less" scoped>
.search {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 9;
    height: 55px;
    background: #fff;
    margin-top: -10px;
    border-radius: 20px 20px 0 0;
    padding-top: 12px;

    .search-box {
        width: 95%;
        height: 30px;
        overflow: hidden;
        background: #fff;
        margin: auto;
        display: flex;
        text-align: center;
        line-height: 30px;
        border: solid #f5c023;
        border-radius: 15px;
        position: relative;

        div {
            flex: 1;
            flex: 1;
            padding: 0 5px;
            line-height: 2;

            input {
                height: 83%;
                width: 100%;
            }
        }

        button {
            border-radius: 13px;
            padding-left: 5pxx;
            margin-right: 5px;
            width: 53px;
            background: #f5c023;
            right: -7px;
            top: -1px;
            height: 105%;
            border: none;
            font-weight: 700;
        }

        i {
            line-height: 30px;
            margin-left: 5px;
        }
    }
}
</style>