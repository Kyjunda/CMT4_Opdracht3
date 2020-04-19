var mymap = L.map('mapid').setView([51.220076, 4.420767], 13);

var basicmap = L.tileLayer('https://api.mapbox.com/styles/v1/thomas2408/ck7d8uuj10iv61imlee0whse7/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoidGhvbWFzMjQwOCIsImEiOiJjazNvdmhnNGswMzl5M21vaTdtdzE5NHo5In0.LJj3EBXwCVrEUyrubCnHZw', {
	id: 'mapbox.streets',
	style: "mapbox://styles/thomas2408/ck7d47c1h127f1il733iy4n68"
});

basicmap.addTo(mymap);

var Icon = L.icon({
  iconUrl: "/Icons/Marker.svg",
  

  iconSize:     [38, 95], // size of the icon

 
});




L.marker([51.220076, 4.420767], {icon: Icon}).addTo(mymap);