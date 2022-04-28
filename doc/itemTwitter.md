
# usage

## static fashion

    <script src="components/navBar/itemTwitter.mjs" type="module"></script>
    <nav-bar-item-twitter hashtags="#bla" language="fr" text="le blá"> </nav-bar-item-twitter>


## dynamic fashion

    <nav-bar-item-twitter>
        <script type="module">
            import {NavBarItemTwitter} from "./components/navBar/itemTwitter.mjs"
            document.querySelector("nav-bar-item-twitter").init(String.locale, "#hastag", "some text")
            // alternatively:
            // document.querySelector("nav-bar-item-twitter").initWithUrl("twitter.com?lang=de&hashtags=blabla")
        </script>
    </nav-bar-item-twitter>

## changing attributes dynamically

changing the attributes dynamically (hashtags,language,text) does NOT update the element
