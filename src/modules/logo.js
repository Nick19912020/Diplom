const Logos = document.getElementsByClassName("logo")

export const LogoModule = () => {
    for (const Logo of Logos) {
        Logo.addEventListener("click", () => {
            location.reload()
        })
    }
}
