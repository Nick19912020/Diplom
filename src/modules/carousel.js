const CarouselItems = document.getElementsByClassName("services-carousel")[0].getElementsByClassName("element")

const ArrowLeft = document.getElementsByClassName("arrow-left")[0]

const ArrowRight = document.getElementsByClassName("arrow-right")[0]

let carouselIndex = 0

function hideAllCarouselItems(){
    for (const CarouselItem of CarouselItems) {
        CarouselItem.style.display = "none"
    }
}

function showCarouselItems() {
    hideAllCarouselItems()
    for (let j = carouselIndex; j < (carouselIndex + 3); j++) {
        CarouselItems[j].style.display = "block"
    }
}


export const CarouselModule = () => {
    hideAllCarouselItems()
    showCarouselItems()
    ArrowRight.addEventListener("click", () => {
        carouselIndex = (carouselIndex + 3) % CarouselItems.length
        showCarouselItems()
    })

    ArrowLeft.addEventListener("click", () => {
        if (carouselIndex < 3) {
            carouselIndex = CarouselItems.length
        }
        carouselIndex -=3
        showCarouselItems()
    }, false)
}
