const button = document.queryselector('button')
//even listener
button.addEventListener('click',displayStats)
function displayStats(){
    console.log('clicked')
    const input = document.getElementById('input')
    const city = input.options[input.selectedIndex].value
    let population =0, litracyrate = 0, language = 0
    let text = `the indian city is my ${city} it has so many beautiful ${language}placces are there and population${population}`
    console.log(text)
}
