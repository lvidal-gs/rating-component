const rating = document.querySelectorAll(".rate")
let actualRate = "";

for(const rate of rating) {
  rate.addEventListener('click', (e) => {
    let selectedRate = e.target;
    
    if(actualRate == "") {
      if(!selectedRate.classList.contains('active')) {
        selectedRate.classList.add("active")
      }  

    } else {
      if(actualRate != selectedRate) {
        selectedRate.classList.add("active")
        actualRate.classList.remove("active") 
      } 
      else 
        animateElement(actualRate)
    }         

    actualRate = selectedRate;
  })
}

function animateElement(element) {
  element.animate([
    { backgroundColor: 'hsl(25, 97%, 53%)'},
    { transform: 'rotate(-3deg)' },
    { transform: 'rotate(6deg)' }, 
    { transform: 'rotate(-12deg)' },
    { transform: 'rotate(12deg)' },
    { backgroundColor: 'hsl(217, 12%, 63%)' }
  ], {
    duration: 500,
    
  })
}

function changeScreen() {
  let submited = document.querySelector('.goBack')
  let rateCard = document.querySelector('.feedback')

  let selectedRate = document.querySelector('.active')
  let alert = document.querySelector("#alert-container")

  if (selectedRate) {
    submited.style.display = "flex"
    let toPullValue = document.querySelector("#selectedRate")
    rateCard.style.display = "none"
    toPullValue.innerHTML = selectedRate.value
  } else {
    alert.style.top = "20px"
    alert.style.opacity = "1"
  }
}

function backButton() {
  let alert = document.querySelector("#alert-container")
  alert.style.top = "0"
    alert.style.opacity = "0"
}