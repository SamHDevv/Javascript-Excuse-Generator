let who = ['The dog','My grandma','His turtle','My bird'];
let action = ['ate','peed','crushed','broke'];
let what = ['my homework', 'the keys', 'the car'];
let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];

let whoRandom = who[Math.floor(Math.random() * 4)];
let actionRandom = action[Math.floor(Math.random() * 4)];
let whatRandom = what[Math.floor(Math.random() * 3)];
let whenRandom = when[Math.floor(Math.random() * 5)];

function getRandomExcuse (reason1,reason2,reason3,reason4) {
    return reason1+" "+reason2+" "+reason3+" "+reason4;
}

document.getElementById('excuses').innerHTML = getRandomExcuse(whoRandom,actionRandom,whatRandom,whenRandom);