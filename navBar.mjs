/*
*/


// css & js not referenced here, because bootstrap js doesn't work within shadow dom.
// this component is in the light dom and uses what's available there.
function html(inject) {
return `
<nav class="navbar navbar-expand-sm navbar-light">

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#id5fd24c7e">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="id5fd24c7e">
        <div class="navbar-nav mr-auto">
            ${inject}
        </div>
    </div>
</nav>

<style>
.fa-circle {color: #044aa3;}
/* spacing between items */
.nav-link {
	padding-left:0 !important;
	padding-right:0 !important;
}
</style>
`}


class Element extends HTMLElement {

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

window.customElements.define('nav-bar', Element)
