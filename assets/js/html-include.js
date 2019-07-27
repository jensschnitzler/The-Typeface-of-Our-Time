function includeHTML() {
  console.log( 'includeHTML' );
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  //z = document.getElementsByClassName("markdown-body");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {
            elmnt.innerHTML = this.responseText;
          }
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
          filterContent(); // custom function
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }
}

function filterContent() {
  console.log( 'filterContent' );
  var z, i, elmnt, filterVal, source, clone;
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    if (elmnt.hasAttribute("data-filter")) {
      filterVal = elmnt.getAttribute("data-filter");
      if (filterVal) {
        console.log( 'filterVal ' + filterVal );
        source = elmnt.getElementsByClassName( String(filterVal) );
        console.log( 'source.length ' + source.length );
        Object.assign(clone, source[0].textContent);
        console.log( 'source[0] ' + source[0].textContent );
        elmnt.innerHTML = clone;
      }
    }
  }
}

includeHTML();
filterContent();
