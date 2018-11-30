<template>
    <div class="headerTap">
        <router-link tag="div" to="/musiclist">
            <span>歌单</span>
        </router-link>
        <router-link tag="div" to="/musicsort">
            <span>排行榜</span>
        </router-link>
        <router-link tag="div" to="/musicsearch">
            <span>搜索</span>
        </router-link>
    </div>
</template>

<script>
export default {

}
</script>
 
 <style lang="less" scoped>
    .headerTap{
        width: 100%;
        height: 4rem;
        line-height: 4rem;
        font-size: 1.6rem;
        font-weight: 300;
        color: #333;
        display: flex;
        justify-content: space-around;
        position: relative;
        &::after{
            width: 90%;
            content: '';
            position: absolute;
            margin: 0 auto;
            height: 1px;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: #f2f2f2
        }
    }
    .router-link-active{
        font-weight: 600;
        color: #ea2000;
        position: relative;
        top: -2px;
    }
 </style>
