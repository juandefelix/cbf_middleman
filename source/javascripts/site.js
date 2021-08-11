
window.bootstrap = require('bootstrap/dist/js/bootstrap.bundle.js');

var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})


var popover = new bootstrap.Popover(document.querySelector('[data-bs-toggle="popover"]'), {
  container: 'body'
})
