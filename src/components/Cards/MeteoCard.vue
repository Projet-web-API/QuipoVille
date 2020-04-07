<template>
  <Card style="width: 17rem;">
    <div slot="header" >
      Meteo
    </div>

    <div id=jour0 v-on:click="affinfmeteo(0)" class='mini_cadre_jour'>
      <img id = "imeteo0"src="https://www.example.com/images/dinosaur.jpg" >
      <p id="meteo0"></p>
      <div id="infometeo0"></div>


    </div>
    <div id=jour1 v-on:click="affinfmeteo(1)" class='mini_cadre_jour'>
      <img id = "imeteo1"src="https://www.example.com/images/dinosaur.jpg" >
      <p id="meteo1"></p>
      <div id="infometeo1"></div>
    </div>


    <div id=jour2 v-on:click="affinfmeteo(2)" class='mini_cadre_jour'>
      <img id = "imeteo2"src="https://www.example.com/images/dinosaur.jpg" >
      <p id="meteo2"></p>
      <div id="infometeo2"></div>
    </div>


    <div id=jour3 v-on:click="affinfmeteo(3)" class='mini_cadre_jour'>
      <img id = "imeteo3"src="https://www.example.com/images/dinosaur.jpg" >
      <p id="meteo3"></p>
      <div id="infometeo3"></div>
    </div>


    <div id=jour4 v-on:click="affinfmeteo(4)" class='mini_cadre_jour'>
      <img id = "imeteo4"src="https://www.example.com/images/dinosaur.jpg" >
      <p id="meteo4"></p>
      <div id="infometeo4"></div>
    </div>

  </Card>
</template>
<script>
import Card from "./Card.vue";

export default {
  name: "meteocard",
  components: {
    Card
  }
};
</script>
<style>
  div.centre {
      position:absolute;
      left: 50%;
      top: 15%;
      width: auto;
      height: auto;
      margin-left: -100px;
      margin-top: -100px;
      background-color: #FFFFFF;
      z-index: 100;
      display: none;
  }

  div.filtre{
    width: 100%;
    height: 100%;
    background-color: #000000;
    top: 0;
    left: 0;
    position: absolute;
    display: none;
    z-index: 20;
    -moz-opacity: 0.8;
    opacity: 0.6;
    filter: alpha(opacity=0);
  }

  span.nom_jour{
    text-align:center;
  }

  div.mini_cadre_jour{
    display: inline-block;
  }

</style>
