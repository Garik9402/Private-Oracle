//search
let searchNode = document.querySelector('.searchlogin__icon,inputtext')
let inputNode = document.querySelectorAll('.inputtext')
window.addEventListener('click', function(e) {
    if (searchNode.contains(e.target) || inputNode.contains(e.target)) {
        inputNode.classList.add('inputtext--inputactive')

    } else {
        inputNode.classList.remove('inputtext--inputactive')
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