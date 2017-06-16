<template lang="jade">
  div
    //- h1 Live
    el-button(type="primary", icon="caret-right", @click="start") 我要直播
    //- video#live(autoplay)
</template>

<script>
export default {
  name: 'Live',
  methods: {
    start () {
      this.$prompt('请输入房间名', '房间名', {
        confirmButtonText: '开始',
        cancelButtonText: '取消'
      }).then(name => {
        console.log('name', name)
      })
    },
    success (stream) {
      let ele = document.getElementById('live')
      ele.srcObject = stream
    },
    failed (err) {
      console.error('getUserMedia failed:', err.name, err)
    },
    load () {
      window.navigator.mediaDevices.getUserMedia({
        audio: false,
        video: true,
        screen: false
      }).then(this.success).catch(this.failed)
    }
  },
  mounted () {
    this.load()
  }
}
</script>

<style lang="stylus" scoped>
video
  width: 720px;
@media screen and (max-width: 720px)
  video
    width: 100%;
</style>
