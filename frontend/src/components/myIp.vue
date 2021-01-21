<template>
  <div class="borda fundoWin98Form mx-1">
    <div class="d-flex">
      <p class="text-center fundowin98Titulo text-white flex-fill"><strong>My Ip</strong></p>
      <a class="flex-shrink-1 btnWindow98reset point" @click="resetaFormulario" tag="button">X</a>
    </div>
    <b-form class="px-1">
      <div class="d-none d-lg-block" v-if="endereco">
        <h1>{{endereco.pais}}</h1>
        <h3>{{endereco.estado}}</h3>
        <h3>{{endereco.cidade}}</h3>
        <h3>{{endereco.ip}}</h3>
    </div>
    <div class="d-sm-block d-md-none">
      <h5>{{endereco.pais}}</h5>
      <p>{{endereco.estado}}</p>
      <p>{{endereco.cidade}}</p>
      <p>{{endereco.ip}}</p>
    </div>
      <b-button class="btnWindow98 my-1" @click="pegaIpUsuario" type="submit" v-if="isDisable">Doxx Me</b-button>
    </b-form>
    
  </div>
</template>
<script>
import axios from 'axios';
export default {
  data(){
    return{
      endereco:{
        ip:'',
        pais:'',
        cidade: '',
        estado: '',
        lat: null,
        long: null

      },
      isDisable : true
    }
  },
  methods:{
     pegaIpUsuario(e){
       e.preventDefault();
       
      axios.get('/ipusuario',{
      })
      .then((res)=>{
        this.endereco.ip = `Ip: ${res.data.endereco.ip}`;
        this.endereco.pais =`País: ${res.data.endereco.pais}`;
        this.endereco.estado =`Estado/Região: ${res.data.endereco.estado}`;
        this.endereco.cidade = `Cidade: ${res.data.endereco.cidade}`;
        this.isDisable = false
        
      })
      this.isEmpty = true
    },

    resetaFormulario(){
       this.endereco.ip = '';
        this.endereco.pais = '';
        this.endereco.estado = '';
        this.endereco.cidade = '';
        this.isDisable = true
    }
  }
}
</script>
<style scoped>
  input{
    width: 100%;
  }
  
</style>