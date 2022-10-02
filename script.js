document.querySelectorAll('section').forEach(elem => {
   elem.addEventListener('click', () => {
      elem.children[0].children[0].classList.toggle('faq__question-active')
      elem.children[0].children[1].classList.toggle('img-active')
      elem.children[1].classList.toggle('active')
   })
})
