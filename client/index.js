function chicken() {
    axios.get('/chicken')
    .then(() => {
        alert('successful')
    })
}

chicken()