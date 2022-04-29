
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
          this.getAttribute('hashtags') || "",
          this.getAttribute('text') || "")
    }

    init(hashtags, text) {
      this.innerHTML = html(this.#buildURL(hashtags, text))
    }

    initWithUrl(url) {
      this.innerHTML = html(url)
    }

    static get observedAttributes() {
      return [ 'hashtags', 'text' ];
    }

    attributeChangedCallback(name, oldVal, newVal) {
        if (oldVal === newVal) { return }
        if (name === 'text') { this.init(this.getAttribute('hashtags') || "", newVal) }
        if (name === 'hashtags') { this.init(newVal, this.getAttribute('text') || "") }
    }

    #buildURL(hashtags, text) {
      let retVal = 'https://twitter.com/intent/tweet'
    
      const lang = String.locale
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
