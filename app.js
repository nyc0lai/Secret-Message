let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

secretMessage.pop(); //remove the last string

secretMessage.push('to', 'Program'); //add the words separate to the end of array

const x = secretMessage.indexOf('easily'); //find the index number for 'easily'

secretMessage[x] = 'right'; //and replace with 'right'

secretMessage.shift(); //remove the first string of the array

secretMessage.unshift('Programming'); //add the string 'Programming' to the beginning of the array

secretMessage.splice(6, 5, 'know'); //remove the strings 'get', 'right', 'the', 'first', 'time,', and replace them with the single string 'know'

console.log(secretMessage.join(' ')); //print the secret message as a sentence.
