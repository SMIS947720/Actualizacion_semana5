<template>
  <div>
    <div class="container pt-3">
      <div class="row">
        <div class="col-lg-12">
          <div class="form-group">
              <br>
              <br>
             <label for="cantidad">Ingresar el valor</label>
             <br>
             <br>
            <input
              class="form-control form-control-lg"
              id="cantidad"
              placeholder="Ingrese cantidad.."
              v-model="cantidad"
              v-on:keyup="onChange"
            />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6">
          <div class="form-group">
              <br>
            <label for="tengo">Convertir</label>
            <br>
            <br>
            <!--Utilizamos un v-model para los atributos que estaran dentro del select-->
            <select
              class="form-control form-control-lg"
              id="tengo"
              v-model="tengo"
              v-on:change="onChange()"
            >
              <option v-for="(byte, index) in bytes" v-bind:key="index">
                {{ byte }}
              </option>
            </select>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="form-group">
              <br>
            <label for="quiero">A</label>
            <br>
            <br>
            <!--Utilizamos un v-model para los atributos que estaran dentro del select-->
            <select 
              class="form-control form-control-lg"
              id="quiero"
              v-model="quiero" 
              v-on:change="onChange()"
            >
              <option v-for="(byte, index) in bytes" v-bind:key="index">
                {{ byte }}
              </option>
            </select>
          </div>
        </div>
      </div>
      <div class="text-center pt-4"> 
        <h5 v-if="cantidad > 0"> <!--Mostramos la respuesta dentro de un H6-->
          <span >{{ cantidad }} {{ tengo }}</span> <!--Cantidad a convertir-->
          <span> SON </span>
          <span>{{ getTotal(total) }} {{ quiero }}</span> <!--Respuesta de la conversion-->
        </h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bytes: ["Kilogramos", "Miligramos", "Libras", "Onzas"], //Opciones del Select
      cantidad: 0, //Inicie en 0 la cantidad 
      tengo: "Kilogramos", 
      quiero: "Miligramos",
      total: 0, //Inicie en cero el total
    };
  },
  methods: {
    onChange() {
      switch (this.tengo) {
        // Conversion de Kilogramos
        case "Kilogramos":
          if (this.quiero === "Kilogramos") { //Kilogramos a Kilogramos
            this.total = this.cantidad;
          }
          if (this.quiero === "Miligramos") {
            this.total = this.cantidad * 1000000; //Kilogramos a Miligramos
          }
          if (this.quiero === "Libras") { //Kilogramos a Libras
            this.total = this.cantidad * 2.205;
          }
          if (this.quiero === "Onzas"){  //Kilogramos a Onzas
           this.total = this.cantidad * 35.274;
         }
          break;
        // Conversion de Miligramos
        case "Miligramos":
          if (this.quiero === "Kilogramos") { //Miligramos a Kilogramos
            this.total = this.cantidad / 1000000;
          }
          if (this.quiero === "Miligramos") {  //Miligramos a Miligramos
            this.total = this.cantidad;
          }
          if (this.quiero === "Libras") { //Miligramos a Libras
            this.total = this.cantidad / 453592;
          }
          if (this.quiero === "Onzas"){  //Miligramos a Onzas
           this.total = this.cantidad / 28350;
         }
          break;
          // Conversion de Libras
        case "Libras":
          if (this.quiero === "Kilogramos") { //Libras a Kilogramos
            this.total = this.cantidad / 2.205;
          }
          if (this.quiero === "Miligramos") { //Libras a Miligramos
            this.total = this.cantidad * 453592;
          }
          if (this.quiero === "Libras") { //Libras a Libras
            this.total = this.cantidad;
          }
          if (this.quiero === "Onzas"){ //Libras a Onzas
           this.total = this.cantidad * 16;
         }
          break;
        // Conversion de Onzas
        case "Onzas":
         if (this.quiero === "Kilogramos") { //Onzas a Kilogramos
           this.total = this.cantidad / 35.274;
         }
         if (this.quiero === "Miligramos") {  //Onzas a Miligramos
            this.total = this.cantidad * 28350;
         }
         if (this.quiero === "Libras") { //Onzas a Libras
            this.total = this.cantidad / 16;
         }
         if (this.quiero === "Onzas"){ //Onzas a Onzas
           this.total = this.cantidad;
         }
         break;
        
        default:
      }
    },
    getTotal(valor) {
        return(valor)
    }
  },
};
</script>


<style scoped>
.badge {
  margin: 2px;
  font-size: 150%;
}
label {
  font-weight: 700;
  font-size: 130%;
  color: black;
  
}
h6{
    color: black;
}
</style>