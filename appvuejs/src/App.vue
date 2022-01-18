<template>
  <header>
    <nav>
      <div class="nav-wrapper container">
        <div href="#!" class="brand-logo">
          <img
            height="60px"
            src="https://avatars.githubusercontent.com/u/6128107?s=280&v=4"
            alt=""
          />
           <div>Header em Vuejs</div>
        </div>
        <ul class="right hide-on-med-and-down">
          <li>
            <a href="#"
              ><i class="material-icons left">search</i>Left Icon</a
            >
          </li>
          <li>
            <a href="#"
              ><i class="material-icons right">view_module</i> Right Icon</a
            >
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import "materialize-css/dist/css/materialize.min.css";
import 'material-design-icons/iconfont/material-icons.css';

export default {
  name: "App",
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.brand-logo{
  display: flex;
}
</style>
