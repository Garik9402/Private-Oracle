//search
let searchNode = document.querySelector('.header-searchlogin__icon, .inputtext')
let inputNode = document.querySelector('.inputtext')

window.addEventListener('click', function(e) {
    if (searchNode.contains(e.target) || inputNode.contains(e.target)) {
        inputNode.classList.add('inputactive')
    } else {
        inputNode.classList.remove('inputactive')
    }
});

//burger
let burgerNode = document.querySelector('.burger')
let mainNode = document.querySelector('.header-top__continerswrap')
burgerNode.addEventListener('click', function() {
    burgerNode.classList.toggle('active')
    mainNode.classList.toggle('active2')
})