<template>
  <div class="borda fundoWin98Form mx-1">
    <div class="d-flex">
      <p class="text-center fundowin98Titulo text-white flex-fill"><strong>Ip Finder</strong></p>
      <a class="flex-shrink-1 btnWindow98reset point "  @click="resetaFormulario" tag="button">X</a>
    </div>
    <b-form class="px-1"  >
      <b-form-group
        label-for="inputUrl"
        :description="descricao"
        :class="[{animated:isError},{shake: isError}]"
      >
      <input type="text" id="inputUrl" v-model="url" placeholder="url aqui" :class="{erroInput:isError}">
      </b-form-group>
      <div class="d-none d-lg-block">
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
      <b-button class="btnWindow98 my-1" @click="pegaIp" type="submit" v-if="isDisable">Enviar</b-button>
    </b-form>
  </div>
</template>
<script>
import axios from 'axios'
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
      url: '',
      isDisable : true,
      descricao:'Insira o endereço do site',
      isError: false
    }
  },

  methods:{
     pegaIp(e){
       e.preventDefault();
       
      axios.post('/iplocation',{
        url: this.url
      })
      .then((res)=>{
        this.endereco.ip = `Ip: ${res.data.endereco.ip}`;
        this.endereco.pais =`País: ${res.data.endereco.pais}`;
        this.endereco.estado =`Estado/Região: ${res.data.endereco.estado}`;
        this.endereco.cidade = `Cidade: ${res.data.endereco.cidade}`;
        this.isDisable = false;
      })
      .catch(erro =>{
        this.descricao = erro.response.data.msg;
        this.isError = true;
        setTimeout(()=>{
          this.descricao = 'Insira o endereço do site';
          this.isError = false
        },3000)
      })
    },

    resetaFormulario(){
       this.endereco.ip = '';
        this.endereco.pais = '';
        this.endereco.estado = '';
        this.endereco.cidade = '';
        this.url = '';
        this.isDisable = true;
        this.isError = false;
        this.descricao = "insira o endereço do site"
    }
  }
}
</script>
<style scoped>
  input{
    width: 100%;
  }
 .erroInput{
   background-color: #d9534f !important;
 }
</style>