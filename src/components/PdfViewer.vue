<template>
  <div></div>
</template>

<script>
export default {
  mounted() {
    this.openPdf()
  },
  methods: {
    openPdf() {
      const file = this.$route.params.file
      const pdfUrl = '/林剑豪 - 用户体验设计师【6年】- 作品集' + file + '.pdf'
      // window.open(pdfUrl, '_blank')
    }
  }
}
</script>
