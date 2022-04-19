
function html(url) {
return `
<a class="nav-item nav-link" id="fb" href="#">FB</a>
`}


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

window.customElements.define('nav-bar-item-fb', MyElement)
