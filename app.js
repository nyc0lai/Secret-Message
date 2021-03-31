let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

secretMessage.pop(); //remove the last string

secretMessage.push('to', 'Program'); //add the words separate to the end of array

// inlocuim 'easily' cu 'right' MANUAL
secretMessage[7] = 'right';

/*
// inlocuim 'easily' cu 'right' AUTOMAT
for(let i=0; i<secretMessage.length; i++){
    if (secretMessage[i] === 'easily') {
        secretMessage[i] = 'right';
    } 
}
*/
secretMessage.shift(); //remove the first string of the array

secretMessage.unshift('Programming'); //add the string 'Programming' to the beginning of the array

secretMessage.splice(6, 5, 'know'); //remove the strings 'get', 'right', 'the', 'first', 'time,', and replace them with the single string 'know'

console.log(secretMessage.join()); //print the secret message as a sentence.
