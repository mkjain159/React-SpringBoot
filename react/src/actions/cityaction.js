
export function fetchCityist(a) {
  return {
    type: "CITY",
    a
  };
}

export function setView(view) {
  return {
    type: "VIEW",
    view
  };
}
export function setCityDetail(cityDetail) {
  return {
    type: "DETAIL",
    cityDetail
  };
}


export function fetchDetail(id) {
  return (dispatch) => {
    let url = "http://localhost:8081/city/"+id;
    fetch(url)
        .then((response) => {

          return response;
        })
        .then(response => response.text())
        .then(response => dispatch(setCityDetail(response)));
  };
}
export function setScreenView(view){
  return (dispatch) => {
    dispatch(setView(view));
  };
}

export function fetchCity() {
  return (dispatch) => {
    let url = "http://localhost:8081/city";
    fetch(url)
        .then((response) => {

          return response;
        })
        .then(response => response.json())
        .then(response => dispatch(fetchCityist(response)));
  };
}
export function addCity() {
  return (dispatch) => {
    let url = "http://localhost:8081/city";
    let name = document.getElementById("name").value;
    let country = document.getElementById("country").value;
    let state = document.getElementById("state").value;
    let requestBody ={"name":name,"country":country,"state":state};
    requestBody = JSON.stringify(requestBody)
    fetch(url, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: requestBody
    }).then(response => response.json())
    .then(response => dispatch(fetchCityist(response)));
}}
