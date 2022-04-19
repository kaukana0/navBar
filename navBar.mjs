/*
*/

function html(inject) {
return `
<!--link rel="stylesheet" href="redist/bootstrap/css/bootstrap.min.css">
<script src="./redist/bootstrap/js/bootstrap.bundle.min.js"></script-->


<nav class="navbar navbar-expand-sm">
<div class="container-fluid">

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nnn">
        <span class="navbar-toggler-icon">XX</span>
    </button>
    <div class="collapse navbar-collapse" id="nnn">
        <div class="navbar-nav mr-auto">
            ${inject}
        </div>
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
