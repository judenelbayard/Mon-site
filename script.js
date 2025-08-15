const questions=[
    {
        level:"Debutant",
        question:"kisa html vle di?",
        options:["Hyper Text Markup Language","High Tech mordern Languange","Home Tool Main Link"],
        answer:"Hyper Text Markup Language",
        explication:"HTML vle de HyperText Marcup Language, Li itilize pou strikti paj entetenet.",
        
    },
    {
        question:"ki rakousi pou kole?",
        options:["Ctrl+S","Ctrl+A","Ctrl+V "],
        answer:"Ctrl+V",
        explication:"",

    },
    {
        level:"Moyen",
        question:"ki lang ki itilize pou bay stil nan yon paj web?",
        options:["HTML","CSS","Python"],
        answer:"CSS",
        explication:"Css se Cascading Style Sheets, li kontwole aparans paj la.",

    },
    {
        level:"Avance",
        question:"kisa JSON itilize pou?",
        options:["bay koule","sere done","Rezo wifi"],
        answer:"Sere done",
        explication:"JSON se Javascript Objet Notation, li itilize pou sere ak transfere done.",
    },
];
let current=0;
let score=0;
let selectedCount =0;
let maxQuestion=5;
function startQuiz(){
    maxQuestions=parseInt(document.getElementById("questionCount").value);
    document.getElementById("setup").classList.remove("hidden");
    loadQuestion();
}
function loadQuestion(){
    const q=questions[current];
    document.getElementById("level").textContent=q.level;
    document.getElementById("questionBox").textContent=q.question;
    const optionsBox=document.getElementById("optionBox");
    optionsBox.innerHTML="";
    q.options.forEach(opt=>{
        const btn=document.createElement("button");
        btn.textContent=opt;
       /* btn.onclick=()=>checkAnswer(option);*/
       btn.onclick=function(){ checkAnswer(opt)};
        optionsBox.appendChild(btn);
    });
    document.getElementById("feedback").textContent="";

}
function checkAnswer(option){
    const q= questions[current];
    const feedback=document.getElementById("feedback");
    if(option===q.answer){
        feedback.textContent="bon repons!";
        score++;
    }else{
        feedback.innerHTML=`<span style="color: yellow;">move repons.</span>`
    
        /*feedback.textContent= 'move repons. ${q.explication()}' ;*/
    }
    selectedCount++;
}
function nextQuestion(){
    if(selectedCount>=maxQuestions||current>=questions.length-1){
        endQuiz();
        return;
    }
    current++;
    loadQuestion();
}
function endQuiz(){
    document.getElementById("quiz").classList.add(hidden);
    document.getElementById("result").classList.remove("hidden");
    document.getElementById("scoreDisplay").textContent='ou fe{score} sou ${selectedCount} kesyon.';
}
function restartQuiz(){
    current=[];
    score=[];
    selectedCount=[];
    document.getElementById("result").classList.add("hidden");
    document.getElementById("setup").classList.remove("hidden");
    return;
}























































