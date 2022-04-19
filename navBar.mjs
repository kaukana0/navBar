/*
*/

const html = `
<nav class="navbar navbar-expand-sm">
<div class="container-fluid">



<div id="embed-modal" data-role="dialog" class="modal fade">
<div class="modal-dialog">

    <!-- Modal content-->
    <div class="modal-content">
        <div class="modal-header">
            <h4 class="modal-title" translate="embed.title"></h4>
            <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>
        <div class="modal-body" id="embed-content">
            <!--Dynamic embed: -->
            &lt;iframe src="" height="768" width="1000"&gt;&lt;/iframe&gt;
            <slot name='content2'></slot>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal" translate="embed.close"></button>
        </div>
    </div>

</div>
</div>







    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nnn">
        <span class="navbar-toggler-icon">XX</span>
    </button>
    <div class="collapse navbar-collapse" id="nnn">
        <div class="navbar-nav mr-auto">
            <a class="nav-item nav-link" id="info" href="#">Info</a>


            <a class="nav-item social-button pointer nav-link d-flex justify-content-start align-items-center" id="embed-button" title="Embed this chart"
             data-bs-toggle="modal" data-bs-target="#embed-modal" href="#" />
            embed
            </a>

            <a class="nav-item nav-link" id="twitter" href="#">Twitter</a>
            <a class="nav-item nav-link" id="fb" href="#">FB</a>
        </div>
    </div>
</div>
</nav>
`


class MyElement extends HTMLElement {

	#$(elementId) {
		return this.shadowRoot.getElementById(elementId)
	}

	constructor() {
		super()

		this.attachShadow({ mode: 'open' })

        // this makes the content be outside the shadow dom, thus bootstrap js from there is used. 
        // not what we actually want. we want to include bootstrap (css and js) in the shadow dom.
        const template = document.createElement('template');
        template.innerHTML = "<slot name='content'></slot>"
        this.shadowRoot.appendChild(template.content.cloneNode(true))
        this.innerHTML += `<div slot='content'>${html}</div>`

        //this.template = document.createElement('template');
        //this.template.innerHTML = html
        //this.innerHTML += `<div slot='content'></div>`
    }
    
    #bla(attribute) {
        const content = this.getAttribute(attribute);
        if(content) {
            this.#$(attribute).innerHTML = this.getAttribute(attribute);
        }
    }
    
	connectedCallback() {
        //const that = this
        //setTimeout(function(){
        //    that.shadowRoot.appendChild(that.template.content.cloneNode(true))
        //}, 2000);
        //this.innerHTML += `<div slot='content'>${html}</div>`
        //this.#bla("twitter")
    }

	static get observedAttributes() {
		return [];
	}
}

window.customElements.define('nav-bar', MyElement)
