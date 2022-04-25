
function html(url) {
return `
<a class="nav-item nav-link" id="tw" href="${url}">Tw</a>
`}


class MyElement extends HTMLElement {

    constructor() {
        super()
    }

    init(language, hashtags, text) {
      this.innerHTML = html(this.#buildLocationURL(language, hashtags, text))
    }

    initWithUrl(url) {
      this.innerHTML = html(url)
    }

    #buildLocationURL(lang, hashtags, text) {
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

export {MyElement as NavBarItemTwitter}

window.customElements.define('nav-bar-item-twitter', MyElement)
