
# usage

## static fashion

    <script src="components/navBar/itemFb.mjs" type="module"></script>
    <nav-bar-item-fb url="https://www.google.lu"></nav-bar-item-fb>

if url is missing, the default facebook link with an empty text is used.

## dynamic fashion

    <nav-bar-item-fb>
        <script type="module">
            import {NavBarItemFB} from "./components/navBar/itemFb.mjs"
            document.querySelector("nav-bar-item-fb").init("some text")
        </script>
    </nav-bar-item-fb>

## changing attributes dynamically

changing the attributes dynamically does NOT update the element.
