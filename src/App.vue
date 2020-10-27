<template>
  <div id="app">
    <encabezado-app>TO DO LIST</encabezado-app>
    <menu-app class='container mx-auto'></menu-app>
    <router-view class='router-view' :user='currentUser' @login='initLogin'></router-view>
    
    <pie-app></pie-app>
  </div>
</template>

<script>
import EncabezadoApp from './components/EncabezadoApp'; 
import PieApp from './components/PieApp';
import MenuApp from './components/MenuApp';

export default {
  name: 'App',
  components: {
    EncabezadoApp,
    PieApp,
    MenuApp
  },
  data() {
    return {
      logged: false,
      currentUser: {}
    }
  },
  methods:{
    initLogin(user){
      this.logged = true;
      this.currentUser = user;

      this.$router.push('/')
      
    },
    validarLogin(){
      if(!this.logged){
        this.$router.push('/login')
      }
    }
  },
  watch: {
    $route(to,from){
      console.log(to.name,from.name)

      this.validarLogin()
    },
    logged(){
      console.log('el usuario ingreso correctamente')
    }
  },
  mounted() {
      this.validarLogin()
  },


}
</script>

<style>
  body{
    font-family: 'Verdana';
  }

  .router-view{
    margin: 4rem 0;
  }
</style>
