export default({
    // 获取音乐列表数据并赋值给state
    mutMusicListFn:function (state,musicListObj) {
        state.UnitMusicList=musicListObj
    },
    // 获取点击的歌曲数据并赋值给state
    mutPlayMusicUrl:function (state,musicObj) {
        var newMusicObj={
            name:musicObj.name,
            id:musicObj.id,
            musicUrl: 'http://music.163.com/song/media/outer/url?id=' + musicObj.id + '.mp3',
            singerArr:musicObj.ar,
            musicImg:musicObj.ar.picUrl
        }        
        state.playMusicData=newMusicObj
        console.log(state.playMusicData)
    }
})