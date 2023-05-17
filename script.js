


function notRobotClicked(box) {
    setTimeout(() => {
        document.getElementById("captchaDiv").style.display = "none";
        document.getElementById("loadingDiv").style.display = "block";
        setTimeout(() => {
            location.reload();
        }, 3000);
    }, 5000);
}