const GoToTopButton = document.getElementsByClassName("up")[0];

export const TopButtonModule = ()=> {
    GoToTopButton.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
    }, false);

    document.addEventListener("scroll", () => {
        if (document.documentElement.scrollTop === 0) {
            GoToTopButton.style.display = "none";
        } else {
            GoToTopButton.style.display = "block";
        }
    });
}
