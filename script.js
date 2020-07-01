const token = 'USEkIkX1v6RnMKYf4ztbWcQrjkDKAcBOpH';
const raceEl = document.querySelector('.race');
const classEl = document.querySelector('.class');
const allegianceEl = document.querySelector('.allegiance');

const raceAPI = `https://us.api.blizzard.com/data/wow/playable-race/index?namespace=static-us&locale=en_US&access_token=${token}`;

const classesAPI = `https://us.api.blizzard.com/data/wow/playable-class/index?namespace=static-us&locale=en_US&access_token=${token}`;
 

(async function call() {
  const classesData = await (await fetch(classesAPI)).json().then(res => res.classes);
  const racesData = await (await fetch(raceAPI)).json().then(res => res.races.slice(0, 13));
  const randomNum = Math.floor(Math.random() * classesData.length)
  console.log(classesData);
  console.log(racesData);
})();

//if anything, write down switch statements that remove classes as options depending on the race. 
 
 

  