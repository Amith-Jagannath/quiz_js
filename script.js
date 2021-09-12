const quizDB=[
    {
        question: "Q1.what is the fullform of html?",
        a: "Hello to my land",
        b:"Hey text markup language",
        c:"hyper text makeup language",
        d:"hyper text markup language",
        ans:"ans4 "
    },
    {
        question: "Q2.what is the fullform of css?",
        a: "cascading style sheet",
        b:"cascading style sheep ",
        c:"cartoon style sheet",
        d:"cascading super sheet",
        ans:"ans1 "
    },
    {
        question: "Q3.what is the fullform of http?",
        a: "Hypertext transfer protocol",
        b:"hypertext transfer product",
        c:"hypertext test protocol",
        d:"hey text transfer protocol",
        ans:"ans1 "
    },
    {
        question: "Q4.what is the fullform of html?",
        a: "Hello to my land",
        b:"Hey text markup language",
        c:"hyper text makeup language",
        d:"hyper text markup language",
        ans:"ans4 "
    },

]
const question=document.querySelector('.question');
const opt1=document.querySelector('#opt1');
const opt2=document.querySelector('#opt2');
const opt3=document.querySelector('#opt3');
const opt4=document.querySelector('#opt4');
const submit=document.querySelector('#submit');
const answers=document.querySelectorAll('.answer');
const showScore=document.querySelector('#showScore');
let questionCount=0;
let score=0;
const loadQuestion=()=>{
    const questionList=quizDB[questionCount];
     question.innerHTML=questionList.question;
     opt1.innerText=questionList.a;
     opt2.innerText=questionList.b;
     opt3.innerText=questionList.c;
    opt4.innerText=questionList.d; 
} 
 if(questionCount==0)
loadQuestion();

const getCheckAnswer = () => {
    let answer;
    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked)
        {
            answer=curAnsElem.id;
        }
        
    });
    return answer;
};

submit.addEventListener('click',() => {
   let checkedAnswer=getCheckAnswer();
   console.log(checkedAnswer);
   if(checkedAnswer==quizDB[questionCount].ans)
{
    score++;
console.log(score); 
};
questionCount++;
if(questionCount<quizDB.length)
{
    loadQuestion();
}
else{
     
    showScore.innerHTML=`
     <h2>You  </h2>
 <button class="btn" onclick="location.reload()">play again</button> 
`;
  showScore.classlist.remove('scoreArea');
}
}
);


