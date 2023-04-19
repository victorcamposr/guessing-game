//DOM

const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const errormessage = document.querySelector('.errormessage')
let xAttempts = 1
const randomNumber = Math.round(Math.random() * 10)

//Events
const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')


// console.log(randomNumber)
//Show popups of Error and Sucess
function showPopup(type) {
    const popup = document.querySelector(`#popup${type}`)
    popup.style.opacity = '1'

    setTimeout(function () {
        popup.style.opacity = '0'
    }, 1000)
}


// Click for shoot events
function handleTryClick(event) {
    event.preventDefault() //Define que o evento nao vai ser padrao, nesse caso do formulario nao vai encaminhar ele.
    const inputNumber = document.querySelector('#inputNumber')
    if (inputNumber.value == '') {
        errormessage.classList.remove('hide')
    } else if (Number(inputNumber.value) == randomNumber) {
        screen1.classList.add('hide')
        screen2.classList.remove('hide')

        document.querySelector(
            '.screen2 h2'
        ).innerText = `Acertou em ${xAttempts} tentativas`
        console.log(xAttempts)
    } else if (
        Number(inputNumber.value) == randomNumber + 1 ||
        Number(inputNumber.value) == randomNumber - 1
    ) {
        showPopup('Sucess')
    } else {
        errormessage.classList.add('hide')
        showPopup('Error')
    }
    inputNumber.value = ''
    xAttempts++
}

//Try reset application
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', function () {
    screen1.classList.remove('hide')
    screen2.classList.add('hide')
    window.location.reload()
    xAttempts = 1
})