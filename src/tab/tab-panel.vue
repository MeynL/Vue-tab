<template>
<div class="my-tab-panel-item" :class="clss">
  <slot></slot>
</div>
</template>

<script>
export default {
  name: 'my-tab-panel',
  data() {
    return {
      isCurr: false
    }
  },
  props: {
    txt: String
  },
  computed: {
    clss() {
      return this.isCurr ? 'curr' : '';
    }
  },
  mounted() {
    this.$nextTick(() => {
        this.$parent.init();
    });
  }
}
</script>

<style lang="css">
  .my-tab-panel-item{
    display: none;
  }
  .my-tab-panel-item.curr{
    display: block;
  }
</style>
