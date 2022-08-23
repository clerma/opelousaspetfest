var template = document.querySelector('[type="text/template"]')
var result = document.querySelector('#result')
var engine = new Liquid()

engine
	.parseAndRender(template.innerHTML, {name: 'PetFest'})
	.then(html => result.innerHTML = html)




// var Liquid = require('liquidjs');
// var engine = Liquid();
 

var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
Array.from(person).forEach(function(e){
  console.log(e.firstName);
})