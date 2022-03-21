const ModalOverlay = document.getElementsByClassName("modal-overlay")[0];

const CallBackButtons = [...document.getElementsByClassName("callback-btn"),
    ...document.getElementsByClassName("services-elements")[0].getElementsByClassName("element"),
    ...document.getElementsByClassName("button-services")
];

const CallBackModal = document.getElementById("callback");

const CallBackForm = document.querySelector("form");

const CallBackXHR = new XMLHttpRequest();

const GoToTopButton = document.getElementsByClassName("up")[0];

const CallBackNameInput = CallBackModal.querySelector("input");

const TopSlider = document.getElementsByClassName("top-slider")[0];

const TopSlides = TopSlider.getElementsByClassName("item");

const AccordionElements = document.getElementsByClassName("accordeon")[0].getElementsByClassName("element");

const CarouselItems = document.getElementsByClassName("services-carousel")[0].getElementsByClassName("element")

const ArrowLeft = document.getElementsByClassName("arrow-left")[0]

const ArrowRight = document.getElementsByClassName("arrow-right")[0]

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

let carouselIndex = 0

hideAllCarouselItems()
showCarouselItems()

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

CallBackForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const Data = new FormData(CallBackForm);
    CallBackXHR.open("POST", "localhost:8080/api/netservera", true);
    CallBackXHR.onload = () => {
        alert("Все круто");
    }
    CallBackXHR.onerror = () => {
        alert("Сервера нет, server.php пустой");
    }
    CallBackXHR.send(Data);
});


const RussianSymbols = /[А-Яа-я ]/;

CallBackNameInput.addEventListener("input", (e) => {
    if (!RussianSymbols.test(e.data)) {
        if (CallBackNameInput.value.length === 1) {
            CallBackNameInput.value = "";
        } else {
            CallBackNameInput.value = CallBackNameInput.value.slice(0, CallBackNameInput.value.length - 1);
        }
    }
});


for (const AccordionElement of AccordionElements) {
    AccordionElement.addEventListener("click", () => {
        resetAllAccordionElements();
        AccordionElement.className = "element active";
        AccordionElement.getElementsByClassName("element-content")[0].style.display = "block";
    }, false);
}


function resetAllAccordionElements() {
    for (const AccordionElement of AccordionElements) {
        AccordionElement.className = "element";
        AccordionElement.getElementsByClassName("element-content")[0].style.display = "none";
    }
}

for (let j = 1; j < TopSlides.length; j++) {
    TopSlides[j].hidden = true;
}

let i = 0;

setInterval(() => {
        TopSlides[i].hidden = true;
        i = (i + 1) % TopSlides.length
        TopSlides[i].hidden = false;

}, 3000);

for (const Button of CallBackButtons) {
    Button.addEventListener("click", function () {
        ModalOverlay.style.display = "inline";
        CallBackModal.style.display = "inline";
    }, false);
}

CallBackModal.getElementsByClassName("modal-close")[0].addEventListener("click", () => {
    ModalOverlay.style.display = "none";
    CallBackModal.style.display = "none";
})