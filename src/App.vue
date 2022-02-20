<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">CONVERSORES</b-navbar-brand>

         <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

           <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
            <b-nav-item to="/longitud">Longitud</b-nav-item>
            <b-nav-item to="/convertMoneda">Moneda</b-nav-item>
            <b-nav-item to="/masa">Masa</b-nav-item>
            <b-nav-item to="/tiempo">Tiempo</b-nav-item>
            <b-nav-item to="/almacenamiento">Almacenamiento</b-nav-item>
            
            </b-navbar-nav>
          </b-collapse>
      </b-navbar>
    <router-view/>

   <b-container>
     <b-row align-h="center" class="mt-5">
      <b-card img-src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTId4p0EzjQJXSGriPf096QzZoE0I4IMFIzFx_h2R-9z955OuK4yUoWzzljWZJhbqVuLT8&usqp=CAU" img-alt="Card image" img-right>
          <b-card-text>
             <p class="lead">
              Esta pagina contiene diferentes tipos de conversores,
              que pueden ayudarte como: Longitud,Moneda,Masa,Tiempo y Almacenamiento.</br>

              !ESPERO TE SIRVAN¡</p>
           </b-card-text>
       </b-card>
     </b-row>
   </b-container>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
