<template lang="jade">
  div
    h1 Live
    video#live(autoplay)
</template>

<script>
export default {
  name: 'Live',
  methods: {
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
