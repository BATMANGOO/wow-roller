const token = 'USEkIkX1v6RnMKYf4ztbWcQrjkDKAcBOpH';
const allianceLogo = document.querySelector('.alliance');
const hordeLogo = document.querySelector('.horde')
const raceEl = document.querySelector('.race');
const raceImg = document.querySelector('.raceImage');
const genderEl = document.querySelector('.gender');
const classEl = document.querySelector('.class');
const button = document.querySelector('button');

const randomRace = Math.floor(Math.random() * races.length);
const randomClass = Math.floor(Math.random() * races[randomRace]['class'].length);

(function onStartUp() {
    raceEl.innerText = races[randomRace]['name'];
    classEl.innerText = races[randomRace]['class'][randomClass];
    raceImg.setAttribute("src", races[randomRace].image);

    if(races[randomRace].following === 'Horde') {
        hordeLogo.classList.add('border');
        
        allianceLogo.classList.remove('border');
    } else if(races[randomRace].following === 'Alliance') {
        allianceLogo.classList.add('border');
        hordeLogo.classList.remove('border');
    }
})()

function setRace() {
    let randomRace = Math.floor(Math.random() * races.length);
    let randomClass = Math.floor(Math.random() * races[randomRace]['class'].length);

    raceEl.innerText = races[randomRace]['name'];
    classEl.innerText = races[randomRace]['class'][randomClass];
    raceImg.setAttribute("src", races[randomRace].image);

    if(races[randomRace].following === 'Horde') {
        hordeLogo.classList.add('border');
        allianceLogo.classList.remove('border');
    } else if(races[randomRace].following === 'Alliance') {
        allianceLogo.classList.add('border');
        hordeLogo.classList.remove('border');
    }
};



button.addEventListener('click', setRace);


 
 

  