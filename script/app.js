const contactIcons = document.querySelectorAll('#top_nav a')

function navAnim(x) {
    if(x >10) {
        // top_nav.style.background = `linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,.88) 50%,rgba(0,0,0,0) 100%)`
        top_nav.style.background = `rgba(0,0,0,.88)`;
        // top_nav.style.justifyContent = 'flex-end'
        contactIcons.forEach(c => {c.style.margin = `3px 10px`, c.style.padding = `0 5px`, c.style.opacity = 1})
    }
    else {
        top_nav.style.background = `none`;
        // top_nav.style.justifyContent = 'center'
        contactIcons.forEach(c => {c.style.margin = `10px`, c.style.padding = `10px`, c.style.opacity = .6})
    }
}

function animations(){
    let scrolled = window.pageYOffset
    navAnim(scrolled)
    requestAnimationFrame(animations)
}

animations()
