function convertToRoman(num) {  
	let ones = ["","I","II","III","IV","V","VI","VII","VIII","IX"];
	let tens = ["","X","XX","XXX","XL","L","LX","LXX","LXXX","XC"];
	let hund = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"];
    
	let thou = "";
  let thousandsCount = Math.floor(num / 1000);
  for (let i = 0; i < thousandsCount; i++) {
    thou += "M";
  }
	return thou 
       + hund[Math.floor((num%1000)/100)] 
       + tens[Math.floor((num%100)/10)] 
       + ones[num%10];
}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
