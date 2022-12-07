/*
depends on bootstrap 5.

We need to operate in light DOM because of bootstrap.
That means two things:
- using the "random-number-id hack" for any elements we need to refer to
- imitating the shadow-DOM slot mechanism manually, because the content of the tag goes into the modal's content area.

TODO: translations
 */


/*
returns an id and 2 html code fragments.
- one is a button that goes into the navbar.
- another is a div containing the bootstrap modal.
- the id refers to the content area of the modal html, so that's where this element's children go.
that's basically an imitation of the standard slot mechanism.
*/
function html(header, headerStyle, symbol, hasClose) {
    const rndId = "some-modal" + Math.floor(Math.random() * 10000);   // make uniqe in case this is used more than once. no shadow DOM :-(

    const footer = hasClose ? `
        <div class="modal-footer">
            <button type="button" class="btn btn-warning" data-bs-dismiss="modal">Close</button>
        </div>
    ` : ""

    return [rndId+"-body",
    `
    <div id="${rndId}" data-role="dialog" class="modal fade">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title" style="${headerStyle}">${header}</h1>
                    <button type="button" class="btn-close close" data-bs-dismiss="modal"></button>
                </div>
                <div id="${rndId}-body" class="modal-body"></div>
                ${footer}
            </div>
        </div>
    </div>`
    ,
    `<a class="nav-item social-button pointer nav-link d-flex" id="embed-button" data-bs-toggle="modal" data-bs-target="#${rndId}" href="#" style="witdh:100px;">
        <span class="fa-stack fa-1x">
            <i class="fa-solid fa-circle fa-stack-2x"></i>
            <i class="${symbol} fa-stack-1x fa-inverse"></i>
        </span>
    </a>
    `]
}

class Element extends HTMLElement {
    constructor() {
        super()
        const children = this.#copyChildren()   // think of the children
        const header = this.getAttribute('headerText') || ""
        const headerStyle = this.getAttribute('headerStyle') || ""
        const [id, content, button] = html(header, headerStyle, this.getAttribute('symbol'), this.hasAttribute('closeButton'))
        this.innerHTML = button     // replaces the children of this, goes into the navbar
        document.body.insertAdjacentHTML('beforeend', content); // should not be nested, otherwise there might occur issues like "Bootstrap modal appearing under background"
        window.requestAnimationFrame(() => {
            document.getElementById(id).appendChild(children)   // children go into modal's content area
        })
    }

    #copyChildren() {
        const fragment = document.createDocumentFragment();
        for (let i = 0; i <	this.children.length; i++) {
            fragment.append(this.children[i].cloneNode(true))
        }
        return fragment
    }
}

window.customElements.define('nav-bar-item-modal', Element)