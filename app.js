function checkACookieExists() {
  if (
    document.cookie.split(";").some((item) => item.trim().startsWith("gtmlpp="))
  ) {
    return "true";
  } else {
    return "false";
  }
}

function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

var checkE = checkACookieExists();
if (checkE == "false") {
  // cookie does not exist
  console.log("cookie does not exist");
  document.cookie = "gtmlpp=" + window.location.pathname;
  document.getElementById("baslik").innerHTML =
    "ilk geldiğim sayfa = " + getCookie("gtmlpp");
} else {
  document.getElementById("baslik").innerHTML =
    "ilk geldiğim sayfa = " + getCookie("gtmlpp");
}

var elem = document.getElementById("ck");

elem.innerHTML = "href = " + window.location.href;
elem.innerHTML =
  elem.innerHTML + "<br/>" + "window.location.href = " + window.location.href;
elem.innerHTML =
  elem.innerHTML +
  "<br/>" +
  "window.location.pathname = " +
  window.location.pathname;
elem.innerHTML =
  elem.innerHTML +
  "<br/>" +
  "(query params) window.location.search = " +
  window.location.search;
elem.innerHTML =
  elem.innerHTML + "<br/>" + "window.location.hash = " + window.location.hash;
