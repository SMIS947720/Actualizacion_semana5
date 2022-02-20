<template>
  <div>
    <div class="container pt-3">
      <div class="row">
        <div class="col-lg-12">
          <div class="form-group">
              <br>
              <br>
             <label for="cantidad">Ingrese los digitos</label>
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
          <span > SON </span>
          <span >{{ getTotal(total) }} {{ quiero }}</span> <!--Respuesta de la conversion-->
        </h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bytes: ["KB (Kilobyte)", "MB (Megabyte)", "GB (Gigabyte)", "TB (Terabyte)"], //Opciones del Select
      cantidad: 0, //Inicie en 0 la cantidad 
      tengo: "KB (Kilobyte)", 
      quiero: "MB (Megabyte)",
      total: 0, //Inicie en cero el total
    };
  },
  methods: {
    onChange() {
      switch (this.tengo) {
        // Conversion de KB 
        case "KB (Kilobyte)":
          if (this.quiero === "KB (Kilobyte)") { //KB a KB
            this.total = this.cantidad;
          }
          if (this.quiero === "MB (Megabyte)") {
            this.total = this.cantidad / 1000; //KB a MB
          }
          if (this.quiero === "GB (Gigabyte)") { //KB a GB
            this.total = this.cantidad / 1000000;
          }
          if (this.quiero === "TB (Terabyte)"){  //KB a TB
           this.total = this.cantidad / 1000000000;
         }
          break;
        // Conversion de MB
        case "MB (Megabyte)":
          if (this.quiero === "KB (Kilobyte)") { //MB a KB 
            this.total = this.cantidad * 1000;
          }
          if (this.quiero === "MB (Megabyte)") {  //MB a MB
            this.total = this.cantidad;
          }
          if (this.quiero === "GB (Gigabyte") { //MB a GB
            this.total = this.cantidad / 1000;
          }
          if (this.quiero === "TB (Terabyte)"){  //MB a TB
           this.total = this.cantidad / 1000000;
         }
          break;
          // Conversion de GB 
        case "GB (Gigabyte)":
          if (this.quiero === "KB (Kilobyte)") { //GB a KB
            this.total = this.cantidad * 1000000;
          }
          if (this.quiero === "MB (Megabyte)") { //GB a MB
            this.total = this.cantidad * 1000;
          }
          if (this.quiero === "GB (Gigabyte)") { //GB a GB
            this.total = this.cantidad;
          }
          if (this.quiero === "TB (Terabyte)"){ //GB a TB
           this.total = this.cantidad / 1000;
         }
          break;
        // Conversion de TB
        case "TB (Terabyte)":
         if (this.quiero === "KB (Kilobyte)") { //TB a KB
           this.total = this.cantidad * 1000000000;
         }
         if (this.quiero === "MB (Megabyte)") {  //TB a MB
            this.total = this.cantidad * 1000000;
         }
         if (this.quiero === "GB (Gigabyte)") { //TB a GB
            this.total = this.cantidad * 1000;
         }
         if (this.quiero === "TB (Terabyte)"){ //TB a TB
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