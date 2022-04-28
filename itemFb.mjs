
function html(url) {
return `
<a class="nav-item nav-link" id="fb" href="${url}">
<img src="./components/navBar/assets/facebook.svg" style="width: 2em; height: auto;"></img>
</a>
`}


class Element extends HTMLElement {

    constructor() {
        super()
        if(this.getAttribute('url')) {
            this.innerHTML = html(this.getAttribute('url'))
        } else {
            this.init("")
        }
    }
        
    init(text) {
        this.innerHTML = html(this.#buildURL(text))
    }

    #buildURL(text) {
        return "https://www.facebook.com/sharer/sharer.php?u='" +
            encodeURIComponent(window.location.href) +
            '&t=' +
            encodeURIComponent(text)
    }
  
    
}

export {Element as NavBarItemFB}

window.customElements.define('nav-bar-item-fb', Element)
