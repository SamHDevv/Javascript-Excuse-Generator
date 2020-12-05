
let getRandomExcuse = function(){
  //Array with the words which will be used
    let who = ['The dog ','My grandma ','His turtle ','My bird '];
    let action = ['ate ','peed ','crushed ','broke '];
    let what = ['my homework ', 'the keys ', 'the car '];
    let when = ['before the class ','right on time ','when I finished ','during my lunch ','while I was praying '];
  
  // Random variables
   let whoRandom = Math.floor((Math.random() * who.length) );
   let actionRandom = Math.floor((Math.random() * action.length) );
   let whatRandom = Math.floor((Math.random() * what.length) );
   let whenRandom = Math.floor((Math.random() * when.length) );
  
 alert(who[whoRandom] + action[actionRandom] + what[whatRandom] + when[whenRandom]); 
  
}