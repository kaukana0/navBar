/*
depends on bootstrap 5.

TODO: translations
 */

function html(header, symbol, hasClose) {
    const rndId = "some-modal" + Math.floor(Math.random() * 100);   // make uniqe in case this is used more than once. no shadow DOM :-(

    const footer = hasClose ? `
        <div class="modal-footer">
            <button type="button" class="btn btn-warning" data-bs-dismiss="modal">Close</button>
        </div>
    ` : ""

    return `
    <div id="${rndId}" data-role="dialog" class="modal fade">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">${header}</h4>
                <button type="button" class="btn-close close" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body"></div>
            ${footer}
        </div>
        </div>
    </div>

    <a class="nav-item social-button pointer nav-link d-flex justify-content-start align-items-center" id="embed-button" data-bs-toggle="modal" data-bs-target="#${rndId}" href="#" style="witdh:100px;">
        <span class="fa-stack fa-1x">
            <i class="fa-solid fa-circle fa-stack-2x"></i>
            <i class="${symbol} fa-stack-1x fa-inverse"></i>
        </span>
    </a>
`}

class Element extends HTMLElement {
    constructor() {
        super()

        const childrenBeforeReplace = this.#copyChildren()  // childs of this element

        const header = this.getAttribute('headerText') || ""
        this.innerHTML = html(header, this.getAttribute('symbol'), this.hasAttribute('closeButton'))   // replace children w/ new html (bootstrap dialog)

        window.requestAnimationFrame(() => {
            this.querySelector('.modal-body').appendChild(childrenBeforeReplace)
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