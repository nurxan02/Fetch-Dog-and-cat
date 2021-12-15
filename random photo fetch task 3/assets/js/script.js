let cat = document.getElementById('cat');
let dog = document.getElementById('dog');
let catbtn = document.getElementById('catbtn');
let dogbtn = document.getElementById('dogbtn');
catbtn.addEventListener('click', getRandomCat);
dogbtn.addEventListener('click', getRandomDog);
function getRandomCat() {
    fetch('https://aws.random.cat/meow')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            //gif olanda console.log da uzerinden atladigini gore bilersiniz, gifi acsa da pis gorsenir deye onuda serte saldim
            if (data.file.includes('.gif')) {
                getRandomCat();
            } else {
                cat.innerHTML = `<img src=${data.file} alt="cat"/>`
            }
        });
}
function getRandomDog() {
    fetch('https://random.dog/woof.json')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            //video olanda console.log da uzerinden atladigini gore bilersiniz, cunki img taginden istifade edirem
            if (data.url.includes('.mp4') || data.url.includes('.gif') ) {
                getRandomDog();
            } else {
                dog.innerHTML = `<img src=${data.url} alt="dog"/>`;
            }
        });
}