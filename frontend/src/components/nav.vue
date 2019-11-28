<template>
    <div class="py-3">
  <b-navbar class="bgnav bordanav" fixed="top" toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">Ipfinder <font-awesome-icon :icon="['fab', 'windows']" /></b-navbar-brand>
         <b-navbar-nav>
        <router-link to="/" tag="b-nav-item">Home</router-link>
         <router-link class="link" to="/myip" tag="b-nav-item">My Ip</router-link>
      </b-navbar-nav>
    </b-navbar>
  <br>
</div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .bordanav{
    border: 2px ridge black !important;
    border-radius: 5px;
}
    .bgnav{
        background-color: #0000a5 !important;
    }
</style>