let includeEl = document.getElementById('include');
const link = getPageName();

switch(link) {
    case 'about': {
        includeEl.setAttribute('fetch-html','./src/pages/about.html');
        break;
    }
    case 'works': {
        includeEl.setAttribute('fetch-html','./src/pages/works.html');
        break;
    }
    case 'contacts': {
        includeEl.setAttribute('fetch-html','./src/pages/contacts.html');
        break;
    }
    default: {
        includeEl.attributes['fetch-html'] = './src/pages/about.html';
        break;
    }
}

function addHTML() {
    let fileName;

    fileName = includeEl.getAttribute("fetch-html");
       
    if (fileName) {

        fetch(fileName)
        .then(response => {
            return response.text();
        })
        .then(pageBody => {
            includeEl.innerHTML = pageBody;
        })
        .catch(error => {
            includeEl.textContent = (error, "404: Page is not Found");
        });

        includeEl.removeAttribute("fetch-html");
        
        return;
    }
}

function getPageName() {
    const string = location.search.slice(1).split('&', 1);
    let value = 'about';
    if (/^[a-z=]*$/.test(string[0])) {
        value = string[0].split('=', 2);
    }
    return value[1];
}

 addHTML();