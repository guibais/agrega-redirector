window.onload = function() {
  window.location =
    "agrega://agrega.app/event/" + window.location.search.substr(8);
  setTimeout("window.location = 'http://agrega.app/Lojas';", 1000);
};
