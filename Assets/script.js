function getApi() {
  const requestUrl =
    "https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={94b065dddd2d854891cfd70dc2214df7}";

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // Use the console to examine the response
      console.log(data);
    });
}
fetchButton.addEventListener("click", getApi);

// local storage
