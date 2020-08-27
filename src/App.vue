<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
  window.onload = function() {
    document.addEventListener('touchstart', function(event) {
      if (event.touches.length > 1) {
        event.preventDefault()
      }
    });
    document.addEventListener('gesturestart', function(event) {
      event.preventDefault()
    })
  }

</script>
<style lang="less">
  #app {
    font-family: '微软雅黑';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
