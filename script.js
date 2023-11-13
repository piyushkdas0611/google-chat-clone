let hamburger = document.getElementById('hamburger')
let chat = document.querySelector('#chat')

hamburger.addEventListener('click', () => {
    if(chat.style.display == 'none') {
        chat.style.display = 'block'
    }
    else {
        chat.style.display = 'none'
    }
})