popup = document.getElementById("popup-menu")
bg = document.getElementById("behind-popup")
closeBtn = document.getElementById("close-btn")
openBtn = document.getElementById("open-btn")

function showMenu() {
    bg.style.display = "block"
    bg.style.backdropFilter = "blur(7px)"
    popup.style.display = "block"
    document.body.style.overflow = "hidden"
    closeBtn.style.display = "block"
    openBtn.style.visibility = "hidden"
    
}

function closeMenu() {
    bg.style.display = "none"
    bg.style.backdropFilter = "blur(7px)"
    popup.style.display = "none"
    document.body.style.overflow = "auto"
    closeBtn.style.display = "none"
    openBtn.style.visibility = "visible"
    
}