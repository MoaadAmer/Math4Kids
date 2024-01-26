window.addEventListener("load", (event) => {
    console.log("page is fully loaded");

    const option1 = document.getElementById("option1");
    const option2 = document.getElementById("option2");
    const option3 = document.getElementById("option3");
    const audio = document.getElementsByTagName("audio")[0];
    let answer = 0;

    function generateEquation() {
        let num1 = Math.floor(Math.random() * 13);
        let num2 = Math.floor(Math.random() * 13);

        let dummyAnswer1 = Math.floor(Math.random() * 13);
        let dummyAnswer2 = Math.floor(Math.random() * 13);

        let allAsnwers = []

        answer = num1 + num2;

        document.getElementById("num1").innerHTML = num1;
        document.getElementById("num2").innerHTML = num2;

        allAsnwers = [answer, dummyAnswer1, dummyAnswer2];

        allAsnwers = shuffle(allAsnwers);

        option1.innerHTML = allAsnwers[0];
        option2.innerHTML = allAsnwers[1];
        option3.innerHTML = allAsnwers[2];

    }
    option1.addEventListener("click", function () {
        if (option1.innerHTML == answer) {
            generateEquation();
        }
        else {
            audio.play();
        }
    });

    option2.addEventListener("click", function () {
        if (option2.innerHTML == answer) {
            generateEquation();
        }
        else {
            audio.play();
        }
    });

    option3.addEventListener("click", function () {
        if (option3.innerHTML == answer) {
            generateEquation();
        }
        else {
            audio.play();
        }
    });

    generateEquation();
});

function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex > 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}
