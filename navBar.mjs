/*
*/


// css & js not referenced here, because bootstrap js doesn't work within shadow dom.
// this component is in the light dom and uses what's available there.
function html(inject) {
return `
<nav class="navbar navbar-expand-sm navbar-light">

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nnn">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="nnn">
        <div class="navbar-nav mr-auto">
            ${inject}
        </div>
    </div>
</nav>
`}


class MyElement extends HTMLElement {

	constructor() {
		super()
        this.innerHTML = html(this.innerHTML)
    }
    
	connectedCallback() {
    }

	static get observedAttributes() {
		return [];
	}
}

window.customElements.define('nav-bar', MyElement)
