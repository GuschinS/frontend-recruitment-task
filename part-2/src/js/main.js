const alert = () => {
    const alertBtn = document.getElementById('alert')
    const alertModal = document.querySelector('.alert')
    const alertClose = alertModal.querySelector('.alert-close')

    const openAlert = () => {
        alertModal.style.display = 'flex'
        loader()
    }

    const closeAlert = () => {
        alertModal.style.display = ''
        document.querySelector('.loader').style.display = 'block';
        document.querySelector('table').style.opacity = '0';
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

const resetButton = document.querySelector('.reset')
const addButton = () => {
    resetButton.style.opacity = '1';
    resetButton.style.cursor = 'pointer'
}
const remButton = () => {
    resetButton.style.opacity = '0';
    resetButton.style.cursor = 'default'
}
let counterVal = sessionStorage.getItem("val") || 0;

const incrementClick = () => {
    if (counterVal >= 4) {
        addButton();
    }
    updateDisplay(++counterVal);
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

async function getTable() {
    try {
        const url = `https://jsonplaceholder.typicode.com/users`;
        const res = await fetch(url);
        const data = await res.json();
        const createTable = () => {
            const arrayThead = ['Imie Nazwisko', 'Email', 'Adres', 'Telefon', 'Nazwa firmy']
            const alertBody = document.querySelector('.alert-body')
            const table = document.createElement('table')
            const thead = document.createElement('thead')
            const tbody = document.createElement('tbody')
            const tr = document.createElement('tr')

            arrayThead.forEach(element => {
                const th = document.createElement('th')
                const thText = document.createTextNode(element)
                th.appendChild(thText)
                tr.appendChild(th)
            })
            thead.appendChild(tr)
            table.appendChild(thead)
            alertBody.appendChild(table)

            data.forEach(element => {
                const tr = document.createElement('tr')
                const td1 = document.createElement('td')
                const td1Text = document.createTextNode(element.name)
                td1.appendChild(td1Text)
                tr.appendChild(td1)
                const td2 = document.createElement('td')
                const td2Text = document.createTextNode(element.email)
                td2.appendChild(td2Text)
                tr.appendChild(td2)
                const td3 = document.createElement('td')
                const td3Text = document.createTextNode(`${element.address.city}, ${element.address.street}, ${element.address.suite}`)
                td3.appendChild(td3Text)
                tr.appendChild(td3)
                const td4 = document.createElement('td')
                const td4Text = document.createTextNode(element.phone)
                td4.appendChild(td4Text)
                tr.appendChild(td4)
                const td5 = document.createElement('td')
                const td5Text = document.createTextNode(element.company.name)
                td5.appendChild(td5Text)
                tr.appendChild(td5)
                tbody.appendChild(tr)
            })
            table.appendChild(tbody)
        }
        createTable()
    } catch {
        console.error();
    }
}
getTable()

let timeLoader
const loader = () => {
    timeLoader = setTimeout(showPage, 3000);
}

const showPage = () => {
    document.querySelector('.loader').style.display = "none";
    document.querySelector('table').style.opacity = '1';
}