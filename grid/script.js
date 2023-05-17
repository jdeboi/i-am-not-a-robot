let checkboxes;

let answers = [
    { name: "motorcycles", text: "motorcycles", correct: [0, 1, 2, 3] },
    { name: "apples", text: "apples", correct: [0, 3, 4, 5, 7, 8] },
];

let currentAnswerNum = Math.floor(Math.random() * answers.length);


window.addEventListener('DOMContentLoaded', () => {
    checkboxes = document.querySelectorAll('.checkbox');
    const labels =  document.querySelectorAll('label');
    document.getElementById("instructionText").innerHTML = answers[currentAnswerNum].text;
    
    let imgSrc = answers[currentAnswerNum].name;

    labels.forEach((label, key) => {
       label.style.backgroundImage = `url('assets/${imgSrc}/${key}.jpeg')`
    });
});



function verifyClicks() {
    document.getElementById("captchaDiv").style.display = "none";
    
    if (didWin()) {
        document.getElementById("loadingDiv").style.display = "block";
              
    }
    else {
        document.getElementById("robotDiv").style.display = "block";
    }
    setTimeout(() => location.reload(), 3500);
}

function didWin() {
    let correctAns = answers[currentAnswerNum].correct;
    let totalChecked = 0;
    let correctChecked = 0;
    for (const c of checkboxes) {
        if (c.checked) {
            totalChecked++;
        }
    }
    for (const id of correctAns) {
        if (checkboxes[id].checked) {
            correctChecked++;
        }
    }
    return totalChecked == correctChecked && correctChecked == correctAns.length;
}