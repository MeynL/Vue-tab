<template>
  <my-tab>
    <my-tab-panel txt="tab1"><div class="box" style="background:#a394d5;"></div></my-tab-panel>
    <my-tab-panel txt="tab2"><div class="box" style="background:#c84723;"></div></my-tab-panel>
    <my-tab-panel txt="tab3"><div class="box" style="background:#f09099;"></div></my-tab-panel>
    <my-tab-panel txt="tab4"><div class="box" style="background:#b3a342;"></div></my-tab-panel>
  </my-tab>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
    }
  }
}
</script>

<style>
.box{
  height: 100px;
}
</style>
