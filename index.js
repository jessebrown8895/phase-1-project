
function grabhoriscope(sign){
    const URL = `https://aztro.sameerkumar.website/?sign=${sign}&day=today`;

    return fetch(URL, {
        method: 'POST'
    })
    .then(response => response.json());
}

function addZodiacEventListener(element, description, backgroundColor="white", fontColor="white"){
    const descriptDiv = document.getElementById("description")

    const zodiacDiv = document.getElementById(element)

    zodiacDiv.addEventListener("click", event => {
       descriptDiv.textContent = description

    })
    zodiacDiv.addEventListener("mouseover", event =>{
        zodiacDiv.style.backgroundColor = backgroundColor
        zodiacDiv.style.color = fontColor
    })
    // zodiacDiv.addEventListener("mouseleave", event =>{
    //     zodiacDiv.style.backgroundColor = 
    //     zodiacDiv.style.color = ""
    // })
    
    } 



function addZodiacEventListeners() {
    addZodiacEventListener("aries", "This is an aries", "red")
    addZodiacEventListener("taurus", "This is an taurus", "green")
    addZodiacEventListener("gemini", "This is an gemini", "yellow")
    addZodiacEventListener("cancer", "This is an cancer", "silver")
    addZodiacEventListener("leo", "This is an leo", "gold")
    addZodiacEventListener("virgo", "This is an virgo", "brown")
    addZodiacEventListener("libra", "This is an libra", "pink")
    addZodiacEventListener("scorpio", "This is an scorpio", "black")
    addZodiacEventListener("sagittarius", "This is an sagittarius", "purple")
    addZodiacEventListener("capricorn", "This is an capricorn", "grey")
    addZodiacEventListener("aquarius", "This is an aquarius", "blue")
    addZodiacEventListener("Pisces", "This is an Pisces", "chartreuse")

    const aries = document.getElementById("aries")
    aries.addEventListener("click", e =>{
        const descriptDiv = document.getElementById("description")
        grabhoriscope("aries")
        .then(json => {
            console.log(json);
            descriptDiv.textContent = json.description
        })
    })
    
}

document.addEventListener("DOMContentLoaded", () => {
    
    addZodiacEventListeners()
});


