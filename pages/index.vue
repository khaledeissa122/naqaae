<template>
  <div>
    <div class="site__body">
      <div
        class="block-slideshow block-slideshow--layout--with-departments block"
      >
        <div class="container">
          <div class="row">
            <div class="col-12 col-lg-9 offset-lg-3">
              <div class="block-slideshow__body">
                <carousel :nav="false" items="1">
                  <div v-for="(slide, i) in slides" :key="i">
                    <Slider
                      v-if="renderComponent"
                      :slideContent="slide.slideContent"
                      :slideTitle="slide.slideTitle"
                      :desktopImg="slide.desktopImg"
                      :mobileImg="slide.mobileImg"
                      :btn="true"
                      :btnText="slide.btnText"
                      :link="slide.link"
                    />
                  </div>
                </carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BlockFeatures />
      <div class="block block-products-carousel" data-layout="grid-4">
        <div class="container">
          <div class="block-header">
            <h3 class="block-header__title">
              Featured Products
            </h3>
            <div class="block-header__divider"></div>
            <ul class="block-header__groups-list mr-7">
              <li>
                <button
                  @click="over"
                  type="button"
                  class="block-header__group block-header__group--active"
                >
                  All
                </button>
              </li>
              <li>
                <button @click="over" type="button" class="block-header__group">
                  Power Tools
                </button>
              </li>
              <li>
                <button @click="over" type="button" class="block-header__group">
                  Hand Tools
                </button>
              </li>
              <li>
                <button @click="over" type="button" class="block-header__group">
                  Plumbing
                </button>
              </li>
            </ul>
          </div>
          <div class="block-products-carousel__slider">
            <div
              v-if="loading"
              class="block-products-carousel__preloader"
            ></div>
            <!-- <div class="owl-carousel"> -->
            <carousel
              :nav="true"
              items="4"
              :responsive="{
                992: { items: 3 },
                768: { items: 2 },
                0: { items: 1 }
              }"
            >
              <div v-for="(n, i) in 20" :key="i">
                <BlockProducts />
              </div>
            </carousel>
            <!-- </div> -->
          </div>
        </div>
      </div>
      <BlockBanner />
      <BlockProduct />
      <BlockHighlighted />

      <div class="block block-products-carousel" data-layout="horizontal">
        <div class="container">
          <div class="block-header">
            <h3 class="block-header__title">New Arrivals</h3>
            <div class="block-header__divider"></div>
            <ul class="block-header__groups-list mr-7">
              <li>
                <button
                  type="button"
                  class="block-header__group block-header__group--active"
                >
                  All
                </button>
              </li>
              <li>
                <button type="button" class="block-header__group">
                  Power Tools
                </button>
              </li>
              <li>
                <button type="button" class="block-header__group">
                  Hand Tools
                </button>
              </li>
              <li>
                <button type="button" class="block-header__group">
                  Plumbing
                </button>
              </li>
            </ul>
          </div>
          <div class="block-products-carousel__slider">
            <div
              v-if="loading"
              class="block-products-carousel__preloader"
            ></div>
            <carousel
              :nav="true"
              items="4"
              :responsive="{
                992: { items: 3 },
                768: { items: 2 },
                0: { items: 1 }
              }"
            >
              <div v-for="(n, i) in 20" :key="i" class="mx-1">
                <BlockProductSlide />
              </div>
            </carousel>
          </div>
        </div>
      </div>

      <BlockPosts />
      <BlockBrands />
      <BlockProductCol />
      <!-- .block-products-carousel -->

      <!-- .block-products-carousel / end --><!-- .block-banner -->

      <!-- .block-banner / end --><!-- .block-products -->

      <!-- .block-products / end --><!-- .block-categories -->

      <!-- .block-categories / end --><!-- .block-products-carousel -->

      <!-- .block-products-carousel / end --><!-- .block-posts -->

      <!-- .block-posts / end --><!-- .block-brands -->

      <!-- .block-brands / end --><!-- .block-product-columns -->

      <!-- .block-product-columns / end -->
    </div>
  </div>
</template>

<script>
import BlockProducts from "~/components/blocks/BlockProducts.vue";
import BlockFeatures from "~/components/blocks/BlockFeatures.vue";
import BlockBanner from "~/components/blocks/BlockBanner.vue";
import BlockProduct from "~/components/blocks/BlockProduct.vue";
import BlockHighlighted from "~/components/blocks/BlockHighlighted.vue";
import BlockProductSlide from "~/components/blocks/BlockProductSlide.vue";
import BlockPosts from "~/components/blocks/BlockPosts.vue";
import BlockBrands from "~/components/blocks/BlockBrands.vue";
import BlockProductCol from "~/components/blocks/BlockProductCol.vue";
export default {
  components: {
    BlockProducts,
    BlockFeatures,
    BlockProduct,
    BlockHighlighted,
    BlockProductSlide,
    BlockPosts,
    BlockBrands,
    BlockProductCol
  },
  data() {
    return {
      loading: false,
      renderComponent: true,
      slides: [
        {
          btn: true,
          btnText: "Shop Now",
          desktopImg: "'/slides/slide-1.jpg'",
          mobileImg: "'/slides/slide-1-mobile.jpg'",
          slideTitle: "Big choice of<br />Plumbing products",
          slideContent:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />Etiam pharetra laoreet dui quis molestie.",
          link: "/about"
        },
        {
          btn: true,
          btnText: "Shop Now",
          desktopImg: "'/slides/slide-1.jpg'",
          mobileImg: "'/slides/slide-1-mobile.jpg'",
          slideTitle: "Big choice of<br />Plumbing products",
          slideContent:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />Etiam pharetra laoreet dui quis molestie.",
          link: "/about"
        }
      ]
    };
  },
  methods: {
    over() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    },
    forceRerender() {
      // Remove my-component from the DOM
      this.renderComponent = false;

      this.$nextTick(() => {
        // Add the component back in
        this.renderComponent = true;
      });
    }
  }
};
</script>

<style>
.owl-nav {
  position: absolute;
  top: -64px;
  right: 0;
  outline: 0;
}
.owl-next,
.owl-prev {
  border: 0;
  border-radius: 0 !important;
  outline: 0;
  margin: 2px;
}
.owl-next span,
.owl-prev span {
  color: #999999;
  background-color: #f2f2f2;
  font-size: 20px;
  padding: 0.2rem 1rem;
  border: 0;
  outline: 0;
}
.owl-next span:hover,
.owl-prev span:hover {
  background-color: #ffd333;
  outline: 0;
}
button:focus {
  outline: 0;
}
.owl-theme .owl-nav [class*="owl-"] {
  margin: 2px;
}
.owl-theme .owl-nav [class*="owl-"]:hover {
  background: none;
}
.mr-7 {
  margin-right: 6rem;
}
</style>
