
function html(url) {
return `
<a class="nav-item nav-link" id="tw" href="${url}">Tw</a>
`}

/*
text - en.json
link - config or buildLocationURL(String.locale)
  lang, hashtags, text
tags - cfg
*/

  

class MyElement extends HTMLElement {

    constructor() {
        super()
        console.log( this.getAttribute('hashtags'))
        this.innerHTML = html(this.#buildLocationURL())
    }
    
    connectedCallback() {
    }

    static get observedAttributes() {
        return ['url'];
    }

    #buildLocationURL (lang, hashtags, text) {
      let retVal = 'https://twitter.com/intent/tweet'

      let currentLocationObject = window.location
      // we only need the root path of the URL
      let currentLocation = currentLocationObject.protocol + '//' + currentLocationObject.host + currentLocationObject.pathname + '?lang=' + lang

      retVal += '?hashtags=' + hashtags
      retVal += '&text=' + encodeURI(text)
      retVal += '&url=' + encodeURI(currentLocation)

      return retVal
    }
}

window.customElements.define('nav-bar-item-twitter', MyElement)
