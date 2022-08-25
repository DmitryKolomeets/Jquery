


const form = document.forms["form"];
const button = form.elements["button"];
const inputArr = Array.from(form);
const validInputArr = [];
inputArr.forEach((el) => {
    if (el.hasAttribute("data-reg")) {
        el.setAttribute("is-valid", "0")
        validInputArr.push(el);
    }
});


console.log(validInputArr);

form.addEventListener("input", inputHandler);
button.addEventListener("click", buttonHandler);

function inputHandler({target}) {
    if (target.hasAttribute("data-reg")) {
        inputCheck(target);
         }
}
function inputCheck(el) {
    const inputValue = el.value;
    const inputReg = el.getAttribute("data-reg");
    const reg = new RegExp(inputReg);
    if (reg.test(inputValue)) {
        el.style.border = "2px solid rgb(0, 196, 0)";
        el.setAttribute("is-valid", "1");
    }else {
        el.style.border = "2px solid rgb (255, 0, 0)";
        el.setAttribute("is-valid", "0");
    }

}
function buttonHandler(e) {
    const isAllValid = [];
    validInputArr.forEach((el) => {
        isAllValid.push(el.getAttribute("is-valid"));
            });
const isValid = isAllValid.reduce((acc, current) => {
    return acc && current;
});
    if (reg.test(name.value) &&,
       (reg/.test(email.value) === true),
       (reg/.test(phone.value) &&;{

    alert("Мы услышим вас");
    else {alert("Мы вас не слышим");
};
}



/*Сделать валидацию для вашей формы
1. Имя (Длина 2 - 20 только английские) ([a-zA-Z]{2,20})\s
2. Емейл проверить что там длина 6 -12 символов(англиские) до @ и потом почта gmail.com или ukr.net
([a-z]{6,12})@\gmail.com|ukr.net\)$
 */
/*
3. Мобильный телефон 380 + 50|63|66|67|68|91|92|93|97| 96 + 7 digits
(\+380)(50|63|66|67|68|91|92|93|97|96)\d{7})

В итоге мы должны получить alert c сообщением "Мы услышим вас" или "Мы вас не слышим"

 */

