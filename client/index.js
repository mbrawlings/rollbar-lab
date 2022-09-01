const headerEl = document.getElementById('header')
const dontPressBtn = document.getElementById('dontPress')

function chicken() {
    axios.get('/chicken')
    .then(() => {
        alert('successful')
    })
    .catch(()=> {
        alert('not successful')
    })
}

function dontPress(e) {
    e.preventDefault()
    axios.get('/dontPress')
    .then(() => {
        alert('I TOLD YOU NOT TO PRESS THAT')
    })
}

headerEl.addEventListener('click', () => {
    alert('clicked header')
})

dontPressBtn.addEventListener('click', dontPress)