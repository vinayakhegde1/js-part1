window.onload = function () {
    const startButton = document.getElementById("start");
    const resetButton = document.getElementById("reset");
    const timerElement = document.getElementById("timer");

    let timer; // Add this line to declare the timer variable

    startButton.addEventListener('click', startTimer);
    resetButton.addEventListener('click', resetTimer);

    function startTimer() {
        startButton.disabled = true;
        resetButton.disabled = false;

       let timeLeft = 25 * 60;

        timer = setInterval(function () {
            const min = Math.floor(timeLeft / 60);
            const sec = timeLeft % 60;

            timerElement.innerHTML = formatTime(min) + ":" + formatTime(sec);

            if (timeLeft === 0) {
                clearInterval(timer);
                startButton.disabled = false;
                resetButton.disabled = true;
            }
            timeLeft--;
        }, 1000);
    }

    function resetTimer() {
        clearInterval(timer);
        timerElement.innerHTML = "25:00";
        startButton.disabled = false;
        resetButton.disabled = true;
    }

    function formatTime(time) {
        return time < 10 ? "0" + time : time;
    }
}