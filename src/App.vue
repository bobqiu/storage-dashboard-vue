<template>
  <div id="app"
       v-drop>
    <router-view></router-view>
    <loading></loading>
  </div>
</template>
<script>
import loading from '@/components/loading'
export default {
  name: 'app',
  components: { loading },
  directives: {
    // remove the default drop and drag actions
    drop: {
      bind: function() {
        let doc = document.getElementsByTagName('body')[0]
        doc.ondrop = (e) => e.preventDefault()
        doc.ondragleave = (e) => e.preventDefault()
        doc.ondragenter = (e) => e.preventDefault()
        doc.ondragover = (e) => e.preventDefault()
      },
    },
  },
  created() {
    $('body').addClass(`${this.$store.state.theme}`)
  },
}
</script>
<style lang="less">
@import './styles/index.less';
html,
body {
  .wh(100%, 100%);
  min-width: @body-min-width;
  overflow: inherit;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100%;
  overflow-y: auto;
}
</style>
