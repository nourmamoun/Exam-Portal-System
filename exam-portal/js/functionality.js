window.addEventListener("load", function () {

    let title = document.getElementById("titleQuestion");
    let image = document.getElementById("imgQuestion");
    let list = document.getElementById("options");
    const nextBtn = this.document.getElementById("next-btn");
    const finishBtn = this.document.getElementById("finish-btn");
    const timerID = document.getElementById("timer");
    let questionScore = this.document.getElementById("questions_number");
    let timerContainer = document.querySelector(".timer_container")
    let examDiv = document.querySelector(".design-container");
    let scoreDiv = document.querySelector(".score-container");
    let scoreShape = document.querySelector("#shapeBorder");
    let scoreDataTxt = document.getElementById("score_number");
    let scorePercentage = document.getElementById("score_percentage");
    let countOfCurrentQuestion = 0;
    let selectedAnswer = null;
    let score = 0;
    let ShownID = [];
    let timer = null;

    // calling function start exam timer
    startTimer(60);

    //shuffle questions order
    const shuffleQuestions = randomOrder([...examQuestions]);

    //loading questions every time clicked on next btn
    function loadQuestions() {

        selectedAnswer = null;
        nextBtn.disabled = true;
        list.innerHTML = "";

        const currentQuestion = shuffleQuestions;
        if (ShownID != currentQuestion[countOfCurrentQuestion].id) {
            ShownID.push(currentQuestion[countOfCurrentQuestion].id);
            title.textContent = currentQuestion[countOfCurrentQuestion].title;
            image.src = currentQuestion[countOfCurrentQuestion].imageUrl;
            console.log(currentQuestion)
            let shuffleAns = randomOrder([...currentQuestion[countOfCurrentQuestion].answers]);

            console.log(shuffleAns)
            shuffleAns.forEach(answer => {
                const li = document.createElement("li");
                li.textContent = answer;
                li.addEventListener("click", function () {

                    li.classList.add("active");
                    const listItems = Array.from(list.children);
                    listItems.forEach(item => {
                        if (li != item) {
                            item.classList.remove("active");
                            item.classList.add("disabled");
                        }
                        item.style.pointerEvents = "none";
                    });
                    selectedAnswer = answer;
                    nextBtn.disabled = false;
                });
                list.appendChild(li);
            });
        }
    }

    //starting exam timer
    function startTimer(seconds) {
        let timeRemaining = seconds;
        let widthPerSecond = timerContainer.offsetWidth / timeRemaining;

        timer = setInterval(() => {
            timeRemaining--;
            timerContainer.style.width = `${widthPerSecond * timeRemaining}px`
            timerID.textContent = timeformat(timeRemaining);
            timerID.style.color = "white";
            if (timeRemaining <= 0) {
                clearInterval(timer);
                timer = null;
                timerID.textContent = "Time's Up!";
                timerID.style.color = "black";
                examDiv.style.display = "none";
                scoreDiv.style.display = "flex";
                if(score>6){
                    scoreShape.style.border = "15px solid green";
                }else{
                     scoreShape.style.border = "15px solid red";
                }
                scoreDataTxt.textContent = `Your Score is ${score}/10`;
                scorePercentage.textContent = `${(score / 10) * 100}%`;
            }
        }, 1000);
    }

    //next btn to get next question
    nextBtn.addEventListener("click", function () {

        const currentQuestiont1 = shuffleQuestions[countOfCurrentQuestion];
        if (selectedAnswer == currentQuestiont1.correctAns) {
            score++;
        }
        countOfCurrentQuestion++;
        questionScore.textContent = `${countOfCurrentQuestion + 1}/10`;

        if (countOfCurrentQuestion < examQuestions.length) {

            finishBtn.disabled = false;
            loadQuestions();
            if (countOfCurrentQuestion == 9) {
                finishBtn.style.display = "inline",
                    nextBtn.style.display = "none";
            }
        }
    })

    //finish exam btn
    finishBtn.addEventListener("click", function () {
        clearInterval(timer);
        timer = null;
        examDiv.style.display = "none";
        scoreDiv.style.display = "flex";
        
        if(score>6){
            scoreShape.style.border = "15px solid green";
        }else{
             scoreShape.style.border = "15px solid red";
        }
        scoreDataTxt.textContent = `Your Score is ${score}/10`;
        scorePercentage.textContent = `${(score / 10) * 100}%`;

    })

    //start the questions
    loadQuestions();

})
