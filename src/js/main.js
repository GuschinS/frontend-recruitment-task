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

    alertModal.addEventListener('click', (event) => {
        const modalContent = event.target.closest('.alert-body')
        if (!modalContent) {
            closeAlert()
        }
    });

}

alert()