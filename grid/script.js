let checkboxes;

let pablo = ["six_packs", "bbq_sauce", "mismatching_cars", "chicken", "dog piss", "tie_dye", "garage_doors", "undercuts", "hats", "hdmi_ports", "lattes", "scarves", "rainbow_sheen", "spuds", "trash_bags", "watches"]
let answers = [
    { name: "motorcycles", text: "motorcycles", correct: [0, 1, 2, 3] },
    { name: "apples", text: "apples", correct: [0, 3, 4, 5, 7, 8] },
];

let randNums = [...new Array(9).keys()];
randNums = randNums.sort((a, b) => 0.5 - Math.random());

// let currentAnswerNum = Math.floor(Math.random() * answers.length);
let currentAnswerNum = Math.floor(Math.random() * pablo.length);

window.addEventListener('DOMContentLoaded', () => {
    checkboxes = document.querySelectorAll('.checkbox');
    const labels = document.querySelectorAll('label');
    // document.getElementById("instructionText").innerHTML = answers[currentAnswerNum].text;
    // let imgSrc = answers[currentAnswerNum].name;

    document.getElementById("instructionText").innerHTML = pablo[currentAnswerNum].replace("_", " ");


    labels.forEach((label, key) => {
        //    label.style.backgroundImage = `url('assets/${imgSrc}/${key}.jpeg')`

        let img = pablo[currentAnswerNum];
        label.style.backgroundImage = `url('assets/pablo/${img}.jpeg')`;

        let index = randNums[key];

        let x = (index % 3) * 103.5;
        let y = Math.floor(index / 3) * 103.5;
        label.style.backgroundPosition = `${-x}px ${-y}px`;

    });
});



function verifyClicks() {
    document.getElementById("captchaDiv").style.display = "none";

    if (didWin2()) {
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

function didWin2() {
    let ans = [1, 3, 5, 7];
    let correctAns = ans.map(a => randNums.indexOf(a));
    // console.log(correctAns);
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