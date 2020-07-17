//Getting the elements
const readPeacan = document.querySelector('.read-pecan')
const readJourney = document.querySelector('.read-journey')
const readItalian = document.querySelector('.read-italian')
const readLemon = document.querySelector('.read-lemon')
const hiddenContentPecan = document.querySelector('.hidden-content-pecan')
const hiddenContentJourney = document.querySelector('.hidden-content-journey')
const hiddenContentItalian = document.querySelector('.hidden-content-italian')
const hiddenContentLemon = document.querySelector('.hidden-content-lemon')
const recipeContainer = document.querySelector('.recipe-1')
const contentPecan = document.querySelector('#pecan')
const contentJourney = document.querySelector('#journey')
const contentItalian = document.querySelector('#italian')
const contentLemon = document.querySelector('#lemon')
const imageInner = document.querySelectorAll('.image-inner')
const backButton = document.querySelectorAll('.back')

let names = [readPeacan,readJourney,readItalian,readLemon]
for(n=0; n<names.length; n++){
    names[n].addEventListener('click', toggleItem);
    backButton[n].addEventListener('click', toggleItem)
}

function toggleItem(e) {
    if(e.target.className === 'read-pecan' || e.target.id === 'back-pecan') {
        hiddenContentPecan.classList.toggle('show-content')
        contentPecan.classList.toggle('hide-inner-content')
        imageInner[0].classList.toggle('hide-inner-image')
    }
    else if(e.target.className === 'read-journey' || e.target.id === 'back-journey') {
        hiddenContentJourney.classList.toggle('show-content')
        contentJourney.classList.toggle('hide-inner-content')
        imageInner[1].classList.toggle('hide-inner-image')
    }
    else if(e.target.className === 'read-italian' || e.target.id === 'back-italian') {
        hiddenContentItalian.classList.toggle('show-content')
        contentItalian.classList.toggle('hide-inner-content')
        imageInner[2].classList.toggle('hide-inner-image')
    }
    else {
        hiddenContentLemon.classList.toggle('show-content')
        contentLemon.classList.toggle('hide-inner-content')
        imageInner[3].classList.toggle('hide-inner-image')
    }
}