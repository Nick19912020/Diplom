const AccordionElements = document.getElementsByClassName("accordeon")[0].getElementsByClassName("element");

function resetAllAccordionElements() {
    for (const AccordionElement of AccordionElements) {
        AccordionElement.className = "element";
        AccordionElement.getElementsByClassName("element-content")[0].style.display = "none";
    }
}

export const AccordionModule = () => {
    for (const AccordionElement of AccordionElements) {
        AccordionElement.addEventListener("click", () => {
            resetAllAccordionElements();
            AccordionElement.className = "element active";
            AccordionElement.getElementsByClassName("element-content")[0].style.display = "block";
        }, false);
    }
}
