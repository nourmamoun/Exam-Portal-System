const startExamBtn = document.getElementById("start-btn");
const checkCondition = document.getElementById("terms_condition");

//to enable the start exam btn
checkCondition.addEventListener("change", function () {
    startExamBtn.disabled = !checkCondition.checked;
})

//navigate to exam portal
startExamBtn.addEventListener("click", function () {
    window.open("../exam-portal/exam-page.html", "_self");
})