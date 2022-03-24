const MobileMenu = document.getElementsByClassName("mobile-menu")[0]

const OpenButton = document.getElementsByClassName("mob-menu-btn")[0]

const CloseButton = document.getElementsByClassName("mobile-menu-close")[0]

export const MobileMenuModule = () => {
    OpenButton.addEventListener("click", () => {
        MobileMenu.classList.add("open")
    })
    CloseButton.addEventListener("click", () => {
        MobileMenu.classList.remove("open")
    })
}
