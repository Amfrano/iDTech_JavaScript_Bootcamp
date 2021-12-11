var sentence = ""

let words =  ['This', 'is', 'Javascript', 'Bootcamp!'];
function createSentence(words){
    for (let i =0; i< words.length; i++)
        sentence+= words[i] + ' '
        
    return sentence
}
console.log(createSentence(words))

