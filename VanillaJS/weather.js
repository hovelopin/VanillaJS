const COORDS = 'coords';

function saveCoords(coordsObj){
  localStorage.setItem(COORDS,JSON.stringify());
}
function handleGeoSuccess(position){
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude,
    longitude
  };
  saveCoords(coordsObj);
}

function handleGeoError(){
  console.log("Cant access Geo Location");
}

function askForCoords(){
  navigator.geolocation.getCurrentPosition(handleGeoSuccess,handleGeoError)
}

function loadCoords(){
  const loadedCoords=localStorage.getItem(COORDS);
  if(loadedCoords === null){
    askForCoords();
  }else {
    //getWeather
  }
}

function init(){
  loadCoords();
}

init();