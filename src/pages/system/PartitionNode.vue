<template>
  <div class="bsc-partition-node">
    <span v-pinter="data"></span>
    <span>{{spacePercent}}-{{ioutil}}</span>
  </div>
</template>
<script>
export default {
  directives: {
    pinter: {
      inserted: function(el, binding) {
        const data = binding.value
        const nodeWidth = Math.floor((data.space / data.capacity) * 30)
        if (data.ioutil !== undefined) {
          const colorList = [
            '#76d0a3',
            '#76d0a3',
            '#76d0a3',
            '#76d0a3',
            '#76d0a3',
            '#76d0a3',
            '#76d0a3',
            '#76d0a3',
            '#76d0a3',
            '#F1A4A4',
          ]
          el.style.backgroundColor = colorList[Math.floor(data.ioutil / 10)]
        } else {
          el.style.backgroundColor = '#e5e9f2'
        }
        el.style.width = nodeWidth + 'px'
      },
    },
  },
  props: ['data'],
  data() {
    return {
      ioutil: this.data.ioutil,
      spacePercent:
        this.data.space && this.data.capacity
          ? Math.floor((this.data.space / this.data.capacity) * 100)
          : '',
    }
  },
}
</script>
<style lang="less" scoped>
@import '../../styles/index.less';
.dark .@{css-prefix}partition-node {
  border: @common-border-dark;
  color: #fff;
}
.@{css-prefix}partition-node {
  .wh(44px, 20px);
  border: @common-border;
  margin: 1px;

  & > span:first-child {
    width: 30px;
    height: 16px;
    display: block;
    margin: 1px 0 0 1px;
    background-color: #f1a4a4;
    cursor: pointer;
  }

  & > span:nth-child(2) {
    display: block;
    position: relative;
    font-size: 12px;
    top: -16px;
    left: 1px;
    width: 40px;
    height: 16px;
  }
}
</style>
