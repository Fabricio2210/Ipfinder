<template>
<div>
    <b-navbar class="bgnav bordanav py-2" fixed="bottom" toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="#">Ipfinder <font-awesome-icon :icon="['fab', 'windows']" /></b-navbar-brand>
            <b-navbar-nav class="d-flex flex-row justify-content-center">
                <router-link class="px-2" to="/" tag="b-nav-item">Home</router-link>
                <router-link class="px-2" to="/myip" tag="b-nav-item">My Ip</router-link>
            </b-navbar-nav>
    </b-navbar>
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