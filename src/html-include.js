let includeEl = document.getElementById('include');
const link = getPageName();

switch(link) {
    case 'about': {
        includeEl.setAttribute('w3-include-html','./src/pages/about.html');
        break;
    }
    case 'works': {
        includeEl.setAttribute('w3-include-html','./src/pages/works.html');
        break;
    }
    case 'contacts': {
        includeEl.setAttribute('w3-include-html','./src/pages/contacts.html');
        break;
    }
    default: {
        includeEl.attributes['w3-include-html'] = './src/pages/about.html';
        break;
    }
}

function addHTML() {
    let fileName, xmlHttp;

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

function getPageName() {
    const string = location.search.slice(1).split('&', 1);
    let value = 'about';
    console.log(string);
    if (/^[a-z=]*$/.test(string[0])) {
        value = string[0].split('=', 2);
        console.log(value);
    }
    return value[1];
}

 addHTML();