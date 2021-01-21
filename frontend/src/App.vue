<template>
  <div>
    <navBar class="d-none d-lg-block py-4" />
    <navMobile class="d-sm-block d-md-none py-1" />
    <router-view/>
  </div>
</template>

<script>
import navBar from './components/nav'
import navMobile from './components/navMobile'
export default {
  components: {
    navBar,
    navMobile
  }
}
</script>
<style  src="./css/main.css"></style>
