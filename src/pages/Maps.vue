<template>
    <!--<card type="plain" title="Google Maps">
    </card>-->
      <div id="map" class="map"></div>
</template>
<script>
export default {
  methods: {
    initmap() {
        map = new OpenLayers.Map("map");
        var mapnik = new OpenLayers.Layer.OSM();
        map.addLayer(mapnik);
        map.setCenter(new OpenLayers.LonLat(13.41,52.52) // Centre de la carte
          .transform(
            new OpenLayers.Projection("EPSG:4326"), // transformation de WGS 1984
            new OpenLayers.Projection("EPSG:900913") // en projection Mercator sphérique
          ), 15 // Zoom level
        );
      }
  },
  mounted() {
    initmap();
}
};
</script>
<style>
#map { height: 180px; }
</style>
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
   integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
   crossorigin=""/>