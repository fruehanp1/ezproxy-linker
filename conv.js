// JavaScript Document
function newURL() {
  var p = '.scsu.idm.oclc.org';
  var u = document.convURL.input_url.value;
  var a = new Array();
  a = u.split('/');
  var s = "";
  var o = "";
  var f = "";
  var r = 'login.scsu.idm.oclc.org/login?url=';


  if (u !== "") {
    if (a[0] == "http:") {
      f = a[0] + '//' + a[2] + p;

      for (x = 3; x < a.length; x++) {
        s = s + '/' + a[x];
      }
      o = f + s;
      document.convURL.output_url.value = o;
    } else if (a[0] == "https:") {
      f = 'https://' + r + u;
      o = f;
      document.convURL.output_url.value = o;
    } else {
      f = 'http://' + a[0] + p;
      for (x = 1; x < a.length; x++) {
        s = s + '/' + a[x];
      }
      o = f + s;
      document.convURL.output_url.value = o;
    }
  } else {
    alert("Please Enter a valid URL!");
  }

}

function newDOI() {
  var d = document.convURL.input_doi.value;
  var o = 'http://dx.doi.org.scsu.idm.oclc.org/' + d;

  if (d != "") {
    document.convURL.output_url.value = o;
  } else {
    alert("Please Enter a DOI Name");
  }
}
