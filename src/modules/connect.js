const Connects = document.getElementsByClassName("connect")


export const ConnectModule = () => {
    for (const Connect of Connects) {
        Connect.addEventListener("click", ()=> {
            if (Connect.classList.contains("header-tel")) {
                window.open(`tel:${Connect.textContent}`, "_parent")
            } else{
                window.open(`mailto:${Connect.textContent}`,"_parent")
            }

        })
    }
}
