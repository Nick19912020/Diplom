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

const CallBackWarningMessage = CallBackModal.getElementsByClassName("form-warning-message")[0]

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

const Validation = {
    fio(val) {
        return val.length > 1
    },
    tel(val) {
        return val.length > 5 && val.length < 17
    }
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
        const Payload = {}
        for (const CallBackInput of CallBackInputs) {
            if (CallBackInput.type === "text"){
                if (!Validation[CallBackInput.name](CallBackInput.value)) {
                    CallBackWarningMessage.textContent = "поле Имя минимум 2, поле Телефон минимум 6 максимум 16"
                    setTimeout(()=> {
                        CallBackWarningMessage.textContent = ""
                    }, 3000)
                    return
                }
                Payload[CallBackInput.name] = CallBackInput.value
            }

        }
        CallBackModal.style.display = "none";
        StatusModal.style.display = "inline"
        clearForm()
        StautsState.textContent = "Происходит загрузка"
        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(Payload)
        }).then(() => {
            StautsState.textContent = "Отправка удалась"
        }).catch(() => {
            StautsState.textContent = "Отправка не удалась"
        })
    });
}


