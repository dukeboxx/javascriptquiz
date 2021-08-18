function check() {
    var c=0;
    var q1=document.quiz.question1.value;
    var q2=document.quiz.question2.value;
    var q3=document.quiz.question3.value;
    var q4=document.quiz.question4.value;
    var q5=document.quiz.question5.value;
    var result=document.getElementById("result");
    var quiz=document.getElementById("quiz");
    if (q1=="Jane Austen") {c++}
    if (q2=="Anna Karenina") {c++}
    if (q3=="Stephen King") {c++}
    if (q4=="Alice's Adventures in Wonderland") {c++}
    if (q5=="The Picture of Dorian Gray") {c++}
    quiz.style.display="none";
        
    if (c==c) {
        result.innerHTML= "Your score is " + c
     
    } 
}