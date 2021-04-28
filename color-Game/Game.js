
let colorText = ["red", "black", "white", "green", "blue"];


container = document.querySelector(".container");
main = document.querySelector(".main");
text = document.getElementById(`text`);
play = document.querySelector(".play");
Score = document.getElementById("score");
highScore = document.getElementById("highScore");

let highscore = new Number(0);
let score = new Number(0);


// colorText ten random değer gönder
function random() {
    let rand = Math.floor(Math.random() * colorText.length);
    return colorText[rand];
}


function getStr(boxList) {
    // kutulardan birinin rengini al !!!
    let textColor = boxList[Math.floor(Math.random() * 3)].classList[1];
    let text = document.getElementById(`text`)
    text.style.color = `${textColor}`

    // kutuların renk listeinden bir renk ismi al
    text.innerHTML = `${boxList[Math.floor(Math.random() * 3)].classList[1]}`

}

// kutulara renk ver
function setColorToList() {
    let boxList = Array.from(document.querySelector(".boxes").children);
    boxList.forEach(element => {
        let boxColor = this.random();
        element.classList += ` ${boxColor}`;
        element.style.backgroundColor = `${boxColor}`
    });

    this.getStr(boxList);
}


// kutulara random arka plan rengi ver
function playGame() {

    //  kutuların önceki renklerini sil
    remove();

    setColorToList();
}

// kutuları bir önceki renklerini siler
function remove() {
    let boxList = Array.from(document.querySelector(".boxes").children);
    boxList.forEach(element => {
        element.classList = "box";
    });
}

function puanla(puan) {
    // eğer scror high scorrdan fazla ise highscoru scora eşitle
    if (highscore < puan) {
        highscore = puan;
    }
    // scoru sıfırla
    score = 0;
    // arayüzdeki scoru sıfırla
    Score.innerHTML = 0;
    // high scoru ara yüzde göster
    highScore.innerHTML = `${highscore}`;
}

// game over sahnesini oluştur
function createGameOver() {
    let element = document.createElement("div");
    element.className = "gameover";
    let html = `
        <div class="gameover" style="margin: 3rem auto; text-align: center;font-size: 2rem; color:white">
            Game Over :(
            <div class="again" style="margin:2rem 0px;">Again</div>
        </div>
    `
    element.innerHTML = html;
    container.appendChild(element);
}



container.addEventListener("click", (e) => {

    // oyunu başlat
    if (e.target.innerHTML == "play") {

        playGame();
        // play yazısını kaldır
        play.style.display = "none";
    }

    // oyunu yeniden başlat
    if (e.target.classList[0] == "again") {

        // game over sahnesini kaldır
        e.target.parentElement.remove();
        // oyunu başlat
        playGame();
        main.style.display = "block";
    }


    // doğru kutuya basılırsa bir sonraki sahne ye geç ve puanı arttır
    if (e.target.classList[1] == text.innerHTML) {
        Score.innerHTML = ++score;
        playGame();
    }
})


// yanlış kutuya basılırsa
document.querySelector(".boxes").addEventListener("click", (e) => {
    if (e.target.classList[1] != text.innerHTML) {

        // oyun sahnesini kaldır
        main.style.display = "none";

        // puanlamayı başlat
        puanla(score);

        createGameOver();
    }
})

