const monkeyFace = document.querySelector('.monkey-face');
const closedEars = document.querySelector('.closed-ears');
const closedEyes = document.querySelector('.closed-eyes');
const closedMouth = document.querySelector('.closed-mouth');


monkeyFace.addEventListener('click', () => {
  if(closedEars.classList.contains('closed-ears')) {
    closedEars.classList.add('active');
    monkeyFace.classList.remove('active')
  }
})


closedEars.addEventListener('click', () => {
  if(closedEyes.classList.contains('closed-eyes')) {
    closedEyes.classList.add('active');
    closedEars.classList.remove('active')
  }
})


closedEyes.addEventListener('click', () => {
  if(closedMouth.classList.contains('closed-mouth')) {
    closedMouth.classList.add('active');
    closedEyes.classList.remove('active')
  }
})

closedMouth.addEventListener('click', () => {
  if(monkeyFace.classList.contains('monkey-face')) {
    monkeyFace.classList.add('active');
    closedMouth.classList.remove('active')
  }
})




