<template>
<b-container>
  <br>
  <b-row>
    <b-col lg='6' sm='12' offset-lg="3">
      <FormIp class="animated fadeIn"/>
    </b-col>
  </b-row>
</b-container>
</template>

<script>
import FormIp from '@/components/formIp.vue'

export default {
  name: 'home',
  components: {
    FormIp
  }
}
</script>
