<template>
  <div class="musicList">
    <swiper class="musicSwiper" :options="swiperOption">
      <swiper-slide v-for="(item,index) in swiperList" :key="index">
        <img :src="item.picUrl" :alt="item.targetId">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  props: {
    swiperList: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        },
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: true
        },
        observer: true,
        observeParents: true
      }
    }
  }
}
</script>

<style lang="less" scoped>
.musicList {
  .musicSwiper {
    width: 100%;
    height: 15.5rem;
    border-radius: 3px;
    img {
      width: 100%;
      height: 100%;
		}
		// TODO: 按钮不对
    .swiper-pagination-bullet {
      background-color: #ea2000;
    }
    .swiper-pagination-bullet-active {
      width: 16px;
      border-radius: 3px;
      background-color: #fff;
    }
  }
}
</style>

