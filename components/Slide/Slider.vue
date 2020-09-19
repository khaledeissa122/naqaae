<template>
  <!-- .block-slideshow -->
  
    <a class="block-slideshow__slide" href="#"
      ><div
        class="block-slideshow__slide-image block-slideshow__slide-image--desktop"
        :style="`backgroundImage: url(${desktopImg})`"
      ></div>
      <div
        class="block-slideshow__slide-image block-slideshow__slide-image--mobile"
        :style="`backgroundImage: url(${desktopImg})`"
      ></div>
      <div class="block-slideshow__slide-content">
        <div class="block-slideshow__slide-title" v-html="slideTitle"></div>
        <div class="block-slideshow__slide-text" v-html="slideContent"></div>
        <div class="block-slideshow__slide-button" v-if="btn">
          <span class="btn btn-primary btn-lg">{{ btnText }}</span>
        </div>
      </div></a
    >

  <!-- .block-slideshow / end --><!-- .block-features -->
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      required: false
    },
    desktopImg: {
      type: String,
      required: true
    },
    mobileImg: {
      type: String,
      required: true
    },
    slideTitle: {
      type: String,
      required: true
    },
    slideContent: {
      type: String,
      required: true
    },
    btn: {
      type: Boolean,
      required: true
    },
    btnText: {
      type: String,
      required: false
    }
  },
  mounted(){
    this.$forceUpdate();
  }
};
</script>

<style >
  .owl-dot span{
    display: none !important;
  }
</style>