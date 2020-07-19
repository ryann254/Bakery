//Getting the elements for the read more functionality
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
const pecanContainer = document.querySelector('#pecan-container')
const journeyContainer = document.querySelector('#journey-container')
const italianContainer = document.querySelector('#italian-container')
const lemonContainer = document.querySelector('#lemon-container')
const imageHeader = document.querySelectorAll('#heading')
const navigator = document.querySelector('.page-navigator')
const bgImage = document.querySelectorAll('.bg-image')
const footer = document.querySelector('footer')
const contentUnder = document.querySelectorAll('.content-under')

let names = [readPeacan,readJourney,readItalian,readLemon]
let content = [contentPecan,contentJourney,contentItalian,contentLemon]
for(n=0; n<names.length; n++){
    names[n].addEventListener('click', toggleItem);
    backButton[n].addEventListener('click', toggleItem)
}

//Toggles the read more section
function toggleItem(e) {
    moveOtherRecipes(e)
    navigator.classList.toggle('hide-navigator')
    footer.classList.toggle('move-footer')
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

//moves the other recipes on click of the read link
function moveOtherRecipes(e) {
    if(e.target.className === 'read-pecan' || e.target.id === 'back-pecan') {
        journeyContainer.classList.toggle('move-recipes')
        italianContainer.classList.toggle('move-recipes-1')
        lemonContainer.classList.toggle('move-recipes-2')
        for(n=1; n<imageInner.length; n++){
            imageInner[n].classList.toggle('move-image-inner')
            imageHeader[n].classList.toggle('move-image-header')
            bgImage[n].classList.toggle('move-bg-image')
            content[n].classList.toggle('move-image-content')
            contentUnder[n].classList.toggle('move-content-under')
        }
    }
    else if(e.target.className === 'read-journey' || e.target.id === 'back-journey') {
        pecanContainer.classList.toggle('move-recipes')
        italianContainer.classList.toggle('move-recipes-1')
        lemonContainer.classList.toggle('move-recipes-2')
        imageInner[0].classList.toggle('move-image-inner')
        imageHeader[0].classList.toggle('move-image-header')
        bgImage[0].classList.toggle('move-bg-image')
        ccontent[0].classList.toggle('move-image-content')
        contentUnder[0].classList.toggle('move-content-under')
        for(n=2; n<imageInner.length; n++){
            imageInner[n].classList.toggle('move-image-inner')
            imageHeader[n].classList.toggle('move-image-header')
            bgImage[n].classList.toggle('move-bg-image')
            content[n].classList.toggle('move-image-content')
            contentUnder[n].classList.toggle('move-content-under')

        }
    }
    else if(e.target.className === 'read-italian' || e.target.id === 'back-italian') {
        pecanContainer.classList.toggle('move-recipes')
        journeyContainer.classList.toggle('move-recipes-1')
        lemonContainer.classList.toggle('move-recipes-2')
        imageInner[3].classList.toggle('move-image-inner')
        imageHeader[3].classList.toggle('move-image-header')
        bgImage[3].classList.toggle('move-bg-image')
        content[3].classList.toggle('move-image-content')
        contentUnder[3].classList.toggle('move-content-under')

        for(n=0; n<imageInner.length-2; n++){
            imageInner[n].classList.toggle('move-image-inner')
            imageHeader[n].classList.toggle('move-image-header')
            bgImage[n].classList.toggle('move-bg-image')
            content[n].classList.toggle('move-image-content')
            contentUnder[n].classList.toggle('move-content-under')
        }
    }
    else {
        pecanContainer.classList.toggle('move-recipes')
        journeyContainer.classList.toggle('move-recipes-1')
        italianContainer.classList.toggle('move-recipes-2')
        for(n=0; n<imageInner.length-1; n++){
            imageInner[n].classList.toggle('move-image-inner')
            imageHeader[n].classList.toggle('move-image-header')
            bgImage[n].classList.toggle('move-bg-image')
            content[n].classList.toggle('move-image-content')
            contentUnder[n].classList.toggle('move-content-under')
        }
    }
}