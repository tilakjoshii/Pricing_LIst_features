
let m_btn1 = document.querySelector(".m-btn1");
let m_btn2 = document.querySelector(".m-btn2");
let m_btn3 = document.querySelector(".m-btn3");
let m_btn4 = document.querySelector(".m-btn4");

function clk1() {
        m_btn1.style.color="#45b34a";
}
function clk2() {
        m_btn2.style.color="#45b34a";
}
function clk3() {
        m_btn3.style.color="#45b34a";
}
function clk4() {
        m_btn4.style.color="#45b34a";
}
function clk11() {
    m_btn2.style.color="black";
    m_btn3.style.color="black";
    m_btn4.style.color="black";
}
function clk12() {
    m_btn1.style.color="black";
    m_btn3.style.color="black";
    m_btn4.style.color="black";
}
function clk13() {
    m_btn1.style.color="black";
    m_btn2.style.color="black";
    m_btn4.style.color="black";
}
function clk14() {
    m_btn1.style.color="black";
    m_btn2.style.color="black";
    m_btn3.style.color="black";
}
let basic = document.querySelectorAll(".basic");
let advance = document.querySelectorAll(".advance");
let premium = document.querySelectorAll(".premium");
let premium_plus = document.querySelectorAll(".premium-plus");
console.log(basic);
function display1() {
    for (let i = 0; i < basic.length; i++) {
        basic[i].style.display = "grid";
      }
}
function display2() {
    for (let i = 0; i < basic.length; i++) {
        advance[i].style.display = "grid";
      }
}
function display3() {
    for (let i = 0; i < basic.length; i++) {
        premium[i].style.display = "grid";
      }
}
function display4() {
    for (let i = 0; i < premium_plus.length; i++) {
        premium_plus[i].style.display = "grid";
      }
}
function displaynoneB() {
    for (let i = 0; i < basic.length; i++) {
        basic[i].style.display = "none";
      }
}
function displaynoneA() {
    for (let i = 0; i < basic.length; i++) {
        advance[i].style.display = "none";
      }
}
function displaynoneP() {
    for (let i = 0; i < basic.length; i++) {
        premium[i].style.display = "none";
      }
}
function displaynonePP() {
    for (let i = 0; i < premium_plus.length; i++) {
        premium_plus[i].style.display = "none";
      }
}