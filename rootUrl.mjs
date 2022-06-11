class Element extends HTMLElement {
    constructor() {
        super()
        let rootPath = window.location.protocol + '//' + window.location.host + window.location.pathname
        let url = this.getAttribute('url') || rootPath
        this.innerHTML = `&lt;iframe src="${url}" height="768" width="1000"&gt;&lt;/iframe&gt;`
    }
}
window.customElements.define('nav-bar-root-url', Element)