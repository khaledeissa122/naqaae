<template>
  <div>
    <div
      id="quickview-modal"
      class="modal fade"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-xl">
        <div class="modal-content"></div>
      </div>
    </div>
    <Mobile @changeLang="getLang($event)" />
  </div>
</template>

<script>
import Mobile from "~/components/header/Mobile.vue";
export default {
  components: {
    Mobile
  },
  methods: {
    getLang(getLang) {
      this.$emit("mobLang", getLang);
    }
  }
};
</script>
