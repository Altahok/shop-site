function print_contact() {
    alert('skype: helper \n telegram: @helper \n tel: 89649956652');
 }
 
//  function ThePresent() {
//     prompt('АКЦИЯ!! Введите имя друга рассказавшего вам о нашем магазине и вы с ним ПОЛУЧИТЕ СКИДКУ в 25%');
//  }


 let btns = document.getElementsByClassName("main-item-btn");

btns.onclick = function () {
    btns.style.backgroundColor = "rgb(110, 167, 241)";
 }


const modal = document.getElementById("myModal");
const btn = document.getElementById("gift-btn");
const closeBtn = document.getElementsByClassName("closeBtn")[0];

var giftBtn = document.getElementById("gift-btn");


// Открыть модальное окно 
btn.onclick = function () {
    modal.style.display = "block";
}

// Закрытие окна
closeBtn.onclick = function () {
    modal.style.display = "none";
    console.log("Закрыть по кнопке");
}

// Закрытие окна нажатием на пустое место 
window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

// Закрытие через кнопку отправить "Помощь"
const closebtns = document.getElementById("btnPresent");

closebtns.onclick = function (closed) {
    modal.style.display = "none";
}

function showGift() {
    giftBtn.style.opacity = 1;
}

// Функция позволяющая нам задать время в милисекундах для срабатывания другой функции 
setTimeout(showGift, 2000);
