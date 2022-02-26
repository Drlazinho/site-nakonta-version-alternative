// Cor da opção selecionada
let optionClicked = document.querySelectorAll('.options-box > div')

optionClicked.forEach(function (key) {
  key.addEventListener('click', function () {
    removeStyles()
    this.setAttribute('class', 'optionSelect')
  })
})

function removeStyles() {
  for (let i = 0; i < optionClicked.length; i++) {
    document.querySelectorAll('.options-box > div')[i].removeAttribute('class')
  }
}