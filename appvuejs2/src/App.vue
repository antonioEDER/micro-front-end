<template>
  <HelloWorld msg="Micro FrontEnd with Vue.js 02"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import { objectFactory } from "@microfrontend/utilitario";
export default {
  name: 'App',
  components: {
    HelloWorld
  },
  mounted() {
    console.log('Deu certo o instanciamento do pacote utilitario', objectFactory());
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
