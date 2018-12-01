<template>
    <div class="musicUnitWrapper" ref="musicUnitWrapper">
        <div>
            <!-- 所有列表 -->
            <div class="musicUnit">
                <!-- 单个 -->
                <div class="mUnit" v-for="item in musicList" :key="item.id">
                    <div class="mUnitImg" @click="musicTap(item.id)">
                        <img class="mImg" :src="item.coverImgUrl" :alt="item.userId">
                        <span class="mAuthor" v-text="item.creator.nickname"></span>
                    </div>
                    <span class="mIntr" v-text="item.name"></span>
                </div>
            </div>
            <!-- 点击加载更多 -->
            <div class="moreUnit" v-if="musicList.length">
                <span @click="moreUnit" v-text="More?'小主,还有哟':'小主,没有啦'"></span>
            </div>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    props:{
        musicList:{
            type:Array,
            default:[]
        },
        More:Boolean
    },
    mounted(){
        this.$nextTick(()=>{
            this.scroll=new BScroll(this.$refs.musicUnitWrapper,{
                click:true,
                pullUpLoad: true
            })
            console.log(this.scroll)
            // 上拉加载更多
            this.scroll.on('pullingUp',this.moreUnit)
        })
    },
    methods:{
        // 上拉加载更多
        moreUnit(){
            if(this.More){
                this.$emit('moreUnit')
            }
        },
        musicTap(m_id){
            this.$emit('MusicUnitList',1,m_id)
        }
    },
    watch:{
        musicList(){
            this.scroll.finishPullUp()
            this.scroll.refresh()
        }
    }

}
</script>

<style lang="less" scoped>
.musicUnitWrapper{
    // better-scroll必须加上定位
    overflow: hidden;
    position: absolute;
    top: 23.3rem !important;
    left: 0;
    right: 0;
    bottom: 0;
    .musicUnit{
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        .mUnit{
            width: 45%;
            border-radius: 6px;
            margin-bottom: 2.5rem;
            .mUnitImg{
                width: 100%;
                height: 45vw;
                border-radius: 6px;
                position: relative;
                .mImg{
                    width: 100%;
                    height: 100%;
                }
                .mAuthor{
                    position: absolute;
                    left: 6px;
                    bottom: 3px;
                    width: 90%;
                    color: #fff;
                    font-size: 1.2rem;
                    line-height: 1.2rem;
                    letter-spacing: 1px;
                }
            }
            .mIntr{
                width: 100%;
                color: #333;
                font-size: 1.3rem;
                line-height: 1.5rem;
                margin-top: 3px;
                letter-spacing: 2px;
            }
        }
    }
    .moreUnit{
        font-size: 1rem;
        line-height: 1rem;
        color: #ffbdb3;
        text-align: center;
        padding-bottom: 12px;
        letter-spacing: 5px;
    }
}
</style>
