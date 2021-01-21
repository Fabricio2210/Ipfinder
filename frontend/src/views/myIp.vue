<template>
<b-container>
  <br>
  <b-row>
    <b-col lg='6' sm='12' offset-lg="3">
      <MyIp class="animated fadeIn"/>
    </b-col>
  </b-row>
</b-container>
</template>
<script>
import MyIp from '../components/myIp.vue'
export default {
  
  components:{
    MyIp
  }
}
</script>