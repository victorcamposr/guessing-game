//variables

const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const errormessage = document.querySelector('.errormessage')
const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')
let xAttempts = 1
const randomNumber = Math.round(Math.random() * 10)

//Events

//Try reset application
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', resetKey)

// console.log(randomNumber)
//Show popups of Error and Sucess
function showPopup(type) {
    const popup = document.querySelector(`#popup${type}`)
    popup.style.opacity = '1'

    setTimeout(function () {
        popup.style.opacity = '0'
    }, 1000)
}

// Click for shoot events call back
function handleTryClick(event) {
    event.preventDefault() //Define que o evento nao vai ser padrao, nesse caso do formulario nao vai encaminhar ele.
    const inputNumber = document.querySelector('#inputNumber')
    if (inputNumber.value == '') {
        errormessage.classList.remove('hide')
    } else if (Number(inputNumber.value) == randomNumber) {
        toggleScreen()
        document.querySelector(
            '.screen2 h2'
        ).innerText = `Acertou em ${xAttempts} tentativas`
        // console.log(xAttempts)
    } else if (Number(inputNumber.value) > 10 || inputNumber.value < 0) {
        document.querySelector('.errormessage').innerText = `Digite um número de 0 a 10`      
        errormessage.classList.remove('hide')
    } else if (
        Number(inputNumber.value) == randomNumber + 1 ||
        Number(inputNumber.value) == randomNumber - 1
    ) {
        showPopup('Sucess')
    } else {
        errormessage.classList.add('hide')
        showPopup('Error')
    }
    xAttempts++
    inputNumber.value = ''

}

function handleResetClick() {
    toggleScreen()

    window.location.reload()
    xAttempts = 1
}

function toggleScreen() {
    screen1.classList.toggle('hide')
    screen2.classList.toggle('hide')
}

function resetKey(e) {
    if (e.key == 'Enter' && screen1.classList.contains('hide')) {
        handleResetClick()
        console.log(e.key)
    }
}
