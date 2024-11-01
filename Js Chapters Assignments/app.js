//Assignment : 2
//Chapter : 2 (Vaiables for strings)

/*1. Declare a variable called username.*/

//let username;

//2. Declare a variable called myName & assign to it a string that represents your Full Name.

//let name = 'Aasma Noor';

//Question : 3
//let  name2 = alert('Johne Doe...')

//4. Write script to

//a) Declare a JS variable, titled message.

//b) Assign “Hello World” to variable message
//c) Display the message in alert box.

//Ex : 1
//let message =alert('Hello World 🌎');

//Ex : 1
//let name = 'Jhone Doe .';

//alert('Hey, My name is : '+name);


//Ex : 2

//let age = alert("15 years old...");

// Ex : 3;
//let course = alert("Certified Mobile Application Development");

//let age = '15 years old .';

//alert('I am  :  '+age); 

//5. Write a script to display the following alert using one JS 

//let pizza = alert("PIZZA \n PIZZ \n PIZ \n PI \n P");

//6. Declare a variable called email and assign to it a string that represents your Email Address(e.g. example@example.com). Show the blow mentioned message in an alert box.(Hint: use string concatenation)

//let email = 'example@example.com.';

//alert('My email address is :  '+email); 

//7. Declare a variable called book & give it the value “A
//smarter way to learn JavaScript”Display the following
//message in an alert box:

//let book = alert('A Smarter way to learn jacascript.');

//8. Write a script to display this in browser through JS

//document.write("Yah! I can write HTML content throught JavaScript...✨");

//9. Store following string in a variable and show in alert and browser through JS“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”-- 

//let string = alert("---------ஜ۩۞۩ஜ---------");

//Variables of Numbers:
//Assignment : 3 (Chapter : 3)

//Q : 1
//1. Declare a variable called age & assign to it your age. Show

//your age in an alert box.
// let age = 17;
// alert('I am '+ age + ' old');

// //Q : 2
//2. Declare & initialize a variable to keep track of how many times a visitor has visited a web page. Show his/her number of visits on your web page. For example: “You have visited this site N times”.
// let data = prompt(' How many time you have visited this side ');
// document.write('you have visited ' +  data +" time this side");

// //Q : 3
// //(typeof) kisi bhi cheez ki data type check kr ky bta deta hai ky (number )hai ya (string).
//3. Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser:
// let birth = 2007;
// document.write('My birth year is '+ birth +'<br>');
// document.write('Data type of my declared variable is  '+ typeof(birth));

//Q : 4

//4. A visitor visits an online clothing store www.xyzClothing.com . Write a script to store in variables
//the following information:

//a. Visitor’s name

//b. Product title

//c. Quantity i.e. how many products a visitor wants to order Show the following message in your browser: “John
//Doe ordered 5 T-shirt(s) on XYZ Clothing store”.
  
//let visitor = prompt('Hello Visitor, Enter your name... ');
//let product = prompt('What do you want to buy...');
//let quantity = prompt('How many?');

//document.write("<b>"+visitor+"</b>", ' ordered ', '<b>'+ quantity + '</b>', "  ",   "<b>" + product +"</b>"," (s) " + ' on xyz clothing store ' );



//Assignment :4
//Ch : 4

//1: Declare 3 variables in one statement. 

 //let a = 10, b = 20, c = 30;
 
 //2: Declare 5 legal & 5 illegal variable names. 
 // Legal Variables names :
 
// let _$;
// let camelCase;
 //let number;
 //let total = _$ + camelCase + numbe;
// let age ; 
 
 //Illegal Variable names :
 
// 1stVariable   //(starts with a number)
// my name       //(contains a space)

//total-amount.  //(contains a hyphen)

//phone#         //(contains a special character)

//class.         //(reserved keyword)
 
 // Ex : 2 (Illegal variables)
 
//let  _9w;

// let product cost = 3.45;
// let price23a% ;
// let 1st_name ="kelvin";
// let this is a variable = "john";
// let n*um = 15;

// . Display this in your browser 
// a)  A heading stating “Rules for naming JS variables” 

//document.write("<h3>Rules for Naming JavaScript Variables۔۔۔💫</h3>");

// b)  Variable names can only contain ______, ______, 
// ______ and ______. 

let a = 'underscore'; 'Digit'; 'Doller'; 'Letter';

//Ex : 2

//jo last mai re declear krwayegy wo show hoga browser pr.
// let a = 'underscore'; a='Digit'; a= 'Doller'; a= 'Letter';

// For example $my_1stVariable 

let example = "For example $my_1stVariable";
 document.write(" a) Variable names can only contain " +'<b>'+ a +  '</b>'+"<br>" , example , "<br>",'<br>');

// c) Variables must begin with a ______, ______ or 

let b = 'undersore'; 'Digit'; 'Doller'; 'letter';

// _____. For example $name, _name or name.

let example2 = "For example $my_1stVariable";
document.write('b) Variables must being with a '+'<b>'+ b + '</b>' ,'<br>','for example  $name, _name or name.','<br> ','<br>');

// d) Variable names are case _________ 

let c = 'Case Sensitive.'
document.write('c) Variable names are '+ '<b>'+c + '</b>','<br>','<br>');

// e) Variable names should not be JS _________   

let  d = 'Reserver Words';
document.write("d) Variable names should not be JavaScript " +'<b>'+ d +'</b>', '<br>');

 // ch : 5
// MATH EXPRESSIONS 
/* Write a program that take two numbers & add them in a 
new variable. Show the result in your browser. */

// let num1 = 6;
// let num2 = 2;
// let sum = num1 + num2;
//  document.write ( 'The sum of 6 + 2 =  ',sum);


// 2. Repeat task1 for subtraction, multiplication, division & modulus.
  
//   let num1 = 6;
//   let num2 = 2;
//   document.write ( 'The sum of 6 - 2 =  ', num1 - num2 , '<br>');
//   document.write ( 'The sum of 6 * 2 =  ', num1 * num2 , '<br>');
//   document.write ( 'The sum of 6 / 2 =  ', num1 / num2 , '<br>');
//   document.write ( 'The sum of 6 % 2 =  ', num1 % num2 , '<br>');


// 3.Do the following using JS Mathematic Expressions 




























































































































































































































































