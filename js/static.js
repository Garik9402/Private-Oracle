//search
let searchNode = document.querySelector('.m-main__searchlogin-icon ')
let inputNode = document.querySelector('.m-main__inputtext')
window.addEventListener('click', function(e) {
    if (searchNode.contains(e.target) || inputNode.contains(e.target)) {
        inputNode.classList.add('inputtext--inputactive')

    } else {
        inputNode.classList.remove('inputtext--inputactive')
    }
});

let headerSearchNode = document.querySelector('.header__searchlogin-icon')
let headerinputNode = document.querySelector('.header__inputtext')
window.addEventListener('click', function(e) {
    if (headerSearchNode.contains(e.target) || headerinputNode.contains(e.target)) {
        headerinputNode.classList.add('inputtext--inputactive')

    } else {
        headerinputNode.classList.remove('inputtext--inputactive')
    }
});
//burger
let burgerNode = document.querySelector('.burger')
let mainNode = document.querySelector('.m-main__container')
let contentNode = document.querySelector('.wrapper-content')
burgerNode.addEventListener('click', function() {
    burgerNode.classList.toggle('burger--active')
    mainNode.classList.toggle("m-main__container--open")
    contentNode.classList.toggle('wrapper-content--close')
})