$(document).ready(function() {
  console.log('document ready...');
  $('#clickeable').click(getData);
});

function getData() {
  $.get('http://138.68.3.211:3000/example').then(function(responseJson) {
    console.debug('responseJson.data: ' + responseJson.data);
    let element = document.getElementById('content');
    element.innerHTML = responseJson.data;
  });
};
