const timeout = 7000
const snackbar = (() => {
    let t = document.querySelector('.snackbar'),
        timer
    let close = () => (timer <= Date.now()) && t.classList.remove('view')

    return function (text) {
        t.textContent = text
        t.classList.add('view')
        timer = Date.now() + timeout - 100
        setTimeout(close, timeout)
    }
})()