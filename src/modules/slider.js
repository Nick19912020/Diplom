const TopSlider = document.getElementsByClassName("top-slider")[0];

const TopSlides = TopSlider.getElementsByClassName("item");


export const SliderModule = () => {
    for (let j = 1; j < TopSlides.length; j++) {
        TopSlides[j].hidden = true;
    }

    let i = 0;

    setInterval(() => {
        TopSlides[i].hidden = true;
        i = (i + 1) % TopSlides.length
        TopSlides[i].hidden = false;

    }, 3000);
}
