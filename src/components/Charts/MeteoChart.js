
export default {
  name: 'meteochart',
  mixins: [mixins.reactiveProp],
  props: {

  },
  data() {
    return {
      ctx: null
    };
  },
  methods: {
  },
  mounted() {
    //estDeroule = [0,0,0,0,0]
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "https://www.prevision-meteo.ch/services/json/lat=48.000lng=0.2", false ); // false for synchronous request
    xmlHttp.send( null );
    json = JSON.parse(xmlHttp.responseTex);

    if(json != null){
        for(var i=0;i<5;i++){
            document.getElementById("meteo"+i).innerHTML = json['fcst_day_'+i]['day_short']/* + " : "+ json['fcst_day_'+i]['condition'] + " // Tmin : " + json['fcst_day_'+i]['tmin']+"°C Tmax : " + json['fcst_day_'+i]['tmax']+ "°C"*/;
            document.getElementById("imeteo"+i).setAttribute("src", json['fcst_day_'+i]['icon']);
        }
    }

  }
};
