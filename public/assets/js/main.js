'use strict'
console.log('hello world')

const slider = document.querySelector('.slide-wrapper')
const slides = document.querySelectorAll('.slide-wrapper blockquote')
const controls = document.querySelectorAll('.full-width-banner__blockquote span')

controls.forEach((control) => control.addEventListener('click', sliderHandler))

function sliderHandler (e) {
  let newSlide
  const activeSlide = document.querySelector('.is-ref')
  const sliderControl = e.target

  activeSlide.classList.remove('is-ref')

  if (sliderControl.classList.contains('slide-r')) {
    newSlide = next(activeSlide)
    slider.classList.remove('is-reversing')
  } else {
    newSlide = prev(activeSlide)
    slider.classList.add('is-reversing')
  }

  newSlide.classList.add('is-ref')
  newSlide.style.order = 1
  for (let i = 2; i <= slides.length; i++) {
    newSlide = next(newSlide)
    newSlide.style.order = i
  }

  slider.classList.remove('is-set')
  return setTimeout(function () {
    return slider.classList.add('is-set')
  }, 50)

  function next (activeSlide) {
    if (activeSlide.nextElementSibling) {
      return activeSlide.nextElementSibling
    } else {
      return slider.firstElementChild
    }
  }

  function prev (activeSlide) {
    if (activeSlide.previousElementSibling) {
      return activeSlide.previousElementSibling
    } else {
      return slider.lastElementChild
    }
  }
}

const cardShuffleIcon = document.querySelector('.full-width-banner__cards svg')


cardShuffleIcon.addEventListener('click', (e) => {
  if (e.target.classList.contains('spin')) {
    e.target.classList.remove('spin')
  } else {
    e.target.classList.add('spin')
  }
   
  cardsAnimation()
})

// function removeTransition (e) {
//   if (e.propertyName !== 'transform') return

//   this.classList.remove('spin')
// }  

// cardShuffleIcon.addEventListener('transitionend', removeTransition)

function cardsAnimation () {
  const cards = document.querySelectorAll('.full-width-banner__cards figure')
  console.log(cards)

  cards.forEach((card) => {
    if (card.classList.contains('first')) {
      card.classList.add('is-animating')
      card.classList.remove('first')

      setTimeout(function () {
        card.classList.add('active')
        card.classList.remove('is-animating')
      }, 250)
    } else if (card.classList.contains('second')) {
      card.classList.add('first')
      card.classList.remove('second')
    } else if (card.classList.contains('active')) {
      card.classList.add('second')
      card.classList.remove('active')
    } 
  })
}



// setInterval(function () {
  // cardsAnimation()
// }, 5000)
