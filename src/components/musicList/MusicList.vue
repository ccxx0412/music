<template>
    <div class="musicList">
        <music-swiper :swiperList='swiperList'></music-swiper>
        <p class="mTitle" @click="MusicListTitle(2)" v-text="UnitName"></p>
        <component :is="MusicUnit" :musicList="musicList" :More="More" @MusicUnitList="MusicListTitle" @moreUnit="moreUnit"></component>
    </div>
</template>

<script>
import  MusicSwiper from './swiper/MusicSwiper'
import  MusicUnit from './musicUnit/MusicUnit'
import  UnitList from './unitList/UnitList'
import {mapActions} from 'vuex'
export default {
    data(){
        return{
            swiperList:[],
            musicList:[],
            MusicUnit:'MusicUnit',
            unitNum:0, // 数量起始
            More:false, // 默认没有更多
            UnitName:'全部歌单'
        }
    },
    components:{
        MusicSwiper,
        MusicUnit,
        UnitList
    },
    methods:{
        ...mapActions(['actMusicListFn']),
        // 轮播图
        swiperListFn(){
         let url='/api/banner'
            this.$ajax.get(url)
            .then(res=>{
                console.log(res.data)
                if(res.data.code==200){
                    this.swiperList=res.data.banners
                }
            })

        },
        // 歌单和歌单列表
        MusicListTitle(title,id){
            if(title==1){
                this.musicListFn(id)
                this.UnitName='返回歌单'
                this.MusicUnit='UnitList'
            }else{
                this.UnitName='全部歌单'
                this.MusicUnit='MusicUnit'
            }
        },
        // 歌单单元列表
        unitListFn(){
            let url='/api/top/playlist'
            this.$ajax.get(url,{
                params:{
                    limit:10,
                    offset:this.unitNum
                }
            })
            .then(res=>{
                console.log(res.data)
                if(res.data.code==200){
                    this.musicList=this.musicList.concat(res.data.playlists)
                    this.More=res.data.more
                }
            })
        },
        musicListFn(id){
            // 初始化 清空歌曲列表
            var UnitMusicList={
                creator:{
                    avatarUrl:''
                }
            }
            this.actMusicListFn(UnitMusicList)
            let url='/api/playlist/detail'
            this.$ajax.get(url)
            .then(res=>{
                if(res.data.code==200){
                    this.actMusicListFn(res.data.playlist)
                }
            })
        },
        // 加载更多(子组件emit事件)
        moreUnit(){
            this.unitNum+=10
            this.unitListFn()
        }

    },
    mounted(){
            this.$nextTick(()=>{
                this.swiperListFn()
                this.unitListFn()
            })
    }
}
</script>

<style lang="less" scoped>
.musicList{
    .mTitle{
        color: #666;
        padding-left: 1rem;
        font-size: 1.4rem;
        line-height: 1.4rem;
        font-weight: 600;
    }
}
</style>
