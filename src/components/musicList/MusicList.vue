<template>
    <div class="musicList">
        <music-swiper :swiperList='swiperList'></music-swiper>
        <p class="mTitle" @click="MusicListTitle(2)" v-text="UnitName"></p>
        <component :is="MusicUnit" :musicList="musicList" :More="More"></component>
    </div>
</template>

<script>
import  MusicSwiper from './swiper/MusicSwiper'
import  MusicUnit from './musicUnit/MusicUnit'
import  UnitList from './unitList/UnitList'
export default {
    data(){
        return{
            swiperList:[],
            musicList:[],
            MusicUnit:'MusicUnit',
            More:false,
            UnitName:'全部歌单'
        }
    },
    components:{
        MusicSwiper,
        MusicUnit,
        UnitList
    },
    methods:{
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
                this.UnitName='返回歌单'
            }else{
                this.UnitName='全部歌单'
            }
        },

        unitListFn(){
            let url='/api/top/playlist'
            this.$ajax.get(url,{
                params:{
                    limit:10
                }
            })
            .then(res=>{
                console.log(res.data)
                if(res.data.code==200){
                    this.musicList=this.musicList.concat(res.data.playlists)
                    this.More=res.data.more
                }
            })
    
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
