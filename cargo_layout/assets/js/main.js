let body = document.querySelector('body');

body.addEventListener('click', (e) => {
    let el = e.target;
    if (el.classList.contains('select')) {
        if (el.classList.contains('open')) {
            el.classList.remove('open');
        } else {
            el.classList.add('open');
        }
    }
})