<template>
  <div>


    <div class="centre" id='detail_meteo' >Test</div>
    <div class='filtre' id='filtre_gris' v-on:click='clicSurFiltre'></div>
    <div class="row">

        <div class="sidebar"
          :data="backgroundColor">
        <!--
                Tip 1: you can change the color of the sidebar's background using: data-background-color="white | black | darkblue"
                Tip 2: you can change the color of the active button using the data-active-color="primary | info | success | warning | danger"
            -->
        <!-- -->
        <div class="sidebar-wrapper" id="style-3">
          <div class="logo">
            <a href=""
              aria-label="sidebar mini logo"
              class="simple-text logo-mini">
              <div class=""
                  :class="{'logo-img-rtl': $rtl.isRTL}">
                <img
                  src="../../public/img/logoQuipoVille.png"
                  alt="">
              </div>
            </a>
            <a href="" class="simple-text logo-normal">
              {{title}}
            </a>
          </div>
          <slot>
            <div class="boxSidebar">
              <p>{{$t('dashboard.city-selector')}}</p>
              <select id="bouton-select-ville" class="btn dropdown-toggle" name="city">
                  <option >{{$t('dashboard.lemans')}}</option>
                  <option >{{$t('dashboard.paris')}}</option>
                  <option >{{$t('dashboard.nantes')}}</option>
                  <option >{{$t('dashboard.lyon')}}</option>
                  <option >{{$t('dashboard.lille')}}</option>
                  <option >{{$t('dashboard.bordeaux')}}</option>
                  <option >{{$t('dashboard.marseille')}}</option>
                  <option >{{$t('dashboard.toulouse')}}</option>
              </select>
            </div>
          </slot>
          <slot>
            <div class="boxSidebar">
              <p>{{$t('dashboard.language-selector')}}</p>
              <select id="bouton-select-langue" class="btn dropdown-toggle" name="language">
                  <option selected value="fr">{{$t('dashboard.france')}}</option>
                  <option value="en">{{$t('dashboard.angleterre')}}</option>
                  <option value="es">{{$t('dashboard.espagne')}}</option>
              </select>
            </div>
          </slot>
          <slot>
            <div class="boxSidebar">
              <button id="bouton" class="btn" v-on:click="handleBouton()">
                    {{$t('dashboard.valide')}}
              </button>
            </div>
          </slot>
          <slot>
          <button id="bouton-contact" class="btn">
          <a href="https://twitter.com/QuipoV" style="color: white;">{{$t('dashboard.contact')}}</a>
          </button>
          </slot>
          <slot >
            <p id="apropos">{{$t('dashboard.propos')}}</p>
          </slot>
          <ul class="nav">
            <!--By default vue-router adds an active class to each route link. This way the links are colored when clicked-->
            <slot name="links">
              <sidebar-link v-for="(link,index) in sidebarLinks"
                            :key="index"
                            :to="link.path"
                            :name="link.name"
                            :icon="link.icon">
              </sidebar-link>
            </slot>
          </ul>
        </div>
      </div>

      <div class="col-lg-3" :class="{'text-right': isRTL}"> <!-- Meteo -->
      
        <card style="width: 17rem;">
          <div slot="header" >
            <h5 class="card-category">{{$t('dashboard.meteo')}}</h5>
          </div>

            <div id="jour0" v-on:click="affinfmeteo(0)" class='mini_cadre_jour'>
              <img id = "imeteo0" >
              <p id="meteo0"></p>
              <div id="infometeo0"></div>


            </div>
            <div id="jour1" v-on:click="affinfmeteo(1)" class='mini_cadre_jour'>
              <img id = "imeteo1" >
              <p id="meteo1"></p>
              <div id="infometeo1"></div>
            </div>


            <div id="jour2" v-on:click="affinfmeteo(2)" class='mini_cadre_jour'>
              <img id = "imeteo2" >
              <p id="meteo2"></p>
              <div id="infometeo2"></div>
            </div>


            <div id="jour3" v-on:click="affinfmeteo(3)" class='mini_cadre_jour'>
              <img id = "imeteo3" >
              <p id="meteo3"></p>
              <div id="infometeo3"></div>
            </div>


            <div id="jour4" v-on:click="affinfmeteo(4)" class='mini_cadre_jour'>
              <img id = "imeteo4" >
              <p id="meteo4"></p>
              <div id="infometeo4"></div>
          </div>

        </card>
      </div>

      <div class="col-lg-4" :class="{'text-right': isRTL}"> <!-- Twitter -->

        <card type="chart">
            <template slot="header">
              <h5 class="card-category">{{$t('dashboard.twitter')}}</h5>
                <twitter id = "twi"></twitter>
            </template>
        </card>
      </div>

      <div class="col-lg-4" :class="{'text-right': isRTL}"> <!-- Wikipedia -->

        <card type="chart">
          <template slot="header">
              <h5 class="card-category">{{$t('dashboard.wikipedia')}}</h5>
              <div class="scrollbar">
                <a id="titreWiki"></a>
                <p id="descWiki"></p>
              </div>
          </template>
        </card>
      </div>

      <div class="col-lg-6" :class="{'text-right': isRTL}"> <!-- Map Bing -->
        <card style="width: 28rem; height:28rem;">
          <div id='printoutPanel'></div>
          <h5 class="card-category">{{$t('dashboard.map')}}</h5> 
          <div id='myMap' style='width: 100%; height: 100%;'></div>
        </card>
      </div>

      <div class="col-lg-5" :class="{'text-right': isRTL}"> <!-- Blablacar -->
        <card style="width: 28rem;">
          <h5 class="card-category">{{$t('dashboard.blablacar')}}</h5>
          <div id="choix1">{{$t('dashboard.depart')}}</div>
          <p id="villed">{{$t('dashboard.lemans')}}</p>
          <br/>
          <div id="choix2">{{$t('dashboard.arrive')}}</div>
          <select name="ville arrivé" id="villea">
              <option value="Peu importe">{{$t('dashboard.direction')}}</option>
              <option >{{$t('dashboard.lemans')}}</option>
              <option >{{$t('dashboard.paris')}}</option>
              <option >{{$t('dashboard.nantes')}}</option>
              <option >{{$t('dashboard.lyon')}}</option>
              <option >{{$t('dashboard.lille')}}</option>
              <option >{{$t('dashboard.bordeaux')}}</option>
              <option >{{$t('dashboard.marseille')}}</option>
              <option >{{$t('dashboard.toulouse')}}</option>
          </select>
          <img src="../../public/img/fleches1.png" alt="échanger ville départ et arrivée" height="16" width="16" v-on:click="inverseVille()" v-on:mouseover="animation1()" v-on:mouseout="animation2()" id="fleches">
          <br/>
          <input type="text" id="newVille" name="newVille">
          <button id="bouton" type="button" v-on:click="ajoutVille()">{{$t('dashboard.aville')}}</button>
          <br/>
          <p id="test"></p>
          <button id="bouton" type="button" v-on:click="choix()">{{$t('dashboard.valide')}}</button>

        </card>
      </div>

    </div>

  </div>

</template>


<script>
  import LineChart from '@/components/Charts/LineChart';
  import BarChart from '@/components/Charts/BarChart';
  import * as chartConfigs from '@/components/Charts/config';
  import TaskList from './Dashboard/TaskList';
  import UserTable from './Dashboard/UserTable';
  import config from '@/config';
  import JsonLeMans from '../../meteo/meteo-lemans.json';
  import SidebarLink from "../components/SidebarPlugin/SidebarLink";
  //import meteochart from '@/components/Charts/MeteoChart';

  export default {
    components: {
      LineChart,
      BarChart,
      TaskList,
      SidebarLink,
      UserTable
    },
    data() {
      return {
        JsonMeteo : null,
        Jsonlemans : JsonLeMans,
        filtreOn : false,
        villed : "Le Mans",
        villea : "Peu importe",
        longitude : 0.196944,
        latitude : 48.004167,
        theUrl : null,
        inverser : false,
        plus : new Array(),
        bigLineChart: {
          allData: [
            [100, 70, 90, 70, 85, 60, 75, 60, 90, 80, 110, 100],
            [80, 120, 105, 110, 95, 105, 90, 100, 80, 95, 70, 120],
            [60, 80, 65, 130, 80, 105, 90, 130, 70, 115, 60, 130]
          ],
          activeIndex: 0,
          chartData: null,
          extraOptions: chartConfigs.purpleChartOptions,
          gradientColors: config.colors.primaryGradient,
          gradientStops: [1, 0.4, 0],
          categories: []
        },
        purpleLineChart: {
          extraOptions: chartConfigs.purpleChartOptions,
          chartData: {
            labels: ['JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
            datasets: [{
              label: "Data",
              fill: true,
              borderColor: config.colors.primary,
              borderWidth: 2,
              borderDash: [],
              borderDashOffset: 0.0,
              pointBackgroundColor: config.colors.primary,
              pointBorderColor: 'rgba(255,255,255,0)',
              pointHoverBackgroundColor: config.colors.primary,
              pointBorderWidth: 20,
              pointHoverRadius: 4,
              pointHoverBorderWidth: 15,
              pointRadius: 4,
              data: [80, 100, 70, 80, 120, 80],
            }]
          },
          gradientColors: config.colors.primaryGradient,
          gradientStops: [1, 0.2, 0],
        },
        greenLineChart: {
          extraOptions: chartConfigs.greenChartOptions,
          chartData: {
            labels: ['JUL', 'AUG', 'SEP', 'OCT', 'NOV'],
            datasets: [{
              label: "My First dataset",
              fill: true,
              borderColor: config.colors.danger,
              borderWidth: 2,
              borderDash: [],
              borderDashOffset: 0.0,
              pointBackgroundColor: config.colors.danger,
              pointBorderColor: 'rgba(255,255,255,0)',
              pointHoverBackgroundColor: config.colors.danger,
              pointBorderWidth: 20,
              pointHoverRadius: 4,
              pointHoverBorderWidth: 15,
              pointRadius: 4,
              data: [90, 27, 60, 12, 80],
            }]
          },
          gradientColors: ['rgba(66,134,121,0.15)', 'rgba(66,134,121,0.0)', 'rgba(66,134,121,0)'],
          gradientStops: [1, 0.4, 0],
        },
        blueBarChart: {
          extraOptions: chartConfigs.barChartOptions,
          chartData: {
            labels: ['USA', 'GER', 'AUS', 'UK', 'RO', 'BR'],
            datasets: [{
              label: "Countries",
              fill: true,
              borderColor: config.colors.info,
              borderWidth: 2,
              borderDash: [],
              borderDashOffset: 0.0,
              data: [53, 20, 10, 80, 100, 45],
            }]
          },
          gradientColors: config.colors.primaryGradient,
          gradientStops: [1, 0.4, 0],
        }
      }
    },
    props: {
      title: {
        type: String,
        default: "QuipoVille"
      },
      backgroundColor: {
        type: String,
        default: "vue"
      },
    },
    computed: {
      enableRTL() {
        return this.$route.query.enableRTL;
      },
      isRTL() {
        return this.$rtl.isRTL;
      },
      bigLineChartCategories() {
        return this.$t('dashboard.chartCategories');
      }
    },
    methods: {
      httpGet(theUrl)
      {
          var xmlHttp = new XMLHttpRequest();
          xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
          xmlHttp.send( null );
          return xmlHttp.responseText;
      },

      initBigChart(index) {
        let chartData = {
          datasets: [{
            fill: true,
            borderColor: config.colors.primary,
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: config.colors.primary,
            pointBorderColor: 'rgba(255,255,255,0)',
            pointHoverBackgroundColor: config.colors.primary,
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: this.bigLineChart.allData[index]
          }],
          labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
        }
        this.$refs.bigChart.updateGradients(chartData);
        this.bigLineChart.chartData = chartData;
        this.bigLineChart.activeIndex = index;
      },
      affinfmeteo : function(nb){
        if(this.filtreOn == false){
          if(this.JsonMeteo != null){
              var texte = "<div class='texteinfo'><h3> Meteo de "+this.JsonMeteo['fcst_day_'+ nb]['day_long']+"</h3>";
              //var texte = " <card style='width: 17rem;'><div slot='header' >Meteo de " + this.JsonMeteo['fcst_day_'+ nb]['day_long'] + "</div>";
              texte +="Min : " + this.JsonMeteo['fcst_day_'+ nb]['tmin'] + "°C  Max :" + this.JsonMeteo['fcst_day_'+ nb]['tmax'] + "°C<br></br>";
              texte += "<table>";
              for(var i=0;i<24;i+=2){
                texte+="<tr><td>"+i+"H00</td><td><img src='" + this.JsonMeteo['fcst_day_'+nb]['hourly_data'][i+'H00']['ICON'] + "'></td><td>"+this.JsonMeteo['fcst_day_'+nb]['hourly_data'][i+'H00']['TMP2m']+"°C</td></tr>";

              }
              texte += "</table>";
              this.filtreOn=true

              document.getElementById('detail_meteo').innerHTML = texte +"<br></div>";
              document.getElementById('filtre_gris').style.display = 'inline'
              document.getElementById('detail_meteo').style.display = 'inline'
          }


        }
      },
      clicSurFiltre : function(){
        if(this.filtreOn===true){
          this.filtreOn=false;
          document.getElementById('filtre_gris').style.display = 'none'
          document.getElementById('detail_meteo').style.display = 'none'
        }
      },
      chargerMeteo(ville){
        var JsonMeteo;
        switch(ville){
          case "Le Mans": JsonMeteo = JSON.parse(this.httpGet("https://www.prevision-meteo.ch/services/json/lat=48.000lng=0.2"));break;
          case "Paris" : JsonMeteo = JSON.parse(this.httpGet("https://www.prevision-meteo.ch/services/json/lat=48.8534lng=2.3488"));break;
          default : JsonMeteo = null;
        }
        
        //console.log(this.JsonMeteo);
        //estDeroule = [0,0,0,0,0]
        if(JsonMeteo != null){
            for(var i=0;i<5;i++){
              document.getElementById("meteo"+i).innerHTML = JsonMeteo['fcst_day_'+i]['day_short']/* + " : "+ json['fcst_day_'+i]['condition'] + " // Tmin : " + json['fcst_day_'+i]['tmin']+"°C Tmax : " + json['fcst_day_'+i]['tmax']+ "°C"*/;
              document.getElementById("imeteo"+i).setAttribute("src", JsonMeteo['fcst_day_'+i]['icon']);
            }
        }
      console.log("test");
      },
      choix(){
          this.villea = document.getElementById("villea").value;
          console.log("ville départ = " + this.villed + "ville arrivé = "+ this.villea)
          if(this.villea == this.villed){
              alert(this.$t('dashboard.mville'));
          }
          else if(this.inverser == true){
              if(this.villea == "Peu importe"){
                  this.lancea(this.villed);
              }
              else{
                  this.lance(this.villea, this.villed);
              }
          }
          else{
              if(this.villea == "Peu importe"){
                  this.lanced(this.villed);
              }
              else{
                  this.lance(this.villed, this.villea);
              }
          }
      },

      lance(villed, villea) {
          this.theURL = "https://public-api.blablacar.com/api/v2/trips?fn="+ villed +"&tn="+ villea +"&key=cZ1QJSVV5ruMIZiVshHT7jsYy6of6Uwv"
          this.search()
      },

      lanced(villed) {
          this.theURL = "https://public-api.blablacar.com/api/v2/trips?fn="+ villed +"&key=cZ1QJSVV5ruMIZiVshHT7jsYy6of6Uwv"
          this.search()
      },

      lancea(villea){
          this.theURL = "https://public-api.blablacar.com/api/v2/trips?tn="+ villea +"&key=cZ1QJSVV5ruMIZiVshHT7jsYy6of6Uwv"
          this.search()
      },


      logArrayElements(element, index, array) {
          array[index] = "<img src=\"../img/plus1.png\" alt=\"plus d'infos sur le trajet\" id=\"plus"+ index + "\" height=\"16\" width=\"16\" v-on:click=\"plusInfos(" + index + ")\" v-on:mouseover=\"animationp1(" + index + ")\" v-on:mouseout=\"animationp2(" + index + ")\" >"
          console.log("a[" + index + "] = " + array[index]);
      },

      search(){
          var json = JSON.parse(this.httpGet(this.theURL))
          var text = "<table style='width:100%'><tr><th></th><th>" + this.$t('dashboard.depart') + "</th><th>" + this.$t('dashboard.arrive') + "</th></tr>";
          var taille = json['trips'].length
          console.log(taille)
          
          var i = 0

          for(i = 0; i < taille; i++){
              this.plus.push(undefined)
          }

          this.plus.forEach(this.logArrayElements);
          
          for(i = 0; i < taille; i++){
              text += "<tr><th>" + i + "<\th><th>" + json['trips'][i.toString()]['departure_place']['city_name'] + "</th><th>" + json['trips'][i.toString()]['arrival_place']['city_name'] + this.plus[i] +"</th></tr>";
          }
          text += "</table>";
          document.getElementById("test").innerHTML = text
      },

      inverseVille(){
          if(this.inverser == false){
              this.inverser = true;
              document.getElementById("choix1").innerHTML= this.$t('dashboard.arrive');
              document.getElementById("choix2").innerHTML= this.$t('dashboard.depart');
          }
          else{
              this.inverser = false;
              document.getElementById("choix1").innerHTML= this.$t('dashboard.depart');
              document.getElementById("choix2").innerHTML= this.$t('dashboard.arrive');
          }
      },

      animation1(){
          document.getElementById("fleches").src=('../img/fleches2.png')
      },

      animation2(){
          document.getElementById("fleches").src=('../img/fleches1.png')
      },

      animationp1(i){
          var temp = "plus"+i
          console.log(temp)
          document.getElementById(temp).src=('../img/plus2.png');

      },

      animationp2(i){
          var temp = "plus"+i
          console.log(temp)
          document.getElementById(temp).src=('../img/plus1.png')
      },

      plusInfos(i){
          console.log("tu as cliqué sur le plus " + i)
          document.getElementById("texte"+i).innerHTML = "Départ à "+json['trips'][i]['departure_place']['city_name']+", "+json['trips'][i]['departure_place']['address']+" le "+json['trips'][i]['departure_date']+",arrivée = " + json['trips'][i]['arrival_place']['city_name']
      },

      ajoutVille(){
        var liste = document.getElementById("villea").innerHTML;
        var newV = document.getElementById("newVille").value;
        document.getElementById("villea").innerHTML = liste + "<option name=\""+newV+"\" selected >"+newV+"</option>";
        this.choix();
      },

        lanceTwitter(){
        var ville = document.getElementById("bouton-select-ville").value;
        var twi = document.getElementById("twi");
        twi.innerHTML = "";
        //alert("Selection = "+ville)
        switch(ville){
          case "Le Mans":
            twi.innerHTML = "<a class=\"twitter-timeline\" data-height=\"700\" data-theme=\"dark\" href=\"https://twitter.com/QuipoV/lists/vos-news-le-mans?ref_src=twsrc%5Etfw\">A Twitter List by QuipoV</a>";
          break;
          case "Paris":
            twi.innerHTML = "<a class=\"twitter-timeline\" data-height=\"700\" data-theme=\"dark\" href=\"https://twitter.com/QuipoV/lists/paris?ref_src=twsrc%5Etfw\">A Twitter List by QuipoV</a>";
          break;
          case "Nantes":
            twi.innerHTML = "<a class=\"twitter-timeline\" data-height=\"700\" data-theme=\"dark\" href=\"https://twitter.com/QuipoV/lists/nantes?ref_src=twsrc%5Etfw\">A Twitter List by QuipoV</a>";
          break;
          case "Lyon":
            twi.innerHTML = "<a class=\"twitter-timeline\" data-height=\"700\" data-theme=\"dark\" href=\"https://twitter.com/QuipoV/lists/lyon?ref_src=twsrc%5Etfw\">A Twitter List by QuipoV</a>";
          break;
          case "Lille":
            twi.innerHTML = "<a class=\"twitter-timeline\" data-height=\"700\" data-theme=\"dark\" href=\"https://twitter.com/QuipoV/lists/lille?ref_src=twsrc%5Etfw\">A Twitter List by QuipoV</a>";
          default : break;
        }
      },
      // more on using wikipedia action=query https://www.mediawiki.org/wiki/API:Query
      fetchResults(langue) {
          var searchQuery = document.getElementById("bouton-select-ville").value;
          var json = JSON.parse(this.httpGet(`https://${langue}.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=1&srsearch=${searchQuery}`));
          var search = json.query.search;
          var json2 = JSON.parse(this.httpGet(`https://${langue}.wikipedia.org/w/api.php?action=query&format=json&origin=*&prop=extracts&titles=${searchQuery}&redirects=1&exintro=1&explaintext=1`));
          var pages = json2.query.pages;
          var text = pages[search[0].pageid];
          var json3 = JSON.parse(this.httpGet(`https://${langue}.wikipedia.org/w/api.php?action=query&format=json&origin=*&prop=coordinates&titles=${searchQuery}&utf8=1&colimit=1&coprop=`));
          this.longitude = json3.query.pages[search[0].pageid].coordinates[0].lon;
          this.latitude = json3.query.pages[search[0].pageid].coordinates[0].lat;
          document.getElementById("titreWiki").href = `https://${langue}.wikipedia.org/wiki/${search[0].title}`;
          document.getElementById("titreWiki").target = "_blank";
          document.getElementById("titreWiki").innerHTML = search[0].title;
          document.getElementById("descWiki").innerHTML = text.extract;
      },

      loadMapScenario() {
        var map = new Microsoft.Maps.Map(document.getElementById('myMap'), {
            /* No need to set credentials if already passed in URL */
            center: new Microsoft.Maps.Location(this.latitude, this.longitude),
            mapTypeId: Microsoft.Maps.MapTypeId.aerial,
            zoom: 10
        });
      },

      handleBouton() {
        var langue = document.getElementById("bouton-select-langue");
        this.i18n = this.$i18n;
        this.i18n.locale = langue.options[langue.selectedIndex].value;
        this.villed = document.getElementById("bouton-select-ville").value;
        document.getElementById("villed").innerHTML = document.getElementById("bouton-select-ville").value;
        this.fetchResults(langue.options[langue.selectedIndex].value);
        this.lanceTwitter();
        this.loadMapScenario();
      }
    },
    mounted() {
      this.lanceTwitter();
      this.fetchResults("fr");
      this.loadMapScenario();
      //temporaire
      //this.chargerMeteo("Le Mans")
      
      //
      this.i18n = this.$i18n;
      if (this.enableRTL) {
        this.i18n.locale = 'ar';
        this.$rtl.enableRTL();
      }
      this.initBigChart(0);

    },
    beforeDestroy() {
      if (this.$rtl.isRTL) {
        this.i18n.locale = 'fr';
        this.$rtl.disableRTL();
      }
    }
  };
</script>

<style>
  div.texteinfo{

    margin-left: auto;
    margin-top: auto;
    color: #c9c9bc;
  }
  div.centre {
      position:absolute;
      left: 50%;
      top: 15%;
      width: auto;
      height: auto;
      margin-left: -100px;
      margin-top: -100px;
      background-color: #27293d;
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

  #bouton-select-ville{
    margin-left: 15%;
    margin-top: 5%;
    max-width: 75%;
    text-align: left;
  }

  #bouton-select-langue{
    margin-left: 15%;
    margin-top: 5%;
    max-width: 75%;
    text-align: left;
  }

  #bouton-contact{
    margin-left: 15%;
    margin-top: 15%;
    max-width: 75%;
    text-align: left;
  }

  #bouton-ville{
    margin-left: 15%;
    margin-top: 5%;
    max-width: 75%;
    text-align: left;
  }
  #bouton-langue{
    margin-left: 15%;
    margin-top: 5%;
    max-width: 75%;
    text-align: left;
  }
  #apropos{
    margin-left: 5%;
    margin-right: 5%;
    margin-top: 90%;
    text-align: left;
    padding: 5%;
    border: solid;
  }

  .boxSidebar{
    margin-top: 5%;
    margin-left: 5%;
    margin-right: 5%;
    color: white;
    border: solid;
  }
  
  .sidebar{
    margin-top: 3%;
  }

  .scrollbar{
    width:fit-content;
    height:200px;
    overflow: auto;
  }

</style>
