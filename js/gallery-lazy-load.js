const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)

if (vw <= 1000 && vw >= 500) {
    lazy = document.querySelectorAll('[id="lazy-tablet"]')
    eager = document.querySelectorAll('[id="eager-tablet"]')
    for (var i = 0; i < lazy.length; i++) {
        lazy[i].setAttribute("loading", "lazy");
    }
    for (var i = 0; i < eager.length; i++) {
        eager[i].setAttribute("loading", "eager");
    }
}

if (vw <= 500) {
    lazy = document.querySelectorAll("img.lazy-mobile")
    eager = document.querySelectorAll("img.eager-mobile")
    for (var i = 0; i < lazy.length; i++) {
        lazy[i].setAttribute("loading", "lazy");
    }
    for (var i = 0; i < eager.length; i++) {
        eager[i].setAttribute("loading", "eager");
    }
}