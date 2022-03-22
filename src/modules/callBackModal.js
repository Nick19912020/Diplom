const ModalOverlay = document.getElementsByClassName("modal-overlay")[0];

const CallBackModal = document.getElementById("callback");

const CallBackButtons = [...document.getElementsByClassName("callback-btn"),
    ...document.getElementsByClassName("services-elements")[0].getElementsByClassName("element"),
    ...document.getElementsByClassName("button-services")
];

const CallBackForm = document.querySelector("form");

const CallBackNameInput = CallBackModal.querySelector("input");

export const CallBackModalModule = () => {

    for (const Button of CallBackButtons) {
        Button.addEventListener("click", function () {
            ModalOverlay.style.display = "inline";
            CallBackModal.style.display = "inline";
        }, false);
    }


    const CallBackXHR = new XMLHttpRequest();

    CallBackModal.getElementsByClassName("modal-close")[0].addEventListener("click", () => {
        ModalOverlay.style.display = "none";
        CallBackModal.style.display = "none";
    })

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
}


