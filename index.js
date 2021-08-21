
var readlineSync = require('readline-sync')
var userName=readlineSync.question('please tell us your name: ')
console.log('hi',userName,'Welcome to quiz')
var score=0
//let me know how much you know about india
function aboutIndia(question,answer){
  var answerFromUser=readlineSync.question(question)

  if(answerFromUser==answer){
    score=score+1
    console.log('you are right',score)
  }
  else{
    console.log('sorry you did a mistakes')
  }
}









var detailsOfIndia=[{
  question:'What is the capital of india? ',
  answer:'new delhi'
},  {question:'how many states does india have? ',
  answer:29
},  {question:'Which state is famous for IT? ',
  answer:'banglore'
},  {question:'Agra is famous for?',
  answer:'taj mahal'
},  {question:'When india got independence? ',
  answer:1947
},  {question:'What is the national anthem of india ',
  answer:'jana gana mana'
},  {question:'how many colors does indian flag have ',
  answer:3
}]

for(var i=0;i<detailsOfIndia.length;i++){
  currentQuestion=detailsOfIndia[i]
  aboutIndia(currentQuestion.question,currentQuestion.answer)
}

console.log('your final score is: ',score)
console.log('----------')
console.log('top performers: balu,raju,ravi')