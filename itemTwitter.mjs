
function html(url) {
return `
<a class="nav-item nav-link" id="tw" href="${url}">
<img src="./components/navBar/assets/twitter-square.svg" style="width: 2em; height: auto;"></img>
</a>
`}


class Element extends HTMLElement {

    constructor() {
        super()
        this.init(
          this.getAttribute('language') || "en",
          this.getAttribute('hashtags') || "",
          this.getAttribute('text') || "")
    }

    init(language, hashtags, text) {
      this.innerHTML = html(this.#buildURL(language, hashtags, text))
    }

    initWithUrl(url) {
      this.innerHTML = html(url)
    }

    #buildURL(lang, hashtags, text) {
      let retVal = 'https://twitter.com/intent/tweet'
    
      const currentLocationObject = window.location
      // we only need the root path of the URL
      const currentLocation = currentLocationObject.protocol + '//' + currentLocationObject.host + currentLocationObject.pathname + '?lang=' + lang
    
      retVal += '?hashtags=' + hashtags
      retVal += '&text=' + encodeURI(text)
      retVal += '&url=' + encodeURI(currentLocation)
    
      return retVal
    }
    

}

export {Element as NavBarItemTwitter}

window.customElements.define('nav-bar-item-twitter', Element)
