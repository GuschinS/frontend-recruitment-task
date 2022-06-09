const alert = () => {
    const alertBtn = document.getElementById('alert')
    const alertModal = document.querySelector('.alert')
    const alertClose = alertModal.querySelector('.alert-close')

    const openAlert = () => {
        alertModal.style.display = 'flex'
    }

    const closeAlert = () => {
        alertModal.style.display = ''
    }

    alertBtn.addEventListener('click', openAlert)
    alertClose.addEventListener('click', closeAlert)

    alertModal.addEventListener('click', (event) =>{
        const modalContent = event.target.closest('.alert-body')
        if (!modalContent) {
            closeAlert()
    }
});

}

alert()

const resetButton = document.querySelector('.reset')
const addButton = () => {
    resetButton.style.display = 'flex';
}
const remButton = () => {
    resetButton.style.display = '';
}
let counterVal = sessionStorage.getItem("val") || 0;

const incrementClick = () => {
    if (counterVal >= 4) {
        addButton();
    }updateDisplay(++counterVal);
    
}

const resetCounter = () => {
    counterVal = 0;
    updateDisplay(counterVal);
    remButton();
}

const updateDisplay = (val) => {
    document.getElementById("counter-label").innerHTML = val;
    sessionStorage.setItem("val", val);
}
