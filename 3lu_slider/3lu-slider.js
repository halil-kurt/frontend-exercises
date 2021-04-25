// <!-- ilk projem-->
// <!-- oluşturma tarihi-->
// <!-- 17 mart 2021 çarşamba-->

let row = document.querySelector(".row");

var id = new Number(1);
var id2 = new Number(2);
var id3 = new Number(3);



// images klasöründeki resim sayısı
const imgCount = 4;

class Slider {

    // gelen id değerini (0 <= id <= imgCount)  arliginda tutar ve showInUi ya gönderir
    controller() {
        if (id < 1) {
            id = imgCount;

        };
        if (id2 < 1) {
            id2 = imgCount;

        };

        if (id3 < 1) {
            id3 = imgCount;

        };

        if (id > imgCount) {
            id = 1;

        };

        if (id2 > imgCount) {
            id2 = 1;

        };
        if (id3 > imgCount) {
            id3 = 1;

        };

        this.showInUi(id, id2, id3);
    }

    // id yi kullanarak ui de resimleri ekler
    showInUi(id, id2, id3) {
        let html = `
        <div class="col-3"><img class="img-fluid prev" src="images/img${id}.jpg" alt=""></div>
        <div class="col-6"><img class="img-fluid" src="images/img${id2}.jpg" alt=""></div>
        <div class="col-3"><img class="img-fluid next" src="images/img${id3}.jpg" alt=""></div>
        `
        row.innerHTML = html;
    }

    // tıklama ile resimleri kaydır
    slide(target) {

        if (target.classList.contains("next")) {
            id += 1;
            id2 += 1;
            id3 += 1;
            slide.controller(id, id2, id3);
        }
        else if (target.classList.contains("prev")) {
            id -= 1;
            id2 -= 1;
            id3 -= 1;
            slide.controller(id, id2, id3);
        };

    };

    // Zamana bağlı olarak id değerini artırır böylce resimler süreklideğişecek
    outSlide() {
        setInterval(function () {
            let slide = new Slider();
            id += 1;
            id2 += 1;
            id3 += 1;
            slide.controller(id, id2, id3);
        }, 7000);
    };
};

// uygulamanın başlatılması
let slide = new Slider()
slide.outSlide();

row = document.querySelector(".row");
row.addEventListener("click", function (e) {
    let slide = new Slider();
    slide.slide(e.target);
});
