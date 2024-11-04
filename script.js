const maxHunger = 100
let hunger = 0

const maxEnergy = 100
let energy = 100

const intervalTime = 10000

const pet = document.querySelector('.pet')
const head = document.querySelector('.head')

function ourFunction() {
    console.log("vår funktion i setTimeout körs!");
    
}


function hungerInterval() {
    if(hunger >= maxHunger) {
        console.log("du svalt ihjäl, attans!")


        clearInterval(setHungerInterval)
    }
    else {
        hunger++
    }

    if(hunger >= 50) {
        
        
    }

   
    console.log("du är såhär hungrig: " + hunger + "/" + maxHunger)
}

// gör någonting efter en viss tid har gått
const ourTimeout = setTimeout(ourFunction, 1000)



// clearTimeout stänger av vår timeout innan den hinner köra (om clearTimout kör innan timeouten har körts)
clearTimeout(ourTimeout)

// gör någonting vid varje intervall
const setHungerInterval = setInterval(hungerInterval, intervalTime)

// clearInterval stänger av vår intervall när vi inte längre vill att den ska köra!
// clearInterval(setHungerInterval)


const setEnergyInterval = setInterval(() => {
    energy--

    if(energy <= 0) {
        console.log("du har slut på energi och faller ihop, tråkigt.")
        clearInterval(setEnergyInterval)
    }

    console.log("du är såhär energiig fortfarande: " + energy + "/" + maxEnergy)
}, intervalTime)

const playButton = document.querySelector('.eat')

playButton.addEventListener('click', () => {
    hunger -= 10

    if(hunger < 0) {
        hunger = 0
    }

    playButton.disabled = true
    setTimeout(() => {
        playButton.disabled = false
    }, 5000)
})

setInterval(() => {
    if(pet.classList.contains('at-work2')) {
        pet.classList.remove('at-work2')
    }
    else {
        pet.classList.add('at-work2')
    }

    
}, 1000);