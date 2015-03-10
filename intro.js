var numberOfChildren;
var partnersName;
var geographicLocation;
var jobTitle;

numberOfChildren = 1;
partnersName = 'Rhondalynn';
geographicLocation = 'Ireland';
jobTitle = 'coach';



console.log('You will be a ' + jobTitle + ' in ' + geographicLocation + ', and married to ' + partnersName + ' with ' + numberOfChildren +' kids.');

var year = prompt('enter a year');
//var y = new Date;
//var year = y.getFullYear();


if (year < 2015){
    console.log('Whoa! Blast from the past!')
} else if (year === 2015) {
    console.log('I\'m in the present')
} else {
    console.log('Greetings from the future')
}