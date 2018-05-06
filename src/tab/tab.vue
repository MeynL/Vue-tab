<template>
<div class="my-tab">
  <ul class="my-tab-nav">
    <li class="my-tab-nav-item" :class="currIndex === index ? 'curr':'' " v-for="val,index in navList" @click="tabSwitch(index)">
      <a href="javascript:;">{{val.txt}}</a>
    </li>
  </ul>
  <div class="my-tab-panel">
    <slot></slot>
  </div>
</div>
</template>

<script>
export default {
  name: 'my-tab',
  data() {
    return {
      navList: [],
      currIndex: 0
    }
  },
  methods: {
    tabSwitch(index) {
      this.currIndex = index;
      if (index < 0) this.currIndex = 0;
      if (index > this.navList.length - 1) this.currIndex = this.navList.length - 1;
    },
    init() {
      this.navList = [];
      this.$children.filter(item => item.$options.name === 'my-tab-panel').forEach((v, i) => {
        this.navList.push({
          txt: v.txt
        });
        this.$set(v, 'isCurr', i === this.currIndex ? true : false);
      });
    }
  },
  watch:{
    currIndex(){
      this.$children.filter(item => item.$options.name === 'my-tab-panel').forEach((v, i) => {
        this.$set(v, 'isCurr', i === this.currIndex ? true : false);
      });
    }
  }
}
</script>

<style lang="css">
.my-tab{
}
a{
  text-decoration: none;
  color: #000;
}
ul{
  list-style: none;
}
ul,li{
  margin: 0;
  padding: 0;
}
.my-tab-nav-item{
  display: inline-block;
  padding: 0 20px;
  border: 1px solid #bbb;
  border-radius: 2px;
  background: #eee;
  margin-left: -1px;
  margin-bottom: -1px;
  cursor: pointer;
}
.curr{
  background: #ccc;
}
.my-tab-panel{
  border: 1px solid #bbb;
  margin-left: -1px;
}
</style>
