
function html(url) {
return `
<div id="embed-modal" data-role="dialog" class="modal fade">
<div class="modal-dialog">

    <!-- Modal content-->
    <div class="modal-content">
        <div class="modal-header">
            <h4 class="modal-title"></h4>  <!-- TODO: translate-->
            <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>
        <div class="modal-body" id="embed-content">
            <!--Dynamic embed: -->
            &lt;iframe src="${url}" height="768" width="1000"&gt;&lt;/iframe&gt;
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal" ></button>      <!-- TODO translate-->
        </div>
    </div>

</div>
</div>

<a class="nav-item social-button pointer nav-link d-flex justify-content-start align-items-center" id="embed-button" title="Embed this chart"
data-bs-toggle="modal" data-bs-target="#embed-modal" href="#" style="witdh:100px;">
<img src="./components/navBar/assets/code.svg" style="width: 2.2em; height: auto;"></img>
</a>
`}



class Element extends HTMLElement {
    constructor() {
        super()

        let currentLocationObject = window.location
        // we only need the root path of the URL
        let currentLocation = currentLocationObject.protocol + '//' + currentLocationObject.host + currentLocationObject.pathname
  
        this.innerHTML = html(this.getAttribute('url') || currentLocation)
    }
}

window.customElements.define('nav-bar-item-embed', Element)
