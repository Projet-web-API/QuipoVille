function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}   

estFiltre=false;
function afficherinfo(nb){
  if(estFiltre===false){
    if(json != null){
        texte = "---------------------------------<br><span class='nom_jour'>"+json['fcst_day_'+nb]['day_long']+"</span></br>---------------------------------</br>";
        texte +="</br>Min : " + json['fcst_day_'+nb]['tmin'] + "°C  Max :" + json['fcst_day_'+nb]['tmax'] + "°C</br>---------------------------------</br>";
        texte += "<table>";
        for(var i=0;i<24;i+=2){
          texte+="<tr><td>"+i+"H00</td><td><img src='" + json['fcst_day_'+nb]['hourly_data'][i+'H00']['ICON'] + "'></td><td>"+json['fcst_day_'+nb]['hourly_data'][i+'H00']['TMP2m']+"°C</td></tr>";

        }
        texte += "</table>";
    }
    estFiltre=true

    document.getElementById('detail_meteo').innerHTML = texte +"<br>---------------------------------<br>";
    document.getElementById('filtre_gris').style.display = 'inline'
    document.getElementById('detail_meteo').style.display = 'inline'
  }
}

function clicSurFiltre(){
  if(estFiltre===true){
    estFiltre=false;
    document.getElementById('filtre_gris').style.display = 'none'
    document.getElementById('detail_meteo').style.display = 'none'
  }
}
json = JSON.parse(httpGet("https://www.prevision-meteo.ch/services/json/lat=48.000lng=0.2"));
//estDeroule = [0,0,0,0,0]
if(json != null){
    for(var i=0;i<5;i++){
        document.getElementById("meteo"+i).innerHTML = json['fcst_day_'+i]['day_short']/* + " : "+ json['fcst_day_'+i]['condition'] + " // Tmin : " + json['fcst_day_'+i]['tmin']+"°C Tmax : " + json['fcst_day_'+i]['tmax']+ "°C"*/;
        document.getElementById("imeteo"+i).setAttribute("src", json['fcst_day_'+i]['icon']);
    }
}


//https://www.prevision-meteo.ch pour l'api
//https://www.prevision-meteo.ch/services
