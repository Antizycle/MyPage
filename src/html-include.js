function addHTML() {
    let fileName, xmlHttp;
    let includeEl = document.getElementById('include');

    fileName = includeEl.getAttribute("w3-include-html");
       
    if (fileName) {
        xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function () {
            if (this.readyState == 4) {
                if (this.status == 200) {
                    includeEl.innerHTML = this.responseText;
                }
                if (this.status == 404) {
                    includeEl.innerHTML = "Page not found.";
                }
                includeEl.removeAttribute("w3-include-html");
            }
        }
        xmlHttp.open("GET", fileName, true);
        xmlHttp.send();
        
        return;
    }
}

 addHTML();