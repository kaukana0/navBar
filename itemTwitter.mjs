
function html(url) {
return `
<a class="nav-item nav-link" id="tw" href="#">Tw</a>
`}

/*
let returnURL = 'https://twitter.com/intent/tweet'

returnURL += '?hashtags=' + hashtags.join(',')
// returnURL += '&original_referer='+original_referer;
returnURL += '&text=' + encodeURI(text)
if (via) {
  returnURL += '&via=' + via
}
returnURL += '&url=' + encodeURI(url)


function buildLocationURL (lang) {
    let currentLocationObject = window.location
    // we only need the root path of the URL
    let currentLocation = currentLocationObject.protocol + '//' + currentLocationObject.host + currentLocationObject.pathname + '?lang=' + lang
  
    return currentLocation
  }
*/

  

class MyElement extends HTMLElement {

    constructor() {
        super()
        this.innerHTML = html(this.getAttribute('url'))
    }
    
    connectedCallback() {
    }

    static get observedAttributes() {
        return ['url'];
    }
}

window.customElements.define('nav-bar-item-twitter', MyElement)
