
function html(url) {
return `
<a class="nav-item nav-link" id="fb" href="${url}">
<span class="fa-stack fa-1x">
<i class="fa-solid fa-circle fa-stack-2x"></i>
<i class="fa-brands fa-facebook-f fa-stack-1x fa-inverse"></i>
</span>
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

    static get observedAttributes() {
        return [ 'text' ];
    }

    attributeChangedCallback(name, oldVal, newVal) {
        if (oldVal === newVal) { return }
        if (name === 'text') { this.init(newVal) }
    }

    #buildURL(text) {
        return "https://www.facebook.com/sharer/sharer.php?u=" +
            encodeURIComponent(window.location.href) +
            '&t=' +
            encodeURIComponent(text)
    }
  
    
}

window.customElements.define('nav-bar-item-fb', Element)
