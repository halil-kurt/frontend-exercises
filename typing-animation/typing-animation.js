
let h1 = document.getElementById("text");
let imlec = document.getElementById("imlec");

const delay = ms => new Promise(res => setTimeout(res, ms));
const type = async () => {
    i = 0;
    let wordList = Array.from("Javascript ile yazı animasyonu:)")
    while (i < wordList.length) {
        imlec.style.color = "white";
        await delay(70);
        imlec.style.color = "transparent";
        h1.innerHTML += `${wordList[i]}`;
        await delay(70);
        i++;
        
    };
};

type();


