<template>
    <div class="UnitListWrapper" ref="UnitListWrapper">
        <div class="UnitList" v-show="UnitMusicList.creator.avatarUrl">
            <div class="unitTitle">
                <img :src="UnitMusicList.creator.avatarUrl" class="titImg">
                <div class="tieName">
                    <span class="MListTit" v-text="musicObjData.name"></span>
                    <span></span>
                </div>
            </div>
            <ul class="unitul">
                <li class="unitli">
                    <div class="unitTxt">
                        <span class="musicIndex"></span>
                        <span class="musicName"></span>
                        <span class="SingerName"></span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
import {mapState,mapActions} from 'vuex'
export default {
    data(){
        return{}
    },
    mounted(){
        this.$nextTick(()=>{
            this.scroll=new BScroll(this.$refs.UnitListWrapper,{click:true})
        })
    },
    computed:{
        ...mapState(['UnitMusicList'])
    },
    methods:{
        ...mapActions(['actPlayMusicUrl']),
        playMusicUrl(id){
            this.actPlayMusicUrl(id)
        }
    }
}
</script>

<style lang="less" scoped>

</style>
