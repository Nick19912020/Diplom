const GoToTopButton = document.getElementsByClassName("up")[0];

if (document.documentElement.scrollTop < 200) {
    GoToTopButton.style.display = "none";
}

export const TopButtonModule = ()=> {
    GoToTopButton.addEventListener("click", () => window.scrollTo({top: 0, behavior: "smooth"}), false);

    document.addEventListener("scroll", () => {
        if (document.documentElement.scrollTop < 200) {
            GoToTopButton.style.display = "none";
        } else {
            GoToTopButton.style.display = "block";
        }
    });
}
