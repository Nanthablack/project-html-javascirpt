CodeDiscount = function () {

    let customer = document.getElementById("UserID").value;
    let discount = document.getElementById("Discount").value;
    if (parseInt(localStorage[customer]) >= parseInt(localStorage[discount])) {
        localStorage[customer] -= localStorage[discount];
        let item = localStorage.getItem(customer);
        let hist = localStorage.getItem(customer + ".history")



        var today = new Date().toLocaleString();
        today = today.replace(" ", "|");
        today = today.replace(",", "");
        today = today.replace(" ", "|");



        localStorage.setItem(customer + ".history", hist + " " + discount + "," + localStorage[discount] + "," + localStorage[discount + "_img"] + ",โปรโมชั่น/ส่วนลด," + today);
        localStorage.removeItem(discount);
        localStorage.removeItem(discount + "_img");
        alert("Finish purchase, now your point is " + item);
    } else if (parseInt(localStorage[customer]) < parseInt(localStorage[discount])) {
        alert("แต้มไม่พอ");
    }
    else {
        alert("รหัสโปรโมชันถูกใช้ไปแล้ว");
    }

}

function point() {
    let customer = localStorage.getItem("user_now");
    let point = document.getElementById("Point").value;
    if (localStorage[customer] !== null) {
        localStorage[customer] = parseInt(localStorage[customer]) + parseInt(localStorage[point]);
        let item = localStorage.getItem(customer);
        let hist = localStorage.getItem(customer + ".history")


        var today = new Date().toLocaleString();
        today = today.replace(" ", "|");
        today = today.replace(",", "");
        today = today.replace(" ", "|");


        localStorage.setItem(customer + ".history", hist + " " + point + "," + localStorage[point] + "," + localStorage[point + "_img"] + "," + "สะสมแต้ม" + "," + today);
        localStorage.removeItem(point);
        alert("Finish adding point, now your point is " + item);
    } else {
        alert("รหัสสะสมแต้มถูกใช้ไปแล้ว");
    }

}

generateCode = function (number, url, price, cost) {
    var result = [];
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < number; i++) {
        result.push(characters.charAt(Math.floor(Math.random() * charactersLength)))
    }
    result = String(result.join(''));
    localStorage.setItem(result, price);
    localStorage.setItem(result + "_img", url);
    localStorage.setItem(result + "_cost", cost);
    alert("Please remember this code " + result);
}

generatePoint = function (number) {
    var money = document.getElementById("money").value;
    var result = [];
    var characters = '@#$%^&*()_+abcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < number; i++) {
        result.push(characters.charAt(Math.floor(Math.random() * charactersLength)))
    }
    result = String(result.join(''));
    localStorage.setItem(result, money);
    localStorage.setItem(result + "_img", "assets/images/logo-mikucha.png");
    alert("Please remember this code " + result);
}

login = function () {
    let user = document.getElementById("user").value;
    let pass = document.getElementById("password").value;
    let key = localStorage[user + pass];
    if (key === "done!") {
        if (localStorage.getItem(user) === undefined) {
            localStorage[user] = 10000;
            localStorage[user + ".history"] = "";
        }
        localStorage.setItem("user_now", user);
        window.location.replace("indexCust.html");s
    }
    else if ((user == "Area 51" && pass == 123) || (user=="Room 39" && pass==123)) {
        localStorage.setItem("store_now", user);
        window.location.replace("indexStore.html");
    }
    else {
        alert("Invalid Password");
    }
}

reset = function () {

    var user = localStorage["user_now"];
    var branch = localStorage["store_now"];
    localStorage[user] = 10000;
    localStorage[user + ".history"] = "";
    localStorage[branch + ".order"] = "";
    localStorage["12345"] = 2000;
}

payment = function () {


    let code = document.getElementById("code").value;
    let bankAcc = document.getElementById("bankAcc").value;
    let bank = document.getElementById("bank").value;
    let branch = String(document.getElementById("branch").value);
    let user = localStorage['user_now'];
    localStorage[bankAcc] -= localStorage[code + "_cost"];
    if (parseInt(localStorage[user]) >= parseInt(localStorage[code])) {
        localStorage[user] -= localStorage[code];
        let item = localStorage.getItem(user);
        let hist = localStorage[branch + ".order"];



        var today = new Date().toLocaleString();
        today = today.replace(" ", ".");
        today = today.replace(",", "");
        today = today.replace(" ", ".");



        localStorage[branch + ".order"] = hist + " " + code + "," + bankAcc + "," + bank + "," + today + "," + localStorage[code + "_cost"] + "," + localStorage['user_now'] + ","+localStorage[code+'_img'];
        localStorage.removeItem(code);
        localStorage.removeItem(code + "_img");
        alert("Finish purchase, now your point is " + item);
    } else if (parseInt(localStorage[customer]) < parseInt(localStorage[discount])) {
        alert("แต้มไม่พอ");
    }
    else {
        alert("รหัสโปรโมชันถูกใช้ไปแล้ว");
    }
}

register = function () {
    let mail = document.getElementById("mail").value;
    let password = document.getElementById("password").value;
    localStorage[mail] = 10000;
    localStorage[mail + ".history"] = "";
    localStorage[mail + password] = "done!";

    alert("สมัครสมาชิกสำเร็จ"); 
    window.location.replace("Login.html");

}