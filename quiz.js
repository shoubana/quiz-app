let quizData = [
  {
    question: "Most popular programming languge ?",
    a: "C++",
    b: "Python",
    c: "JavaScript",
    answer: "c",
  },
];
// console.log(quizData[0].question);
// Get elements from DOM
let title = document.querySelector(".title");
let aLabel = document.querySelector(".aLabel");
let bLabel = document.querySelector(".bLabel");
let cLabel = document.querySelector(".cLabel");
let submitBtn = document.getElementById("submit");
let answers = document.querySelectorAll(".answer")
// console.log(answers);
//  console.log(title);
// console.log(submitBtn);
// console.log("answers are",answers);

// Task 1
// Disply UI

function displyQuestionsAnswers(e) {
  title.innerHTML = quizData[0].question;
  aLabel.innerHTML = quizData[0].a;
  bLabel.innerHTML = quizData[0].b;
  cLabel.innerHTML = quizData[0].c;
}
// Task 2
// check submited answer
function submitAnswer() {
  submitBtn.addEventListener("click", function (e) {
    e.preventDefault()
    //Task 3
    //Get user answer here
   let userAnswer= getUserAnswer();
//    console.log("user has selected",userAnswer);
if(userAnswer ===quizData[0].answer){
    console.log("you are great");
    title.classList.add('correct-answer')
    setTimeout(()=>{
        title.classList.remove('correct-answer')
    },1000)
}else{
    console.log("pls check ur answer");
    title.classList.add('wrong-answer')
    setTimeout(()=>{
        title.classList.remove('wrong-answer')
    },1000)
}
  });
}

function getUserAnswer() {
  let userAnswer
  answers.forEach(function(answer){
    // console.log(answer);
    if(answer.checked === true){
        userAnswer =answer.id

    }

  })
//   console.log(userAnswer);
  return userAnswer;
  
  
}
//function involk(call)
displyQuestionsAnswers();
submitAnswer();
