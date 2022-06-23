// undrline link
let mainlinkNode = document.querySelectorAll('.main__link')
for (i = 0; i < mainlinkNode.length; i++) {
    mainlinkNode[i].addEventListener('mouseover', function() {
        for (let d = 0; d < mainlinkNode.length; d++) {
            mainlinkNode[d].classList.remove('main__link--underline-active')
        }
        this.classList.add('main__link--underline-active')
    })
    for (let j = 0; j < mainlinkNode.length; j++) {
        mainlinkNode[j].addEventListener('mouseout', function() {
            this.classList.remove('main__link--underline-active')


        })
    }
}

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
burgerNode.addEventListener('click', function() {
    burgerNode.classList.toggle('burger--active')
    mainNode.classList.toggle("m-main__container--open")
})
