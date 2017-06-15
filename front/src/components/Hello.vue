<template lang="jade">
div
  h1 A simple Live Streaming sample build by JavaScript
  p Power by Node / Vue / WebRTC
  router-link(:to="{name: 'Live'}")
    a(href="javascript: void(0)") START >>
</template>

<script>
export default {
  name: 'Hello'
}
</script>

<style lang="stylus">
body
  background-color: #eee;
  margin: 0px;
  padding: 0px;
  #app
    margin: 0 auto;
    padding: 0px;
    width: 50%;
    background-color: #fff;
    height: 100vh;
    
    h1
      margin: 0px;
      padding: 50px;
      // font-size: 36px;
  @media screen and (max-width: 720px)
    #app
      width: 100%;
</style>
