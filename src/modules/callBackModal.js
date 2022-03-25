const ModalOverlay = document.getElementsByClassName("modal-overlay")[0];

const CallBackModal = document.getElementById("callback");

const CallBackButtons = [...document.getElementsByClassName("callback-btn"),
...document.getElementsByClassName("services-elements")[0].getElementsByClassName("element"),
...document.getElementsByClassName("button-services")
];

const CallBackForm = CallBackModal.querySelector("form");

const CallBackInputs = CallBackModal.querySelectorAll("input")

const StatusModal = document.getElementById("responseMessage")

const StatusCloseButton = document.querySelector("button")

const StautsState = StatusModal.getElementsByClassName("modal-content")[0]

const CallBackNameInput = CallBackInputs[0]

const CallBackPhoneInput = CallBackInputs[1]


function inputTest(tester, event, input) {
    if (!tester.test(event.data)) {
        if (input.value.length === 1) {
            input.value = "";
        } else {
            input.value = input.value.slice(0, input.value.length - 1);
        }
    }
}

function clearForm() {
    CallBackNameInput.value = ""
    CallBackPhoneInput.value = ""
}

export const CallBackModalModule = () => {

    for (const Button of CallBackButtons) {
        Button.addEventListener("click", () => {
            ModalOverlay.style.display = "inline";
            CallBackModal.style.display = "inline";
        }, false);
    }

    StatusCloseButton.addEventListener("click", () => {
        ModalOverlay.style.display = "none";
        StatusModal.style.display = "none";
    }, false);

    const CallBackXHR = new XMLHttpRequest();

    CallBackModal.getElementsByClassName("modal-close")[0].addEventListener("click", () => {
        ModalOverlay.style.display = "none";
        CallBackModal.style.display = "none";
    })

    ModalOverlay.addEventListener("click", () => {
        ModalOverlay.style.display = "none";
        CallBackModal.style.display = "none";
    })

    const RussianSymbols = /[А-Яа-я ]/;

    const PhoneSymbols = /[+\d]/

    CallBackNameInput.addEventListener("input", (e) => {
        inputTest(RussianSymbols, e, CallBackNameInput)
    });

    CallBackPhoneInput.addEventListener("input", (e) => {
        inputTest(PhoneSymbols, e, CallBackPhoneInput)
    })

    CallBackForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const Data = new FormData(CallBackForm);
        CallBackModal.style.display = "none";
        StatusModal.style.display = "inline"
        clearForm()
        CallBackXHR.open("POST", "https://jsonplaceholder.typicode.com/posts", true);

        CallBackXHR.onload = () => {
            StautsState.textContent = "Отправка удалась"
        }
        CallBackXHR.onprogress = () => {
            StautsState.textContent = "Происходит загрузка"
        }
        CallBackXHR.onerror = () => {
            StautsState.textContent = "Сервера нет, server.php пустой"
        }
        CallBackXHR.send(Data);
    });
}


