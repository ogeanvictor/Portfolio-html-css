const button = document.querySelector('.main-button._form');
const nameInput = document.querySelector('.input._name');
const emailInput = document.querySelector('.input._email');
const messageInput = document.querySelector('.input._message')

button.addEventListener('click', function () {
    if (nameInput.value == "") {
        alert ("Preencha o NOME corretamente");
        return false;
    }

    else if(emailInput.value == "" || !emailInput.value.includes('@') || !emailInput.value.includes('.')) {
        alert("Preencha o EMAIL corrretamente");
        return false;
    }

    else if(messageInput.value == "") {
        alert("Preencha a MENSAGEM corretamente");
        return false;
    }

    return true
})