<template>
<footer class="footer navbar-fixed-bottom"> 
  <div class="footer-bottom container-fluid">
    <div class="row footer-row" align="center">
      <div align="center" class="col f-text"> <icon name="heart" class="heart-icon"></icon>  A Todo Application in Vue - Shubham Waghe</div>
    </div>
  </div>
  
</footer>
</template>

<script>
export default {
  name: 'my-footer'
}
</script>
<style scoped>
.footer-bottom {
  margin-top: 50px;
}
.footer-row {
  background: #3939c5;
  padding: 12px;
}
.f-text {
  color: white;
}
.heart-icon {
  color: red;
}
</style>
