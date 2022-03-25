const BlockLinks = document.getElementsByClassName("block-link")



export const BlockLinkModule = () => {
    for (const BlockLink of BlockLinks) {
        BlockLink.addEventListener("click", (e) => {
            e.preventDefault()
            document.querySelector(BlockLink.attributes.getNamedItem("href").value).scrollIntoView({behavior: "smooth"})
        })
    }
}