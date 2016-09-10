document.addEventListener("DOMContentLoaded", function(event) {
  console.log('document ready...');
  let element = document.getElementById('clickeable');
  element.onclick = getData;
});

function getData() {
  fetch('http://138.68.3.211:3000/example', {
    method: 'get'
  }).then(function(response) {
    return response.json();
  }).then(function(responseJson) {
    console.debug('responseJson: ' + responseJson.data);
    let element = document.getElementById('content');
    element.innerHTML = responseJson.data;
  });
};
