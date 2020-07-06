const token = 'USEkIkX1v6RnMKYf4ztbWcQrjkDKAcBOpH';
const raceEl = document.querySelector('.race');
const genderEl = document.querySelector('.gender');
const classEl = document.querySelector('.class');
const allegianceEl = document.querySelector('.allegiance');
const button = document.querySelector('button');

function setRace() {
    let randomRace = Math.floor(Math.random() * races.length);
    let randomClass = Math.floor(Math.random() * races[randomRace]['class'].length);

    allegianceEl.innerText = races[randomRace]['following'];
    raceEl.innerText = races[randomRace]['name'];
    classEl.innerText = races[randomRace]['class'][randomClass];
};

button.addEventListener('click', setRace);


 
 

  