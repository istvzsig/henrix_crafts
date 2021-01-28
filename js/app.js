// developer: jinjash@gmail.com

const imgFolder = "../img/icons/"
const linkImages = [`${imgFolder}phone.svg`, `${imgFolder}mail.svg`, `${imgFolder}facebook.svg`];
let fos = document.body.clientHeight
let logo = document.querySelector('h1#logo')


function workshop() {
    let workshop_now = workshop_section.getBoundingClientRect().top
    let folio_now = portfolio_gallery.getBoundingClientRect().top
    let span = document.querySelector('h1#logo span')



    if(workshop_now < fos / 2) {
        span.textContent = ' Műhely'
        // span.style.animationName = 'slideoff'
        // span.onanimationend = function() {
        //     span.textContent = ' Műhely'
        // }

    } else {
        span.textContent = '  '
    }

    if(folio_now < 300) {
        span.textContent = ' Portfólió'
    }
}

let numberOfFolio = 0

function portfolio() {

    while(numberOfFolio < 6) {
        let image_container = document.createElement('div')
        let folioItem = document.createElement('div')
        let galleryText = document.createElement('p')
        portfolio_gallery.append(folioItem)
        folioItem.append(image_container)
        folioItem.append(galleryText)
        image_container.className = 'container_of_folio_item'
        folioItem.className = "folioItem"
        galleryText.className = "galleryText"
        // galleryText.textContent = 'Fos'
        // folioItem.textContent = 'ASDSAD'
        numberOfFolio++
    }


    const item_images = [
        'https://images.unsplash.com/photo-1611523796661-f6b934d52d13?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',

        'https://images.unsplash.com/photo-1579772330545-9e11c0937b5f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8d29vZCUyMGNyYWZ0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',

        'https://images.unsplash.com/photo-1559114436-93407578ffc7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8d29vZCUyMGNyYWZ0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',

        'https://images.unsplash.com/photo-1511194810566-dae328af385e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8d29vZCUyMGNyYWZ0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',

        'https://images.unsplash.com/photo-1566828792753-5dba003687aa?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8d29vZCUyMGNyYWZ0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',

        'https://images.unsplash.com/photo-1610177498701-4f00c0bd1694?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8d29vZCUyMGNyYWZ0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'

    ]
    let imageList = document.querySelectorAll('.container_of_folio_item')
    imageList.forEach(item => {
        item === imageList[0] ?
            item.style.backgroundImage = `url(${item_images[0]})`
        : false

        item === imageList[1] ?
            item.style.backgroundImage = `url(${item_images[1]})`
        : false

        item === imageList[2] ?
            item.style.backgroundImage = `url(${item_images[2]})`
        : false

        item === imageList[3] ?
            item.style.backgroundImage = `url(${item_images[3]})`
        : false

        item === imageList[4] ?
            item.style.backgroundImage = `url(${item_images[4]})`
        : false

        item === imageList[5] ?
            item.style.backgroundImage = `url(${item_images[5]})`
        : false


        item.onmouseover = function() {
            item.style.transform = `rotate(-10deg) scale(2)`
            item.style.filter = `blur(10px) grayscale(100%)`
        }
        item.onmouseleave = function() {
            item.style.transform = `None`
            item.style.filter = `None`

        }

    })


}
function animations(){
    let scrolled = window.pageYOffset;

    if(scrolled > fos / 2) {
        top_nav.style.background = `rgba(0,0,0,.9)`;
        // scroll_down_button.style.display = 'none'
        // logo.style.fontSize = `24px`
    } else {
        top_nav.style.background = 'transparent'
        // logo.style.fontSize = `32px`
        scroll_down_button.style.display = 'inherit'
    }

    // if(scrolled > workshop_section.getBoundingClientRect().bottom - 200) {
    //     console.log('fos')
    // }




}
function build() {

    animations()
    workshop()
    requestAnimationFrame(build)

}

build()
portfolio()
