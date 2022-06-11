
function html(url) {
return `
<a class="nav-item nav-link" id="twitter" href="${url}">
<span class="fa-stack fa-1x">
<i class="fa-solid fa-circle fa-stack-2x"></i>
<i class="fab fa-twitter fa-stack-1x fa-inverse"></i>
</span>
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
      retVal += '?hashtags=' + hashtags
      retVal += '&text=' + encodeURI(text)
      const rootPath = window.location.protocol + '//' + window.location.host + window.location.pathname + '?lang=' + String.locale
      retVal += '&url=' + encodeURI(rootPath)
      return retVal
    }
    

}

export {Element as NavBarItemTwitter}

window.customElements.define('nav-bar-item-twitter', Element)
